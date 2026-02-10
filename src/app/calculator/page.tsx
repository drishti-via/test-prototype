'use client'

import CalculatorWidget from '@/features/calculator/CalculatorWidget'
import '@/features/calculator/calculator.css'

export default function CalculatorPage() {
  return (
    <div className="bg-ghibli-sky">
      <div className="page-section">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl font-bold text-ink-400 text-center mb-4">
            Scientific Calculator
          </h1>
          <p className="text-ink-200 text-center mb-8 max-w-lg">
            Use the keyboard for quick input. Press Enter to calculate, Escape to clear.
          </p>
          <CalculatorWidget />
        </div>

        {/* Quick Reference */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-ink-400 mb-6 text-center">
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
    <div className="flex items-center gap-4 card">
      <kbd className="px-3 py-1 bg-cream-200 border border-cream-300 rounded text-sm font-mono text-ink-400">
        {keys}
      </kbd>
      <span className="text-ink-200 text-sm">{action}</span>
    </div>
  )
}