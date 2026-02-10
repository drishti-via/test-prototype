import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f4f8',
          100: '#d0e9f0',
          200: '#a8d4e0',
          300: '#7cb8cf',
          400: '#5f9fbf',
          500: '#4a9eff',
          600: '#3a8eef',
          700: '#2a7edf',
          800: '#1a6dcf',
          900: '#0a5cbf',
        },
        secondary: {
          50: '#f8e8ff',
          100: '#f0d0ff',
          200: '#e0a8f0',
          300: '#cf7cd0',
          400: '#bf5fb0',
          500: '#cc66ff',
          600: '#b34ce6',
          700: '#9932cc',
          800: '#7f2bb3',
          900: '#662599',
        },
        dark: {
          bg: '#000080',
          card: '#c0c0c0',
          border: '#808080',
          text: '#000000',
          muted: '#404040',
        },
        y2k: {
          teal: '#00ffff',
          pink: '#ff69b4',
          lime: '#00ff00',
          purple: '#9932cc',
          yellow: '#ffff00',
          silver: '#c0c0c0',
          navy: '#000080',
          maroon: '#800000',
          olive: '#808000',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #000080 0%, #4a0080 100%)',
        'y2k-windows': 'linear-gradient(180deg, #c0c0c0 0%, #808080 100%)',
      },
      fontFamily: {
        y2k: ['"Comic Sans MS"', '"Chalkboard SE"', 'sans-serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        serif: ['"Times New Roman"', 'Times', 'serif'],
      },
      boxShadow: {
        'y2k-inset': 'inset 2px 2px 0 #ffffff, inset -2px -2px 0 #404040',
        'y2k-outset': '2px 2px 0 #404040, -2px -2px 0 #ffffff',
        'y2k-button': '2px 2px 0 #000000',
      },
      borderWidth: {
        'y2k': '3px',
      },
    },
  },
  plugins: [],
}

export default config