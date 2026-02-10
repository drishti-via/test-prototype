/**
 * Log Retention Module
 * Provides utilities for managing log file cleanup and retention.
 *
 * This module is designed for Node.js/server environments and helps:
 * - Clean up old log files based on retention policies
 * - Manage log file rotation
 * - Maintain disk space usage
 */

import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

export interface RetentionConfig {
  logPath: string
  retentionDays: number
  maxFiles?: number
  maxDiskUsageMB?: number
}

export interface RetentionStats {
  filesFound: number
  filesDeleted: number
  bytesFreed: number
  errors: string[]
}

/**
 * Get all log files matching a pattern
 */
function getLogFiles(logPattern: string): string[] {
  const dir = path.dirname(logPattern)
  const basename = path.basename(logPattern, path.extname(logPattern))
  const ext = path.extname(logPattern)

  try {
    if (!fs.existsSync(dir)) {
      return []
    }

    const allFiles = fs.readdirSync(dir)
    const logRegex = new RegExp(`^${basename}(?:\\.\\d+)?${ext}$`)

    const logFiles = allFiles
      .filter(file => logRegex.test(file))
      .map(file => path.join(dir, file))

    return logFiles.sort((a, b) => a.localeCompare(b))
  } catch (error) {
    console.error('[LogRetention] Error reading log directory:', error)
    return []
  }
}

/**
 * Get file stats safely
 */
function getFileStats(filePath: string): fs.Stats | null {
  try {
    return fs.statSync(filePath)
  } catch (error) {
    return null
  }
}

/**
 * Delete a file safely
 */
function deleteFile(filePath: string): boolean {
  try {
    fs.unlinkSync(filePath)
    return true
  } catch (error) {
    console.error(`[LogRetention] Failed to delete ${filePath}:`, error)
    return false
  }
}

/**
 * Clean up log files older than retentionDays
 */
export function cleanupOldLogs(config: RetentionConfig): RetentionStats {
  const stats: RetentionStats = {
    filesFound: 0,
    filesDeleted: 0,
    bytesFreed: 0,
    errors: []
  }

  if (config.retentionDays <= 0) {
    return stats
  }

  const cutoffTime = Date.now() - (config.retentionDays * 24 * 60 * 60 * 1000)
  const logFiles = getLogFiles(config.logPath)

  stats.filesFound = logFiles.length

  for (const filePath of logFiles) {
    const fileStats = getFileStats(filePath)

    if (!fileStats) {
      continue
    }

    if (fileStats.mtimeMs < cutoffTime) {
      if (deleteFile(filePath)) {
        stats.filesDeleted++
        stats.bytesFreed += fileStats.size
      }
    }
  }

  return stats
}

/**
 * Enforce maximum number of log files
 */
export function enforceMaxFiles(config: RetentionConfig): RetentionStats {
  const stats: RetentionStats = {
    filesFound: 0,
    filesDeleted: 0,
    bytesFreed: 0,
    errors: []
  }

  if (!config.maxFiles || config.maxFiles <= 0) {
    return stats
  }

  const logFiles = getLogFiles(config.logPath)
  stats.filesFound = logFiles.length

  // Keep the most recent files
  const filesToDelete = logFiles.slice(0, -config.maxFiles)

  for (const filePath of filesToDelete) {
    const fileStats = getFileStats(filePath)

    if (deleteFile(filePath)) {
      stats.filesDeleted++
      if (fileStats) {
        stats.bytesFreed += fileStats.size
      }
    }
  }

  return stats
}

/**
 * Enforce maximum disk usage for logs
 */
export function enforceMaxDiskUsage(config: RetentionConfig): RetentionStats {
  const stats: RetentionStats = {
    filesFound: 0,
    filesDeleted: 0,
    bytesFreed: 0,
    errors: []
  }

  if (!config.maxDiskUsageMB || config.maxDiskUsageMB <= 0) {
    return stats
  }

  const maxBytes = config.maxDiskUsageMB * 1024 * 1024
  const logFiles = getLogFiles(config.logPath).reverse() // Newest first
  stats.filesFound = logFiles.length

  // Calculate total size
  let totalSize = 0
  const fileSizes: Map<string, number> = new Map()

  for (const filePath of logFiles) {
    const fileStats = getFileStats(filePath)
    if (fileStats) {
      totalSize += fileStats.size
      fileSizes.set(filePath, fileStats.size)
    }
  }

  // If over limit, delete oldest files until under limit
  if (totalSize > maxBytes) {
    for (const filePath of getLogFiles(config.logPath)) { // Oldest first
      if (totalSize <= maxBytes) {
        break
      }

      const fileSize = fileSizes.get(filePath) || 0
      if (deleteFile(filePath)) {
        stats.filesDeleted++
        stats.bytesFreed += fileSize
        totalSize -= fileSize
      }
    }
  }

  return stats
}

/**
 * Run comprehensive retention cleanup
 */
export function runRetentionCleanup(config: RetentionConfig): RetentionStats {
  const combined: RetentionStats = {
    filesFound: 0,
    filesDeleted: 0,
    bytesFreed: 0,
    errors: []
  }

  try {
    // Age-based cleanup
    const ageStats = cleanupOldLogs(config)
    combined.filesFound = Math.max(combined.filesFound, ageStats.filesFound)
    combined.filesDeleted += ageStats.filesDeleted
    combined.bytesFreed += ageStats.bytesFreed
    combined.errors.push(...ageStats.errors)

    // Max files cleanup
    const fileStats = enforceMaxFiles(config)
    combined.filesDeleted += fileStats.filesDeleted
    combined.bytesFreed += fileStats.bytesFreed
    combined.errors.push(...fileStats.errors)

    // Disk usage cleanup
    const diskStats = enforceMaxDiskUsage(config)
    combined.filesDeleted += diskStats.filesDeleted
    combined.bytesFreed += diskStats.bytesFreed
    combined.errors.push(...diskStats.errors)

    console.log('[LogRetention] Cleanup completed', {
      filesDeleted: combined.filesDeleted,
      bytesFreed: formatBytes(combined.bytesFreed)
    })
  } catch (error) {
    combined.errors.push(error instanceof Error ? error.message : String(error))
  }

  return combined
}

/**
 * Format bytes to human-readable string
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * Get disk usage statistics for log files
 */
export function getLogDiskUsage(logPath: string): {
  totalSize: number
  fileCount: number
  oldestFile: string | null
  newestFile: string | null
} {
  const logFiles = getLogFiles(logPath)
  let totalSize = 0
  let oldestFile: string | null = null
  let newestFile: string | null = null
  let oldestTime = Infinity
  let newestTime = 0

  for (const filePath of logFiles) {
    const fileStats = getFileStats(filePath)
    if (fileStats) {
      totalSize += fileStats.size

      if (fileStats.mtimeMs < oldestTime) {
        oldestTime = fileStats.mtimeMs
        oldestFile = filePath
      }

      if (fileStats.mtimeMs > newestTime) {
        newestTime = fileStats.mtimeMs
        newestFile = filePath
      }
    }
  }

  return {
    totalSize,
    fileCount: logFiles.length,
    oldestFile,
    newestFile
  }
}

/**
 * Schedule periodic retention cleanup (Node.js only)
 */
export function scheduleRetentionCleanup(
  config: RetentionConfig,
  intervalMs: number = 24 * 60 * 60 * 1000 // Daily by default
): NodeJS.Timeout {
  // Run immediately
  runRetentionCleanup(config)

  // Schedule recurring cleanup
  const interval = setInterval(() => {
    runRetentionCleanup(config)
  }, intervalMs)

  console.log('[LogRetention] Scheduled cleanup every', intervalMs, 'ms')
  return interval
}

export default {
  cleanupOldLogs,
  enforceMaxFiles,
  enforceMaxDiskUsage,
  runRetentionCleanup,
  getLogDiskUsage,
  formatBytes,
  scheduleRetentionCleanup
}