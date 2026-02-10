import Link from 'next/link'

export default function GettingStartedPage() {
  const examples = [
    { expression: '5 + 3', result: '8', description: 'Basic addition' },
    { expression: '10 * 5', result: '50', description: 'Multiplication' },
    { expression: 'sin(π/2)', result: '1', note: 'Use RAD mode', description: 'Trigonometric function' },
    { expression: 'sin(90)', result: '1', note: 'Use DEG mode', description: 'Sine in degrees' },
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
            Getting Started
          </h1>
          <p className="text-ink-200 mb-12 text-lg">
            Learn the basics of using the Scientific Calculator.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-ink-400 mb-4">
              Basic Navigation
            </h2>
            <div className="card">
              <ul className="space-y-4 text-ink-400">
                <li>
                  <strong className="text-ink-400">Buttons:</strong> Click any button on the calculator to input values or perform operations.
                </li>
                <li>
                  <strong className="text-ink-400">Display:</strong> The display shows the current value or expression being calculated.
                </li>
                <li>
                  <strong className="text-ink-400">Clear:</strong> Press <kbd className="px-2 py-1 bg-cream-200 border border-cream-300 rounded text-sm text-ink-400">C</kbd> to clear all inputs and start fresh.
                </li>
                <li>
                  <strong className="text-ink-400">Backspace:</strong> Press <kbd className="px-2 py-1 bg-cream-200 border border-cream-300 rounded text-sm text-ink-400">⌫</kbd> to delete the last digit entered.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-ink-400 mb-4">
              Scientific Functions
            </h2>
            <div className="card">
              <p className="text-ink-400 mb-4">
                Expand the scientific panel by clicking the <strong className="text-ink-400">+ Scientific Functions</strong> button at the top.
              </p>
              <ul className="space-y-2 text-ink-400">
                <li>• <strong className="text-ink-400">sin</strong> - Calculate the sine of an angle</li>
                <li>• <strong className="text-ink-400">cos</strong> - Calculate the cosine of an angle</li>
                <li>• <strong className="text-ink-400">tan</strong> - Calculate the tangent of an angle</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-ink-400 mb-4">
              Angle Modes
            </h2>
            <div className="card">
              <p className="text-ink-400 mb-4">
                The calculator supports two angle modes:
              </p>
              <ul className="space-y-3 text-ink-400">
                <li className="flex items-start">
                  <span className="text-forest-500 font-bold mr-2">DEG</span>
                  <span>Degrees mode - Common for everyday use. Example: sin(90°) = 1</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-500 font-bold mr-2">RAD</span>
                  <span>Radians mode - Standard for mathematical calculations. Example: sin(π/2) = 1</span>
                </li>
              </ul>
              <p className="text-ink-200 mt-4 text-sm">
                Note: π (pi) is available as a constant button for your convenience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-ink-400 mb-4">
              Basic Examples
            </h2>
            <div className="grid gap-4">
              {examples.map((example, index) => (
                <div key={index} className="card">
                  <div className="flex items-center gap-4 mb-2">
                    <code className="px-3 py-1 bg-cream-100 border border-cream-300 rounded text-sm font-mono text-forest-600">
                      {example.expression}
                    </code>
                    <span className="text-ink-200">→</span>
                    <span className="text-ink-400 font-semibold">{example.result}</span>
                  </div>
                  {example.note && (
                    <p className="text-sunset-500 text-sm mb-2">{example.note}</p>
                  )}
                  <p className="text-ink-200 text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}