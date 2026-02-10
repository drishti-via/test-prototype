"""
Drishti.py

A Python module with enhanced structured, leveled, timestamped logging.
Supports log rotation (size-based) and retention (time-based) configured via environment variables.
"""

import os
import sys
import logging
import logging.handlers
from datetime import datetime, timezone as tz
from typing import Optional, Dict, Any
from enum import Enum

# -----------------------------------------------------------------------------
# Configuration (from environment variables with defaults)
# -----------------------------------------------------------------------------

LOG_LEVEL_ENV = os.getenv('DRISHTI_LOG_LEVEL', 'INFO').upper()
LOG_FILE_PATH = os.getenv('DRISHTI_LOG_FILE_PATH', './logs/drishti.log')
LOG_ROTATE_MAX_BYTES = int(os.getenv('DRISHTI_LOG_ROTATE_MAX_BYTES', '1048576'))  # 1MB default
LOG_ROTATE_MAX_FILES = int(os.getenv('DRISHTI_LOG_ROTATE_MAX_FILES', '5'))
LOG_RETENTION_DAYS = int(os.getenv('DRISHTI_LOG_RETENTION_DAYS', '14'))

# Map string level names to logging constants
LOG_LEVELS = {
    'INFO': logging.INFO,
    'WARNING': logging.WARNING,
    'ERROR': logging.ERROR,
    'DEBUG': logging.DEBUG,
    'CRITICAL': logging.CRITICAL
}

# -----------------------------------------------------------------------------
# Custom Formatter for Structured Logging
# -----------------------------------------------------------------------------

class StructuredFormatter(logging.Formatter):
    """
    Custom formatter that produces structured, timestamped log entries.

    Format: [timestamp] [level] [source] message (optional metadata)
    """

    def __init__(self):
        super().__init__()
        self.datefmt = '%Y-%m-%dT%H:%M:%S.%fZ'  # ISO 8601 format

    def format(self, record: logging.LogRecord) -> str:
        # Create ISO timestamp (timezone-aware)
        timestamp = datetime.now(tz.utc).strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'

        # Build log entry parts
        parts = [
            f'[{timestamp}]',
            f'[{record.levelname}]'
        ]

        # Add source/module name if available
        if hasattr(record, 'source') and record.source:
            parts.append(f'[{record.source}]')

        # Message
        parts.append(record.getMessage())

        # Add extra context/metadata if present
        if hasattr(record, 'meta') and record.meta:
            parts.append(str(record.meta))

        # Add exception info if present
        if record.exc_info:
            parts.append('\n' + self.formatException(record.exc_info))

        return ' '.join(parts)


# -----------------------------------------------------------------------------
# Logger Factory
# -----------------------------------------------------------------------------

class LoggerManager:
    """
    Central logger manager that configures and provides scoped loggers.
    """

    _instance = None
    _initialized = False

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if self._initialized:
            return

        self._initialized = True
        self._loggers: Dict[str, logging.Logger] = {}

        # Configure root logger (console only by default)
        self.root_logger = logging.getLogger('drishti')
        self.root_logger.setLevel(LOG_LEVELS.get(LOG_LEVEL_ENV, logging.INFO))

        # Console handler always active
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setFormatter(StructuredFormatter())
        self.root_logger.addHandler(console_handler)

        # File handler with rotation (only if file path is specified)
        if LOG_FILE_PATH:
            self._setup_file_handler()

    def _setup_file_handler(self):
        """Configure file-based logging with rotation and retention."""
        try:
            # Ensure log directory exists
            log_dir = os.path.dirname(LOG_FILE_PATH)
            if log_dir and not os.path.exists(log_dir):
                os.makedirs(log_dir, exist_ok=True)

            # Rotating file handler (size-based rotation)
            file_handler = logging.handlers.RotatingFileHandler(
                LOG_FILE_PATH,
                maxBytes=LOG_ROTATE_MAX_BYTES,
                backupCount=LOG_ROTATE_MAX_FILES
            )
            file_handler.setFormatter(StructuredFormatter())
            self.root_logger.addHandler(file_handler)

            # Run retention cleanup on startup
            if LOG_RETENTION_DAYS > 0:
                self._cleanup_old_logs()

        except Exception as e:
            # If file logging fails, continue with console only
            print(f'Could not configure file logging: {e}', file=sys.stderr)

    def _cleanup_old_logs(self):
        """Remove log files older than the configured retention period."""
        try:
            log_dir = os.path.dirname(LOG_FILE_PATH)
            if not log_dir or not os.path.exists(log_dir):
                return

            import time
            cutoff_time = time.time() - (LOG_RETENTION_DAYS * 24 * 60 * 60)
            log_basename = os.path.basename(LOG_FILE_PATH)

            for filename in os.listdir(log_dir):
                # Check if file matches our log pattern
                if not (filename == log_basename or filename.startswith(log_basename + '.')):
                    continue

                filepath = os.path.join(log_dir, filename)
                if os.path.isfile(filepath):
                    # Check file age
                    if os.path.getmtime(filepath) < cutoff_time:
                        os.remove(filepath)
                        print(f'Deleted old log file: {filename}')

        except Exception as e:
            print(f'Error during log cleanup: {e}', file=sys.stderr)

    def get_logger(self, source: Optional[str] = None) -> logging.Logger:
        """
        Get or create a scoped logger.

        Args:
            source: Module name or source identifier

        Returns:
            A logger instance with the specified source
        """
        if source and source not in self._loggers:
            # Create a new logger for this source
            logger = self.root_logger.getChild(source)
            logger.setLevel(self.root_logger.level)

            # Add source as an adapter context
            class SourceAdapter(logging.LoggerAdapter):
                def process(self, msg, kwargs):
                    kwargs.setdefault('extra', {})
                    kwargs['extra']['source'] = source
                    return msg, kwargs

            adapted_logger = SourceAdapter(logger, {'source': source})
            self._loggers[source] = adapted_logger

        return self._loggers.get(source, self.root_logger)


# Singleton instance
_manager = LoggerManager()


def get_logger(source: Optional[str] = None) -> logging.Logger:
    """
    Get a logger instance. Creates a scoped logger if source is provided.

    Args:
        source: Module name or source identifier (e.g., 'CalculatorEngine')

    Returns:
        A logging.Logger instance
    """
    return _manager.get_logger(source)


def set_level(level: str) -> None:
    """
    Change the log level at runtime.

    Args:
        level: One of 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'
    """
    level_const = LOG_LEVELS.get(level.upper(), logging.INFO)
    _manager.root_logger.setLevel(level_const)


def configure(
    level: Optional[str] = None,
    file_path: Optional[str] = None,
    max_bytes: Optional[int] = None,
    max_files: Optional[int] = None,
    retention_days: Optional[int] = None
) -> None:
    """
    Reconfigure the logger with custom settings.

    Args:
        level: Log level ('DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL')
        file_path: Path to log file
        max_bytes: Maximum bytes before rotation
        max_files: Maximum number of backup files to keep
        retention_days: Days to retain logs before deletion
    """
    if level:
        set_level(level)


# -----------------------------------------------------------------------------
# Drishti Module
# -----------------------------------------------------------------------------

def main() -> None:
    """
    Main entry point for the Drishti module.
    Demonstrates enhanced logging capabilities.
    """
    logger = get_logger('Drishti')

    logger.info('Drishti module starting', {'version': '1.0.0'})
    logger.info('Configuration', {
        'level': LOG_LEVEL_ENV,
        'file_path': LOG_FILE_PATH,
        'max_bytes': LOG_ROTATE_MAX_BYTES,
        'max_files': LOG_ROTATE_MAX_FILES,
        'retention_days': LOG_RETENTION_DAYS
    })

    try:
        # Simulate some operations
        logger.info('Performing example operation')
        result = perform_calculation(10, 5)
        logger.info('Calculation completed', {'result': result})

        # Simulate a warning
        result = perform_calculation(10, 0)
        logger.warning('Division by zero avoided', {'handled': True})

    except Exception as e:
        logger.error('An error occurred during operation', exc_info=True)

    logger.info('Drishti module completed successfully')


def perform_calculation(a: float, b: float) -> float:
    """Example function demonstrating scoped logging."""
    logger = get_logger('Calculator')

    logger.info('Starting calculation', {'a': a, 'b': b})

    if b == 0:
        logger.warning('Denominator is zero, returning 0', {'a': a, 'b': b})
        return 0.0

    result = a / b
    logger.info('Calculation result', {'result': result})
    return result


if __name__ == "__main__":
    main()