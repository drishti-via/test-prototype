'use client'

import { conversionData } from './data'
import type { ConversionCategory } from './types'

interface CategorySelectorProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategorySelector({ selectedCategory, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Select Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(conversionData).map(([key, category]) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`p-4 rounded-lg border transition-all ${
              selectedCategory === key
                ? 'bg-primary-600 border-primary-500 text-white'
                : 'bg-dark-card border-dark-border text-gray-400 hover:border-primary-500 hover:text-white'
            }`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium">{category.name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}