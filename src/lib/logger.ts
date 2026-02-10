/**
 * Central Logger Module
 * Provides structured, leveled, timestamped logging with rotation and retention options.
 *
 * Features:
 * - Log levels: info, warning, error
 * - Timestamped entries with ISO format
 * - Multiple sinks: console (default) and file (Node.js)
 * - Level filtering via environment variables
 * - Scoped loggers for module identification
 * - Log rotation (size-based) and retention (time-based)
 */

export type LogLevel = 'info' | 'warning' | 'error'

export interface LogMeta {
  [key: string]: any
}

export interface LogEntry {
  timestamp: string
  level: LogLevel
  source?: string
  message: string
  meta?: LogMeta
  error?: {
    name: string
    message: string
    stack?: string
  }
}

export interface LoggerConfig {
  level: LogLevel
  file?: {
    path: string
    rotate?: {
      maxBytes: number
      maxFiles: number
    }
    retentionDays?: number
  }
}

// Numerical severity mapping for filtering
export const LOG_LEVEL_SEVERITY: Record<LogLevel, number> = {
  info: 0,
  warning: 1,
  error: 2
}

// Default configuration
let config: LoggerConfig = {
  level: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_LOG_LEVEL as LogLevel) || 'info'
}

// Node.js file system imports (lazy to avoid client bundling issues)
let fs: any = null
let path: any = null

function initNodeModules() {
  if (typeof process !== 'undefined' && process.versions?.node && !fs) {
    try {
      fs = require('fs')
      path = require('path')
    } catch (e) {
      console.warn('[Logger] Node.js modules not available, file logging disabled')
    }
  }
}

/**
 * Format an Error object into a structured format
 */
function normalizeError(error: Error): { name: string; message: string; stack?: string } {
  return {
    name: error.name,
    message: error.message,
    stack: error.stack
  }
}

/**
 * Format a log entry for output
 */
function formatLogEntry(entry: LogEntry): string {
  const parts: string[] = []

  // Timestamp
  parts.push(`[${entry.timestamp}]`)

  // Level
  parts.push(`[${entry.level.toUpperCase()}]`)

  // Source (optional)
  if (entry.source) {
    parts.push(`[${entry.source}]`)
  }

  // Message
  parts.push(entry.message)

  // Metadata
  if (entry.meta && Object.keys(entry.meta).length > 0) {
    parts.push(JSON.stringify(entry.meta))
  }

  // Error
  if (entry.error) {
    parts.push(`Error: ${entry.error.name}: ${entry.error.message}`)
    if (entry.error.stack) {
      parts.push(entry.error.stack)
    }
  }

  return parts.join(' ')
}

/**
 * Write log entry to file (Node.js only)
 */
function writeToFile(entry: LogEntry) {
  if (!config.file?.path) return

  initNodeModules()

  if (!fs || !path) {
    return
  }

  try {
    const formatted = formatLogEntry(entry) + '\n'
    const filePath = config.file.path
    const dir = path.dirname(filePath)

    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Check rotation before writing
    if (fs.existsSync(filePath) && config.file.rotate) {
      const stats = fs.statSync(filePath)
      if (stats.size >= config.file.rotate.maxBytes) {
        rotateLogFile(filePath)
      }
    }

    // Append to file
    fs.appendFileSync(filePath, formatted)
  } catch (error) {
    console.error('[Logger] Failed to write to file:', error)
  }
}

/**
 * Rotate log files (size-based)
 */
function rotateLogFile(filePath: string) {
  if (!fs || !path || !config.file?.rotate) return

  try {
    const { maxFiles } = config.file.rotate
    const ext = path.extname(filePath)
    const basename = path.basename(filePath, ext)
    const dir = path.dirname(filePath)

    // Delete oldest file if it exceeds maxFiles
    const oldestFile = path.join(dir, `${basename}.${maxFiles}${ext}`)
    if (fs.existsSync(oldestFile)) {
      fs.unlinkSync(oldestFile)
    }

    // Shift existing files
    for (let i = maxFiles - 1; i >= 1; i--) {
      const oldFile = i === 1 ? filePath : path.join(dir, `${basename}.${i}${ext}`)
      const newFile = path.join(dir, `${basename}.${i + 1}${ext}`)

      if (fs.existsSync(oldFile)) {
        fs.renameSync(oldFile, newFile)
      }
    }

    // Rename current file to .1
    if (fs.existsSync(filePath)) {
      fs.renameSync(filePath, path.join(dir, `${basename}.1${ext}`))
    }
  } catch (error) {
    console.error('[Logger] Failed to rotate log file:', error)
  }
}

/**
 * Clean up old log files (time-based retention)
 */
export function cleanupOldLogs(): void {
  if (!config.file?.path || !config.file.retentionDays) return

  initNodeModules()

  if (!fs || !path) return

  try {
    const filePath = config.file.path
    const dir = path.dirname(filePath)
    const ext = path.extname(filePath)
    const basename = path.basename(filePath, ext)
    const cutoffTime = Date.now() - (config.file.retentionDays * 24 * 60 * 60 * 1000)

    // Check directory for log files
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir)
      const logFilePattern = new RegExp(`^${basename}(?:\\.\\d+)?${ext}$`)

      for (const file of files) {
        if (logFilePattern.test(file)) {
          const fullPath = path.join(dir, file)
          const stats = fs.statSync(fullPath)

          if (stats.mtimeMs < cutoffTime) {
            fs.unlinkSync(fullPath)
            console.log(`[Logger] Deleted old log file: ${file}`)
          }
        }
      }
    }
  } catch (error) {
    console.error('[Logger] Failed to cleanup old logs:', error)
  }
}

/**
 * Log entry point
 */
function log(level: LogLevel, message: string, meta?: LogMeta, error?: Error, source?: string) {
  // Filter by configured level
  const configuredSeverity = LOG_LEVEL_SEVERITY[config.level]
  const logSeverity = LOG_LEVEL_SEVERITY[level]

  if (logSeverity < configuredSeverity) {
    return
  }

  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    meta,
    source
  }

  if (error) {
    entry.error = normalizeError(error)
  }

  // Console output
  const formatted = formatLogEntry(entry)
  switch (level) {
    case 'error':
      console.error(formatted)
      break
    case 'warning':
      console.warn(formatted)
      break
    case 'info':
    default:
      console.log(formatted)
      break
  }

  // File output
  writeToFile(entry)
}

/**
 * Main Logger Interface
 */
export const logger = {
  /**
   * Log an informational message
   */
  info(message: string, meta?: LogMeta, source?: string) {
    log('info', message, meta, undefined, source)
  },

  /**
   * Log a warning message
   */
  warning(message: string, meta?: LogMeta, source?: string) {
    log('warning', message, meta, undefined, source)
  },

  /**
   * Log an error message
   */
  error(message: string, error?: Error, meta?: LogMeta, source?: string) {
    log('error', message, meta, error, source)
  },

  /**
   * Configure the logger
   */
  configure(newConfig: Partial<LoggerConfig>) {
    config = { ...config, ...newConfig }

    // Run cleanup on initialization if retention is configured
    if (config.file?.retentionDays) {
      cleanupOldLogs()
    }
  },

  /**
   * Set the log level
   */
  setLevel(level: LogLevel) {
    config.level = level
  },

  /**
   * Get current configuration
   */
  getConfig(): Readonly<LoggerConfig> {
    return { ...config }
  }
}

/**
 * Create a scoped logger for a specific module
 */
export function createLogger(source: string) {
  return {
    info(message: string, meta?: LogMeta) {
      log('info', message, meta, undefined, source)
    },
    warning(message: string, meta?: LogMeta) {
      log('warning', message, meta, undefined, source)
    },
    error(message: string, error?: Error, meta?: LogMeta) {
      log('error', message, meta, error, source)
    }
  }
}

/**
 * Initialize logger from environment variables
 * Call this once at app startup
 */
export function initializeLogger() {
  const envLevel = (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_LOG_LEVEL as LogLevel) || 'info'
  const envFilePath = typeof process !== 'undefined' ? process.env?.LOG_FILE_PATH : undefined
  const envMaxBytes = typeof process !== 'undefined' ? parseInt(process.env?.LOG_ROTATE_MAX_BYTES || '1048576', 10) : undefined
  const envMaxFiles = typeof process !== 'undefined' ? parseInt(process.env?.LOG_ROTATE_MAX_FILES || '5', 10) : undefined
  const envRetentionDays = typeof process !== 'undefined' ? parseInt(process.env?.LOG_RETENTION_DAYS || '14', 10) : undefined

  const loggerConfig: Partial<LoggerConfig> = {
    level: ['info', 'warning', 'error'].includes(envLevel) ? envLevel : 'info'
  }

  if (envFilePath && typeof process !== 'undefined' && process.versions?.node) {
    loggerConfig.file = {
      path: envFilePath,
      rotate: {
        maxBytes: envMaxBytes || 1048576, // 1MB default
        maxFiles: envMaxFiles || 5
      },
      retentionDays: envRetentionDays || 14
    }
  }

  logger.configure(loggerConfig)
  logger.info('Logger initialized', { config: loggerConfig }, 'Logger')
}

export default logger