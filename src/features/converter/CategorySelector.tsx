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
      <h2 className="text-xl font-semibold text-ink-400 mb-4">
        Select Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(conversionData).map(([key, category]) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`p-4 rounded-lg border transition-all shadow-sm ${
              selectedCategory === key
                ? 'bg-forest-500 border-forest-600 text-cream-50 shadow-soft'
                : 'bg-cream-50 border-cream-300 text-ink-300 hover:border-forest-400 hover:text-forest-500'
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