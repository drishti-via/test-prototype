'use client'

import { useState, useEffect } from 'react'
import { getThemeFromDOM, applyTheme, storeTheme, type Theme } from '@/lib/theme'
import type { SVGProps } from 'react'

/**
 * Get the current theme from the DOM
 */
function getThemeFromDOM(): Theme {
  if (typeof document === 'undefined') return 'dark'
  const htmlElement = document.documentElement
  return htmlElement.getAttribute('data-theme') === 'apple' ? 'apple' : 'dark'
}

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
)

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set mounted to true after initial render to avoid hydration mismatch
    setMounted(true)
    // Initialize theme from DOM or localStorage
    const currentTheme = getThemeFromDOM()
    setTheme(currentTheme)
  }, [])

  const handleToggle = () => {
    const newTheme: Theme = theme === 'dark' ? 'apple' : 'dark'
    const htmlElement = document.documentElement
    
    if (newTheme === 'apple') {
      htmlElement.setAttribute('data-theme', 'apple')
    } else {
      htmlElement.removeAttribute('data-theme')
    }
    
    storeTheme(newTheme)
    setTheme(newTheme)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        aria-pressed={theme === 'apple'}
        type="button"
        disabled
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'apple'}
      type="button"
      title="Toggle theme"
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  )
}