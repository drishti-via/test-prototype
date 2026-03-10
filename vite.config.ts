import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    // Development-only: allow localhost and local network access
    ...(command === 'serve' && {
      allowedHosts: [
        // Localhost variants
        'localhost',
        '127.0.0.1',
        '::1',
        '.localhost',
        // Local network ranges (LAN only)
        '169.254.0.21',
        '.169.254.',
        '.192.168.',
        '.10.',
        '.172.16.',
        '.172.17.',
        '.172.18.',
        '.172.19.',
      ],
    }),
  },
}))