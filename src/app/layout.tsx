import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scientific Calculator - Free Online Math Tool',
  description: 'A powerful scientific calculator with advanced functions. Perfect for students, engineers, and professionals. Free to use online.',
  keywords: ['calculator', 'scientific calculator', 'math', 'trigonometry', 'online calculator'],
  openGraph: {
    title: 'Scientific Calculator - Free Online Math Tool',
    description: 'A powerful scientific calculator with advanced functions.',
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