'use client'

import CalculatorWidget from '@/features/calculator/CalculatorWidget'
import '@/features/calculator/calculator.css'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="page-section">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl font-bold font-y2k text-yellow-300 text-center mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Scientific Calculator ★
          </h1>
          <p className="text-cyan-300 text-center mb-8 max-w-lg font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>
            Use the keyboard for quick input. Press Enter to calculate, Escape to clear.
          </p>
          <CalculatorWidget />
        </div>

        {/* Quick Reference */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-6 text-center" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Keyboard Shortcuts ★
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
      <kbd className="px-3 py-1 y2k-bevel font-mono font-bold">
        {keys}
      </kbd>
      <span className="text-black text-sm font-serif">{action}</span>
    </div>
  )
}