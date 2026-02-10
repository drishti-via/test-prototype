import Link from 'next/link'

export default function GettingStartedPage() {
  const examples = [
    { expression: '5 + 3', result: '8', description: 'Basic addition' },
    { expression: '10 * 5', result: '50', description: 'Multiplication' },
    { expression: 'sin(π/2)', result: '1', note: 'Use RAD mode', description: 'Trigonometric function' },
    { expression: 'sin(90)', result: '1', note: 'Use DEG mode', description: 'Sine in degrees' },
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/docs"
            className="y2k-link mb-8 inline-block font-serif"
          >
            ← Back to Documentation
          </Link>

          <h1 className="text-4xl font-bold font-y2k text-yellow-300 mb-6" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Getting Started ★
          </h1>
          <p className="text-cyan-300 mb-12 text-lg font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>
            Learn the basics of using the Scientific Calculator.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
              ★ Basic Navigation ★
            </h2>
            <div className="card">
              <ul className="space-y-4 text-black font-serif">
                <li>
                  <strong className="text-blue-800">Buttons:</strong> Click any button on the calculator to input values or perform operations.
                </li>
                <li>
                  <strong className="text-blue-800">Display:</strong> The display shows the current value or expression being calculated.
                </li>
                <li>
                  <strong className="text-blue-800">Clear:</strong> Press <kbd className="px-2 py-1 y2k-bevel font-mono font-bold text-sm">C</kbd> to clear all inputs and start fresh.
                </li>
                <li>
                  <strong className="text-blue-800">Backspace:</strong> Press <kbd className="px-2 py-1 y2k-bevel font-mono font-bold text-sm">⌫</kbd> to delete the last digit entered.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
              ★ Scientific Functions ★
            </h2>
            <div className="card">
              <p className="text-black mb-4 font-serif">
                Expand the scientific panel by clicking the <strong className="text-blue-800">+ Scientific Functions</strong> button at the top.
              </p>
              <ul className="space-y-2 text-black font-serif">
                <li>• <strong className="text-blue-800">sin</strong> - Calculate the sine of an angle</li>
                <li>• <strong className="text-blue-800">cos</strong> - Calculate the cosine of an angle</li>
                <li>• <strong className="text-blue-800">tan</strong> - Calculate the tangent of an angle</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
              ★ Angle Modes ★
            </h2>
            <div className="card">
              <p className="text-black mb-4 font-serif">
                The calculator supports two angle modes:
              </p>
              <ul className="space-y-3 text-black font-serif">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 font-y2k">DEG</span>
                  <span>Degrees mode - Common for everyday use. Example: sin(90°) = 1</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 font-bold mr-2">RAD</span>
                  <span>Radians mode - Standard for mathematical calculations. Example: sin(π/2) = 1</span>
                </li>
              </ul>
              <p className="text-gray-400 mt-4 text-sm">
                Note: π (pi) is available as a constant button for your convenience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Basic Examples
            </h2>
            <div className="grid gap-4">
              {examples.map((example, index) => (
                <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <code className="px-3 py-1 bg-dark-bg border border-dark-border rounded text-sm font-mono text-primary-400">
                      {example.expression}
                    </code>
                    <span className="text-gray-400">→</span>
                    <span className="text-white font-semibold">{example.result}</span>
                  </div>
                  {example.note && (
                    <p className="text-yellow-400 text-sm mb-2">{example.note}</p>
                  )}
                  <p className="text-gray-400 text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}