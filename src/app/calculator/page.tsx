'use client'

import CalculatorWidget from '@/features/calculator/CalculatorWidget'
import '@/features/calculator/calculator.css'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="page-section">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Scientific Calculator
          </h1>
          <p className="text-gray-200 text-center mb-8 max-w-lg">
            Use the keyboard for quick input. Press Enter to calculate, Escape to clear.
          </p>
          <CalculatorWidget />
        </div>

        {/* Quick Reference */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Keyboard Shortcuts
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <ShortcutRow keys="0-9" action="Enter numbers" />
            <ShortcutRow keys="+ - * /" action="Operators" />
            <ShortcutRow keys="Enter or =" action="Calculate" />
            <ShortcutRow keys="Escape or C" action="Clear all" />
            <ShortcutRow keys="Backspace" action="Delete last digit" />
            <ShortcutRow keys="." action="Decimal point" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ShortcutRow({ keys, action }: { keys: string; action: string }) {
  return (
    <div className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg p-3">
      <kbd className="px-3 py-1 bg-dark-bg border border-dark-border rounded text-sm font-mono">
        {keys}
      </kbd>
      <span className="text-gray-300 text-sm">{action}</span>
    </div>
  )
}