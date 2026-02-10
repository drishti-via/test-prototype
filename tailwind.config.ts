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
        /* Ghibli-inspired semantic palette */
        sky: {
          50: '#B8D4E8',
          100: '#A5CDE2',
          200: '#8FC4DB',
          300: '#79BBD4',
          400: '#63B2CD',
          500: '#87CEEB',
          600: '#5AA8C7',
          700: '#4D9EC2',
        },
        cream: {
          50: '#FFFEF9',
          100: '#FDF6E3',
          200: '#F8EAD1',
          300: '#F3DEBF',
          400: '#F5E6D3',
          500: '#F0DCC4',
        },
        forest: {
          50: '#E8F0E8',
          100: '#D4E3D4',
          200: '#AFD0AF',
          300: '#8ABD8A',
          400: '#6B9B7A',
          500: '#4A7C59',
          600: '#3A6249',
          700: '#2D4A39',
        },
        sunset: {
          50: '#FDF3EF',
          100: '#F9E6DE',
          200: '#F2C6A8',
          300: '#E8A87C',
          400: '#D9955E',
          500: '#C78346',
        },
        river: {
          50: '#E8F4F8',
          100: '#D4EBF4',
          200: '#A8DDEA',
          300: '#7ccfe0',
          400: '#7EC8E3',
          500: '#5BB8DB',
        },
        ink: {
          50: '#A0AEC0',
          100: '#718096',
          200: '#4A5568',
          300: '#3D3D3D',
          400: '#2D3748',
          500: '#1A202C',
        },
        /* Aliases for backward compatibility */
        primary: {
          50: '#E8F0E8',
          100: '#D4E3D4',
          200: '#AFD0AF',
          300: '#8ABD8A',
          400: '#6B9B7A',
          500: '#4A7C59',
          600: '#3A6249',
          700: '#2D4A39',
        },
        secondary: {
          50: '#FDF3EF',
          100: '#F9E6DE',
          200: '#F2C6A8',
          300: '#E8A87C',
          400: '#D9955E',
          500: '#C78346',
        },
        dark: {
          bg: '#2D3748',
          card: '#3D3D3D',
          border: '#4A5568',
          text: '#FFFEF9',
          muted: '#A0AEC0',
        },
        /* Calculator specific */
        wood: {
          light: '#CD853F',
          medium: '#A67C00',
          dark: '#8B6914',
        },
        brass: {
          light: '#CFC465',
          DEFAULT: '#B5A642',
          dark: '#998A35',
        },
      },
      backgroundImage: {
        'ghibli-sky': 'linear-gradient(180deg, #B8D4E8 0%, #FDF6E3 100%)',
        'ghibli-sky-dawn': 'linear-gradient(180deg, #F2C6A8 0%, #B8D4E8 50%, #FDF6E3 100%)',
        'ghibli-meadow': 'linear-gradient(180deg, #D4E3D4 0%, #FDF6E3 100%)',
        'ghibli-river': 'linear-gradient(180deg, #7EC8E3 0%, #B8D4E8 100%)',
        'gradient-primary': 'linear-gradient(180deg, #B8D4E8 0%, #FDF6E3 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(74, 124, 89, 0.15)',
        'lift': '0 8px 30px rgba(232, 168, 124, 0.12)',
        'text': '0 2px 4px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        ' xl': '24px',
      },
    },
  },
  plugins: [],
}

export default config