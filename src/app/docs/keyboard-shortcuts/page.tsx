import Link from 'next/link'

export default function KeyboardShortcutsPage() {
  const categories = [
    {
      title: 'Numbers & Decimal',
      shortcuts: [
        { keys: '0-9', action: 'Enter numerical digits' },
        { keys: '.', action: 'Insert decimal point' },
        { keys: 'π', action: 'Insert pi constant (use calculator button)' },
      ],
    },
    {
      title: 'Operators',
      shortcuts: [
        { keys: '+', action: 'Addition' },
        { keys: '-', action: 'Subtraction' },
        { keys: '*', action: 'Multiplication' },
        { keys: '/', action: 'Division' },
      ],
    },
    {
      title: 'Actions',
      shortcuts: [
        { keys: 'Enter or =', action: 'Calculate result' },
        { keys: 'Escape or C', action: 'Clear all (reset calculator)' },
        { keys: 'Backspace', action: 'Delete last digit' },
      ],
    },
  ]

  return (
    <div>
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/docs"
            className="text-forest-500 hover:text-forest-600 transition-colors mb-8 inline-block"
          >
            ← Back to Documentation
          </Link>

          <h1 className="text-4xl font-bold text-ink-400 mb-6">
            Keyboard Shortcuts
          </h1>
          <p className="text-ink-200 mb-12 text-lg">
            Master keyboard shortcuts for faster and more efficient calculations.
          </p>

          <div className="mb-12 card bg-ghibli-meadow">
            <p className="text-ink-400">
              <strong className="text-forest-600">Pro Tip:</strong> Keyboard shortcuts are only active when you're on the Calculator page. This prevents interference with other page interactions like search and forms.
            </p>
          </div>

          {categories.map((category, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                {category.title}
              </h2>
              <div className="card">
                <div className="divide-y divide-cream-200">
                  {category.shortcuts.map((shortcut, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 hover:bg-cream-50 transition-colors">
                      <span className="text-ink-400">{shortcut.action}</span>
                      <kbd className="px-3 py-1 bg-cream-200 border border-cream-300 rounded text-sm font-mono text-forest-600">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-ink-400 mb-4">
              Tips for Efficient Use
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <TipCard
                title="Chain Calculations"
                description="Enter multiple operations in sequence without calculating intermediate results. For example: 10 + 5 * 3 = 25"
              />
              <TipCard
                title="Use π Constant"
                description="The π button inserts the precise value of pi (3.14159...) instead of typing it manually."
              />
              <TipCard
                title="Quick Clear"
                description="Press Escape to immediately reset the calculator and start a new calculation."
              />
              <TipCard
                title="Angle Mode Awareness"
                description="Always check your angle mode (DEG/RAD) before using trigonometric functions."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function TipCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-ink-400 mb-2">{title}</h3>
      <p className="text-ink-200 text-sm">{description}</p>
    </div>
  )
}