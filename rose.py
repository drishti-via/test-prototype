"""
rose.py

A Python module providing elegant, structured logging with enhanced features.
Supports log levels, file logging with rotation, time-based retention, and
environment variable configuration.

Named after "Rose" - symbolizing beauty in simplicity and completeness in design.
"""

import os
import sys
import logging
import logging.handlers
from datetime import datetime, timezone as tz
from typing import Optional, Dict, Any, Callable
from enum import Enum
import time

# -----------------------------------------------------------------------------
# Configuration (from environment variables with defaults)
# -----------------------------------------------------------------------------

LOG_LEVEL_ENV = os.getenv('ROSE_LOG_LEVEL', 'INFO').upper()
LOG_FILE_PATH = os.getenv('ROSE_LOG_FILE_PATH', './logs/rose.log')
LOG_ROTATE_MAX_BYTES = int(os.getenv('ROSE_LOG_ROTATE_MAX_BYTES', '1048576'))  # 1MB default
LOG_ROTATE_MAX_FILES = int(os.getenv('ROSE_LOG_ROTATE_MAX_FILES', '5'))
LOG_RETENTION_DAYS = int(os.getenv('ROSE_LOG_RETENTION_DAYS', '14'))
LOG_FORMAT_TYPE = os.getenv('ROSE_LOG_FORMAT', 'structured').lower()  # 'structured' or 'simple'

# Map string level names to logging constants
LOG_LEVELS = {
    'DEBUG': logging.DEBUG,
    'INFO': logging.INFO,
    'WARNING': logging.WARNING,
    'ERROR': logging.ERROR,
    'CRITICAL': logging.CRITICAL
}

# -----------------------------------------------------------------------------
# Log Level Enum for Type Safety
# -----------------------------------------------------------------------------

class LogLevel(Enum):
    """Enumerated log levels for type-safe API."""
    DEBUG = 'DEBUG'
    INFO = 'INFO'
    WARNING = 'WARNING'
    ERROR = 'ERROR'
    CRITICAL = 'CRITICAL'

    def __str__(self) -> str:
        return self.value

    @classmethod
    def from_string(cls, level_str: str) -> 'LogLevel':
        """Convert string to LogLevel enum."""
        for level in cls:
            if level.value == level_str.upper():
                return level
        return cls.INFO


# -----------------------------------------------------------------------------
# Custom Formatters
# -----------------------------------------------------------------------------

class StructuredFormatter(logging.Formatter):
    """
    Structured formatter producing JSON-like log entries.
    Format: [timestamp] [level] [source] message {metadata}
    """

    def __init__(self):
        super().__init__()

    def format(self, record: logging.LogRecord) -> str:
        # ISO 8601 timestamp with milliseconds
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


class SimpleFormatter(logging.Formatter):
    """
    Simple formatter for concise, human-readable output.
    Format: [timestamp] [level] message
    """

    def __init__(self):
        super().__init__()
        self.datefmt = '%Y-%m-%dT%H:%M:%S'

    def format(self, record: logging.LogRecord) -> str:
        timestamp = datetime.now(tz.utc).strftime('%Y-%m-%dT%H:%M:%S')
        level = record.levelname
        message = record.getMessage()
        return f'[{timestamp}] [{level}] {message}'


# -----------------------------------------------------------------------------
# Logger Manager
# -----------------------------------------------------------------------------

class RoseLoggerManager:
    """
    Central logger manager for the Rose module.
    Provides singleton access to configured loggers with rotation and retention.
    """

    _instance = None
    _initialized = False

    def __new__(cls):
        """Ensure singleton pattern."""
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        """Initialize the logger manager (only once)."""
        if self._initialized:
            return

        self._initialized = True
        self._loggers: Dict[str, logging.Logger] = {}
        self._file_handler: Optional[logging.Handler] = None

        # Configure root logger
        self.root_logger = logging.getLogger('rose')
        self.root_logger.setLevel(LOG_LEVELS.get(LOG_LEVEL_ENV, logging.INFO))

        # Clear existing handlers
        self.root_logger.handlers.clear()

        # Console handler (always active)
        self._setup_console_handler()

        # File handler with rotation (if file path specified)
        if LOG_FILE_PATH:
            self._setup_file_handler()

    def _setup_console_handler(self):
        """Configure console logging with appropriate formatter."""
        console_handler = logging.StreamHandler(sys.stdout)
        formatter = StructuredFormatter() if LOG_FORMAT_TYPE == 'structured' else SimpleFormatter()
        console_handler.setFormatter(formatter)
        self.root_logger.addHandler(console_handler)

    def _setup_file_handler(self):
        """Configure file-based logging with rotation and retention."""
        try:
            # Ensure log directory exists
            log_dir = os.path.dirname(LOG_FILE_PATH)
            if log_dir and not os.path.exists(log_dir):
                os.makedirs(log_dir, exist_ok=True)

            # Rotating file handler (size-based rotation)
            self._file_handler = logging.handlers.RotatingFileHandler(
                LOG_FILE_PATH,
                maxBytes=LOG_ROTATE_MAX_BYTES,
                backupCount=LOG_ROTATE_MAX_FILES
            )
            # Use structured format for files (more parsable)
            self._file_handler.setFormatter(StructuredFormatter())
            self.root_logger.addHandler(self._file_handler)

            # Run retention cleanup on startup
            if LOG_RETENTION_DAYS > 0:
                self._cleanup_old_logs()

        except Exception as e:
            # If file logging fails, continue with console only
            print(f'Disabled file logging due to error: {e}', file=sys.stderr)

    def _cleanup_old_logs(self):
        """Remove log files older than the configured retention period."""
        try:
            log_dir = os.path.dirname(LOG_FILE_PATH)
            if not log_dir or not os.path.exists(log_dir):
                return

            cutoff_time = time.time() - (LOG_RETENTION_DAYS * 24 * 60 * 60)
            log_basename = os.path.basename(LOG_FILE_PATH)

            deleted_count = 0
            for filename in os.listdir(log_dir):
                # Check if file matches our log pattern (with or without rotation suffix)
                if not (filename == log_basename or filename.startswith(log_basename + '.')):
                    continue

                filepath = os.path.join(log_dir, filename)
                if os.path.isfile(filepath):
                    # Check file age
                    if os.path.getmtime(filepath) < cutoff_time:
                        os.remove(filepath)
                        deleted_count += 1

            if deleted_count > 0:
                self.root_logger.info(
                    f'Cleaned up {deleted_count} old log file(s)',
                    {'retention_days': LOG_RETENTION_DAYS}
                )

        except Exception as e:
            print(f'Error during log cleanup: {e}', file=sys.stderr)

    def get_logger(self, source: Optional[str] = None) -> logging.Logger:
        """
        Get or create a scoped logger.

        Args:
            source: Module name or source identifier

        Returns:
            A configured logger instance
        """
        if source and source not in self._loggers:
            # Create child logger for this source
            logger = self.root_logger.getChild(source)
            logger.setLevel(self.root_logger.level)

            # Create adapter to inject source metadata
            class RoseSourceAdapter(logging.LoggerAdapter):
                """Adapter to add source field to log records."""

                def process(self, msg, kwargs):
                    kwargs.setdefault('extra', {})
                    kwargs['extra']['source'] = source
                    return msg, kwargs

            adapted_logger = RoseSourceAdapter(logger, {'source': source})
            self._loggers[source] = adapted_logger

        return self._loggers.get(source, self.root_logger)

    def set_level(self, level: str) -> None:
        """
        Change the log level at runtime.

        Args:
            level: One of 'DEBUG', ' polys: 'INFO', 'WARNING', 'ERROR', 'CRITICAL'
        """
        level_const = LOG_LEVELS.get(level.upper(), logging.INFO)
        self.root_logger.setLevel(level_const)
        # Update all existing loggers
        for logger_instance in self._loggers.values():
            logger_instance.logger.setLevel(level_const)

    def get_config(self) -> Dict[str, Any]:
        """Get current configuration as dictionary."""
        return {
            'level': LOG_LEVEL_ENV,
            'file_path': LOG_FILE_PATH,
            'rotate_max_bytes': LOG_ROTATE_MAX_BYTES,
            'rotate_max_files': LOG_ROTATE_MAX_FILES,
            'retention_days': LOG_RETENTION_DAYS,
            'format_type': LOG_FORMAT_TYPE
        }


# -----------------------------------------------------------------------------
# Public API Functions
# -----------------------------------------------------------------------------

# Singleton manager instance
_manager = RoseLoggerManager()


def get_logger(source: Optional[str] = None) -> logging.Logger:
    """
    Get a configured logger instance.

    Example:
        >>> logger = get_logger('MyModule')
        >>> logger.info('Operation completed', {'result': 42})

    Args:
        source: Optional module name for scoping logs

    Returns:
        A logging.Logger instance
    """
    return _manager.get_logger(source)


def set_level(level: str) -> None:
    """
    Change the global log level at runtime.

    Example:
        >>> set_level('DEBUG')
        >>> logger.debug('Detailed info')

    Args:
        level: Log level ('DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL')
    """
    _manager.set_level(level)


def get_config() -> Dict[str, Any]:
    """
    Get current Rose logger configuration.

    Returns:
        Dictionary with current configuration values
    """
    return _manager.get_config()


# -----------------------------------------------------------------------------
# Decorator for Function Logging
# -----------------------------------------------------------------------------

def log_execution(logger_instance: Optional[logging.Logger] = None):
    """
    Decorator to log function execution (entry/exit/errors).

    Example:
        >>> @log_execution()
        >>> def process_data(items):
        ...     return [i * 2 for i in items]

    Args:
        logger_instance: Optional custom logger, uses default if not provided
    """
    def decorator(func: Callable):
        def wrapper(*args, **kwargs):
            logger = logger_instance or get_logger(func.__name__)
            logger.info(f'Entering {func.__name__}', {'args': str(args)[:100]})

            try:
                result = func(*args, **kwargs)
                logger.info(f'Exiting {func.__name__}', {'result': 'success'})
                return result
            except Exception as e:
                logger.error(
                    f'Error in {func.__name__}',
                    exc_info=True,
                    extra={'meta': {'function': func.__name__}}
                )
                raise

        return wrapper
    return decorator


# -----------------------------------------------------------------------------
# Context Manager for Scoped Logging
# -----------------------------------------------------------------------------

class LogContext:
    """
    Context manager for temporary logging configuration or scoping.

    Example:
        >>> with LogContext('ProcessingTask'):
        ...     logger.info('Working in context')
    """

    def __init__(self, context_name: str, level: Optional[str] = None):
        self.context_name = context_name
        self.level = level
        self.original_level = None
        self.logger = get_logger(context_name)

    def __enter__(self):
        if self.level:
            self.original_level = self.logger.logger.level
            _manager.set_level(self.level)
        self.logger.info(f'Entered context: {self.context_name}')
        return self.logger

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is None:
            self.logger.info(f'Exited context: {self.context_name}')
        else:
            self.logger.error(
                f'Context {self.context_name} exited with error',
                exc_info=True
            )
        if self.original_level is not None:
            _manager.set_level(list(LOG_LEVELS.keys())[list(LOG_LEVELS.values()).index(self.original_level)])
        return False  # Don't suppress exceptions


# -----------------------------------------------------------------------------
# Rose Module - Main Entry Point and Examples
# -----------------------------------------------------------------------------

def main():
    """
    Main entry point demonstrating Rose logging capabilities.
    Run directly: python rose.py
    """
    logger = get_logger('Rose')

    # Log module startup
    logger.info('Rose logging module initialized', {
        'version': '1.0.0',
        'python_version': sys.version.split()[0]
    })

    # Display configuration
    config = get_config()
    logger.info('Current configuration', config)

    # Demonstrate different log levels
    logger.debug('This is a debug message (may not appear based on level)')
    logger.info('This is an info message')
    logger.warning('This is a warning message', {'warning_code': 'WARN_001'})
    logger.error('This is an error message')

    # Demonstrate scoped logger
    CalculatorLogger = get_logger('Calculator')
    CalculatorLogger.info('Calculator module initialized')

    # Demonstrate decorator
    @log_execution()
    def example_function(value: int) -> int:
        """Example function with execution logging."""
        return value * 2

    result = example_function(21)
    logger.info('Decorator example completed', {'result': result})

    # Demonstrate context manager
    with LogContext('BatchProcessing'):
        logger.info('Processing batch items')
        logger.info('Batch processing completed')

    # Demonstrate error handling
    try:
        raise ValueError('Example error for logging')
    except ValueError as e:
        logger.error('Caught an exception', exc_info=True, extra={'meta': {'error_type': 'ValueError'}})

    logger.info('Rose module completed demonstration')


def example_caching():
    """Example demonstrating caching with logging."""
    logger = get_logger('CacheManager')

    # Simple in-memory cache with logging
    cache: Dict[str, Any] = {}

    def get_or_compute(key: str, compute_fn: Callable):
        """Get value from cache or compute and store."""
        if key in cache:
            logger.info('Cache hit', {'key': key})
            return cache[key]

        logger.info('Cache miss, computing', {'key': key})
        result = compute_fn()
        cache[key] = result
        logger.info('Value cached', {'key': key})
        return result

    # Usage
    def expensive_computation():
        logger.info('Performing expensive computation')
        return 42

    # First call - cache miss
    val1 = get_or_compute('answer', expensive_computation)

    # Second call - cache hit
    val2 = get_or_compute('answer', expensive_computation)

    logger.info('Caching demo completed', {
        'cache_size': len(cache),
        'values_match': val1 == val2
    })


def example_metrics():
    """Example demonstrating metrics collection with logging."""
    logger = get_logger('MetricsCollector')

    class SimpleMetrics:
        """Simple metrics collector with logging."""

        def __init__(self):
            self.counters: Dict[str, int] = {}

        def increment(self, name: str):
            """Increment a counter."""
            self.counters[name] = self.counters.get(name, 0) + 1
            logger.debug(f'Metric incremented: {name}', {'value': self.counters[name]})

        def report(self):
            """Report all metrics."""
            logger.info('Metrics report', self.counters)

    # Usage
    metrics = SimpleMetrics()
    metrics.increment('requests_total')
    metrics.increment('requests_total')
    metrics.increment('errors_total')

    metrics.report()
    logger.info('Metrics example completed')


# Export public API
__all__ = [
    'get_logger',
    'set_level',
    'get_config',
    'LogLevel',
    'log_execution',
    'LogContext',
    'RoseLoggerManager',
    'main',
    'example_caching',
    'example_metrics'
]


if __name__ == '__main__':
    main()