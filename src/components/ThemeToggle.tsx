'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-lg bg-dark-card border border-dark-border hover:border-banana-400 transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'default' ? 'banana' : 'default'} theme`}
      title={`Switch to ${theme === 'default' ? 'banana' : 'default'} theme`}
    >
      {/* Default icon (calculator/science) */}
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          theme === 'default' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>

      {/* Banana icon */}
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          theme === 'banana' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'
        }`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Banana body */}
        <path
          d="M4.5 19.5C4.5 19.5 5.5 17 7 15C8.5 13 11.5 10 15 8C18.5 6 20.5 5.5 20.5 5.5"
          stroke="#F7D633"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Banana tip */}
        <path
          d="M19.5 4.5L21 6.5"
          stroke="#8B7355"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Banana bottom tip */}
        <path
          d="M4.2 20.2L5.8 18.8"
          stroke="#8B7355"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Banana curve highlight */}
        <path
          d="M6.5 17.5C6.5 17.5 8 15 10 13C12 11 15 9 18 7"
          stroke="#FFE066"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* Theme indicator dot */}
      <span
        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300 ${
          theme === 'banana'
            ? 'bg-banana-400 scale-100'
            : 'bg-primary-400 scale-0'
        }`}
        aria-hidden="true"
      />

      {/* Badge */}
      {theme === 'banana' && (
        <span className="absolute -top-2 -right-2 bg-banana-400 text-dark-bg text-xs font-bold px-1.5 py-0.5 rounded-full animate-bounce">
          🍌
        </span>
      )}
    </button>
  )
}