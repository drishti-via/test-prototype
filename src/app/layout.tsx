import { useEffect } from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { initializeLogger } from '@/lib/logger'

// Initialize logger once at app startup
if (typeof window !== 'undefined') {
  initializeLogger()
} else {
  initializeLogger()
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Update document title on mount
  useEffect(() => {
    document.title = 'Scientific Calculator - Free Online Math Tool'
  }, [])

  return (
    <>
      <div className="layout-container">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}