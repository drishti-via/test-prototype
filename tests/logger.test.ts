/**
 * Unit tests for the Logger module
 */

import { logger, createLogger, initializeLogger, LogLevel, cleanupOldLogs } from '../src/lib/logger'

// Mock console methods to avoid cluttering test output
const consoleLog = console.log
const consoleWarn = console.warn
const consoleError = console.error

beforeEach(() => {
  // Reset console to ensure clean test output
  console.log = jest.fn()
  console.warn = jest.fn()
  console.error = jest.fn()
})

afterEach(() => {
  // Restore original console methods
  console.log = consoleLog
  console.warn = consoleWarn
  console.error = consoleError
})

describe('Logger', () => {
  beforeEach(() => {
    // Reset logger to default state before each test
    logger.configure({ level: 'info' })
  })

  describe('Basic Logging', () => {
    test('should log info messages', () => {
      logger.info('Test info message')
      expect(console.log).toHaveBeenCalled()
    })

    test('should log warning messages', () => {
      logger.warning('Test warning message')
      expect(console.warn).toHaveBeenCalled()
    })

    test('should log error messages', () => {
      logger.error('Test error message')
      expect(console.error).toHaveBeenCalled()
    })

    test('should include metadata in logs', () => {
      const meta = { userId: 123, action: 'test' }
      logger.info('Test with metadata', meta)
      expect(console.log).toHaveBeenCalled()
      const logArgs = (console.log as jest.Mock).mock.calls[0]
      const logMessage = logArgs[0]
      expect(logMessage).toContain('userId')
      expect(logMessage).toContain('123')
    })
  })

  describe('Error Normalization', () => {
    test('should normalize Error objects with stack trace', () => {
      const error = new Error('Test error')
      error.name = 'TestError'
      
      logger.error('An error occurred', error)
      expect(console.error).toHaveBeenCalled()
      
      const logArgs = (console.error as jest.Mock).mock.calls[0]
      const logMessage = logArgs[0]
      expect(logMessage).toContain('Error')
      expect(logMessage).toContain('TestError')
      expect(logMessage).toContain('Test error')
    })

    test('should handle errors without stack traces', () => {
      const error = new Error('Simple error')
      error.stack = undefined
      
      logger.error('Error without stack', error)
      expect(console.error).toHaveBeenCalled()
    })
  })

  describe('Timestamps', () => {
    test('should include ISO timestamps in logs', () => {
      logger.info('Test timestamp')
      expect(console.log).toHaveBeenCalled()
      
      const logArgs = (console.log as jest.Mock).mock.calls[0]
      const logMessage = logArgs[0]
      // ISO timestamp format: YYYY-MM-DDTHH:mm:ss.sssZ
      expect(logMessage).toMatch(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\]/)
    })
  })

  describe('Log Level Filtering', () => {
    test('should show all logs when level is info', () => {
      logger.setLevel('info')
      
      logger.info('Info message')
      logger.warning('Warning message')
      logger.error('Error message')
      
      expect(console.log).toHaveBeenCalled()
      expect(console.warn).toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })

    test('should filter info logs when level is warning', () => {
      logger.setLevel('warning')
      
      logger.info('Info message')
      logger.warning('Warning message')
      logger.error('Error message')
      
      expect(console.log).not.toHaveBeenCalled()
      expect(console.warn).toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })

    test('should filter info and warning logs when level is error', () => {
      logger.setLevel('error')
      
      logger.info('Info message')
      logger.warning('Warning message')
      logger.error('Error message')
      
      expect(console.log).not.toHaveBeenCalled()
      expect(console.warn).not.toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })
  })

  describe('Scoped Loggers', () => {
    test('should create a scoped logger with source', () => {
      const scopedLogger = createLogger('TestModule')
      
      scopedLogger.info('Scoped test message')
      expect(console.log).toHaveBeenCalled()
      
      const logArgs = (console.log as jest.Mock).mock.calls[0]
      const logMessage = logArgs[0]
      expect(logMessage).toContain('[TestModule]')
    })

    test('should maintain level filtering in scoped loggers', () => {
      logger.setLevel('error')
      const scopedLogger = createLogger('TestModule')
      
      scopedLogger.info('Info message')
      scopedLogger.error('Error message')
      
      expect(console.log).not.toHaveBeenCalled()
      expect(console.error).toHaveBeenCalled()
    })
  })

  describe('Configuration', () => {
    test('should allow configuration changes', () => {
      logger.configure({ level: 'error' })
      const config = logger.getConfig()
      
      expect(config.level).toBe('error')
    })

    test('should set level with setLevel method', () => {
      logger.setLevel('warning')
      const config = logger.getConfig()
      
      expect(config.level).toBe('warning')
    })
  })

  describe('Initialization', () => {
    test('should initialize logger from environment', () => {
      // Mock process.env
      process.env.NEXT_PUBLIC_LOG_LEVEL = 'warning'
      
      initializeLogger()
      const config = logger.getConfig()
      
      expect(config.level).toBe('warning')
      
      // Clean up
      delete process.env.NEXT_PUBLIC_LOG_LEVEL
    })
  })
})

describe('Logger - File Environment (Node.js only)', () => {
  // These tests are skipped in browser environment
  const isNode = typeof process !== 'undefined' && process.versions?.node

  if (!isNode) {
    test.skip('File logging tests skipped in browser environment', () => {})
    return
  }

  const fs = require('fs')
  const path = require('path')
  const os = require('os')

  let tempDir: string

  beforeEach(() => {
    // Create temporary directory for test logs
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'logger-test-'))
  })

  afterEach(() => {
    // Clean up temporary directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('should write logs to file when configured', () => {
    const logFilePath = path.join(tempDir, 'test.log')
    
    logger.configure({
      level: 'info',
      file: {
        path: logFilePath,
        rotate: {
          maxBytes: 1024,
          maxFiles: 3
        },
        retentionDays: 7
      }
    })

    logger.info('Test message to file')

    // Give file system time to write
    // In jest, this is synchronous, but we add a small delay in real scenarios

    expect(fs.existsSync(logFilePath)).toBe(true)
    
    const content = fs.readFileSync(logFilePath, 'utf-8')
    expect(content).toContain('Test message to file')
    expect(content).toContain('[INFO]')
  })

  test('should rotate log files when size limit is reached', () => {
    const logFilePath = path.join(tempDir, 'rotate-test.log')
    const smallMaxBytes = 100 // Small limit to trigger rotation
    
    logger.configure({
      level: 'info',
      file: {
        path: logFilePath,
        rotate: {
          maxBytes: smallMaxBytes,
          maxFiles: 3
        }
      }
    })

    // Write enough to exceed maxBytes
    for (let i = 0; i < 5; i++) {
      logger.info(`This is a long test message number ${i} to trigger rotation`)
    }

    // Check for rotated files
    const rotatedFile = path.join(tempDir, 'rotate-test.log.1')
    expect(fs.existsSync(rotatedFile)).toBe(true)
  })
})

describe('Calculator Engine Logger Integration', () => {
  // Import after logger is defined
  const { CalculatorEngine, createCalculator } = require('../src/features/calculator/engine')

  test('should log calculator initialization', () => {
    const calculator = createCalculator()
    expect(console.log).toHaveBeenCalled()
    
    const logArgs = (console.log as jest.Mock).mock.calls
    const initLog = logArgs.find(call => call[0].includes('initialized'))
    expect(initLog).toBeDefined()
  })

  test('should log calculation operations', () => {
    const calculator = createCalculator()
    ;(console.log as jest.Mock).mockClear() // Clear previous logs

    calculator.inputNumber('5')
    calculator.handleOperator('+')
    calculator.inputNumber('3')
    calculator.calculate()

    expect(console.log).toHaveBeenCalled()
    
    // Should have logs for calculation
    const logArgs = (console.log as jest.Mock).mock.calls
    const calcLog = logArgs.find(call => call[0].includes('Calculation performed'))
    expect(calcLog).toBeDefined()
  })

  test('should log division by zero warnings', () => {
    const calculator = createCalculator()
    ;(console.warn as jest.Mock).mockClear() // Clear previous logs
    ;(console.error as jest.Mock).mockClear()

    calculator.inputNumber('10')
    calculator.handleOperator('/')
    calculator.inputNumber('0')
    calculator.calculate()

    // Should see warning for division by zero attempt
    const logArgs = (console.warn as jest.Mock).mock.calls
    const warningLog = logArgs.find(call => call[0].includes('Division by zero'))
    expect(warningLog).toBeDefined()
  })
})