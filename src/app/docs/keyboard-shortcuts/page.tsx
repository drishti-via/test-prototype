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
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/docs"
            className="text-primary-400 hover:text-primary-300 transition-colors mb-8 inline-block"
          >
            ← Back to Documentation
          </Link>

          <h1 className="text-4xl font-bold text-white mb-6">
            Keyboard Shortcuts
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Master keyboard shortcuts for faster and more efficient calculations.
          </p>

          <div className="mb-12 bg-dark-card border border-dark-border rounded-lg p-6">
            <p className="text-gray-300">
              <strong className="text-white">Pro Tip:</strong> Keyboard shortcuts are only active when you're on the Calculator page. This prevents interference with other page interactions like search and forms.
            </p>
          </div>

          {categories.map((category, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {category.title}
              </h2>
              <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden">
                <div className="divide-y divide-dark-border">
                  {category.shortcuts.map((shortcut, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 hover:bg-dark-border/50 transition-colors">
                      <span className="text-gray-300">{shortcut.action}</span>
                      <kbd className="px-3 py-1 bg-dark-bg border border-dark-border rounded text-sm font-mono text-primary-400">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
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
    <div className="bg-dark-card border border-dark-border rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}