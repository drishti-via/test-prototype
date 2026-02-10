'use client'

import { useState, useEffect } from 'react'
import { conversionData, convertValue, formatResult } from './data'
import { conversionCategoryData } from './types'

interface ConverterInterfaceProps {
  selectedCategory: string
}

export default function ConverterInterface({ selectedCategory }: ConverterInterfaceProps) {
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')
  const [result, setResult] = useState('')

  const categoryData = conversionData[selectedCategory]

  // Set default units when category changes
  useEffect(() => {
    const unitKeys = Object.keys(categoryData?.units || {})
    if (unitKeys.length >= 2) {
      setFromUnit(unitKeys[0])
      setToUnit(unitKeys[1])
    }
    setValue('')
    setResult('')
  }, [selectedCategory])

  // Recalculate when inputs change
  useEffect(() => {
    if (!value || !fromUnit || !toUnit) {
      setResult('')
      return
    }

    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      setResult('Invalid input')
      return
    }

    const converted = convertValue(numValue, fromUnit, toUnit, selectedCategory)
    setResult(formatResult(converted))
  }, [value, fromUnit, toUnit, selectedCategory])

  const handleSwapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    if (result) {
      setValue(result)
    }
  }

  if (!categoryData) return null

  const units = Object.entries(categoryData.units)

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{categoryData.icon}</span>
        <div>
          <h3 className="text-2xl font-bold text-ink-400">{categoryData.name} Converter</h3>
          <p className="text-ink-200">{categoryData.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Input Value */}
        <div>
          <label className="block text-sm font-medium text-ink-200 mb-2">
            Enter Value
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a number"
            className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-3 text-ink-400 text-lg focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors"
            step="any"
          />
        </div>

        {/* Unit Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-ink-200 mb-2">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-3 text-ink-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors cursor-pointer"
            >
              {units.map(([key, unit]) => (
                <option key={key} value={key}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center py-3">
            <button
              onClick={handleSwapUnits}
              className="p-2 rounded-full bg-cream-200 hover:bg-forest-500 text-ink-400 hover:text-cream-50 transition-colors"
              aria-label="Swap units"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-ink-200 mb-2">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full bg-cream-50 border border-cream-300 rounded-lg px-4 py-3 text-ink-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors cursor-pointer"
            >
              {units.map(([key, unit]) => (
                <option key={key} value={key}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="mt-6 p-6 bg-ghibli-meadow rounded-lg border border-forest-200 shadow-soft">
          <label className="block text-sm font-medium text-forest-600 mb-2">
            Result
          </label>
          {result ? (
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-bold text-forest-600">
                {result}
              </span>
              <span className="text-xl text-forest-500">
                {categoryData.units[toUnit]?.symbol}
              </span>
            </div>
          ) : (
            <div className="text-4xl font-bold text-forest-300">
              ---
            </div>
          )}
        </div>

        {/* Conversion Formula */}
        {result && value && (
          <div className="mt-4 p-4 bg-cream-100 border border-cream-200 rounded-lg">
            <p className="text-sm text-ink-200">
              <span className="text-ink-400">{value} {categoryData.units[fromUnit]?.symbol}</span>
              {' = '}
              <span className="text-forest-500">{result} {categoryData.units[toUnit]?.symbol}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}