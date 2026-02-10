'use client'

import { useState } from 'react'
import CategorySelector from '@/features/converter/CategorySelector'
import ConverterInterface from '@/features/converter/ConverterInterface'
import { conversionData } from '@/features/converter/data'
import Link from 'next/link'

export const metadata = {
  title: 'Unit Converter - CalcMaster',
  description: 'Free online unit converter. Convert between length, weight, temperature, volume, area, speed, time, and data units instantly.',
}

export default function ConverterPage() {
  const [selectedCategory, setSelectedCategory] = useState('length')

  const categoryData = conversionData[selectedCategory]

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">
            Unit Converter
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            A powerful, easy-to-use tool for converting between different units of measurement.
            Perfect for students, engineers, and everyday use.
          </p>

          {/* Category Selector */}
          <CategorySelector
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Converter Interface */}
          <ConverterInterface selectedCategory={selectedCategory} />

          {/* Features Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Why Use Our Converter?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Instant Results
                </h3>
                <p className="text-gray-400 text-sm">
                  Get accurate conversions in real-time as you type.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  High Precision
                </h3>
                <p className="text-gray-400 text-sm">
                  Scientific-grade accuracy with up to 6 decimal places.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  8 Categories
                </h3>
                <p className="text-gray-400 text-sm">
                  Convert length, weight, temperature, volume, and more.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Quick Swap
                </h3>
                <p className="text-gray-400 text-sm">
                  Instantly swap source and target units with one click.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Responsive
                </h3>
                <p className="text-gray-400 text-sm">
                  Works perfectly on desktop, tablet, and mobile devices.
                </p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🆓</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  100% Free
                </h3>
                <p className="text-gray-400 text-sm">
                  No ads, no registration, completely free to use.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Need More Tools?
            </h2>
            <p className="text-gray-400 mb-8">
              Check out our scientific calculator for advanced mathematical operations.
            </p>
            <Link href="/calculator" className="btn btn-primary">
              Launch Calculator
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}