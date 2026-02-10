export type Theme = 'dark' | 'apple'

const STORAGE_KEY = 'theme'

/**
 * Get the stored theme from localStorage
 */
export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'apple') {
      return stored
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error)
  }
  
  return null
}

/**
 * Get the system-preferred theme based on prefers-color-scheme
 */
export function getSystemPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'apple'
}

/**
 * Apply the theme to the document
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return
  
  const htmlElement = document.documentElement
  
  if (theme === 'apple') {
    htmlElement.setAttribute('data-theme', 'apple')
  } else {
    // Dark is default, remove the attribute
    htmlElement.removeAttribute('data-theme')
  }
}

/**
 * Store the theme preference in localStorage
 */
export function storeTheme(theme: Theme): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch (error) {
    console.warn('Failed to write theme to localStorage:', error)
  }
}

/**
 * Initialize theme: use stored theme if available, otherwise use system preference
 */
export function initializeTheme(): Theme {
  const stored = getStoredTheme()
  const theme = stored || getSystemPreferredTheme()
  applyTheme(theme)
  return theme
}

/**
 * Toggle between themes and persist the choice
 */
export function toggleTheme(current: Theme): Theme {
  const next: Theme = current === 'dark' ? 'apple' : 'dark'
  applyTheme(next)
  storeTheme(next)
  return next
}