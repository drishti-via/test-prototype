import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { initializeLogger } from '@/lib/logger'

// Initialize logger once at app startup
if (typeof window !== 'undefined') {
  // Client-side: initialize with console logging only
  initializeLogger()
} else {
  // Server-side: would initialize with file logging if env vars are set
  initializeLogger()
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CalcMaster - A Calm Calculator Inspired by Nature',
  description: 'A peaceful, capable calculator for everyday problem solving. Beautiful design meets powerful functionality. Free to use online.',
  keywords: ['calculator', 'scientific calculator', 'math', 'trigonometry', 'online calculator', 'ghibli-inspired', 'nature calculator'],
  openGraph: {
    title: 'CalcMaster - A Calm Calculator Inspired by Nature',
    description: 'A peaceful, capable calculator for everyday problem solving.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}