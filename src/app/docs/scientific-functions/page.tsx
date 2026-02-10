import Link from 'next/link'

export default function ScientificFunctionsPage() {
  const functions = [
    {
      name: 'sine',
      symbol: 'sin(x)',
      description: 'Returns the sine of an angle',
      examples: [
        { input: 'sin(π/2)', mode: 'RAD', result: '1' },
        { input: 'sin(90)', mode: 'DEG', result: '1' },
      ],
    },
    {
      name: 'cosine',
      symbol: 'cos(x)',
      description: 'Returns the cosine of an angle',
      examples: [
        { input: 'cos(0)', mode: 'Any', result: '1' },
        { input: 'cos(π)', mode: 'RAD', result: '-1' },
        { input: 'cos(180)', mode: 'DEG', result: '-1' },
      ],
    },
    {
      name: 'tangent',
      symbol: 'tan(x)',
      description: 'Returns the tangent of an angle',
      examples: [
        { input: 'tan(π/4)', mode: 'RAD', result: '1' },
        { input: 'tan(45)', mode: 'DEG', result: '1' },
      ],
    },
  ]

  const angleModes = [
    {
      mode: 'Degrees (DEG)',
      description: 'Intuitive for everyday use. A full circle is 360 degrees.',
      examples: 'sin(90°) = 1, sin(30°) = 0.5',
    },
    {
      mode: 'Radians (RAD)',
      description: 'Standard in mathematics and physics. A full circle is 2π radians.',
      examples: 'sin(π/2) = 1, sin(π/6) = 0.5',
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
            Scientific Functions
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Explore advanced trigonometric and mathematical functions available in the calculator.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Available Functions
            </h2>
            <div className="space-y-6">
              {functions.map((func, index) => (
                <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{func.symbol}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white capitalize">
                        {func.name}
                      </h3>
                      <p className="text-gray-400">{func.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Examples:</h4>
                    <div className="space-y-2">
                      {func.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <code className="px-2 py-1 bg-dark-bg border border-dark-border rounded font-mono text-primary-400">
                            {example.input}
                          </code>
                          <span className="text-gray-500">({example.mode})</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-white font-semibold">{example.result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Angle Modes
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {angleModes.map((mode, index) => (
                <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {mode.mode}
                  </h3>
                  <p className="text-gray-400 mb-3">{mode.description}</p>
                  <div className="bg-dark-bg border border-dark-border rounded p-3">
                    <p className="text-sm font-mono text-primary-400">{mode.examples}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQCard
                question="Why do I get different results for trigonometric functions?"
                answer="Make sure you're using the correct angle mode. Use DEG for degrees (0-360) or RAD for radians (0-2π). This is the most common source of confusion."
              />
              <FAQCard
                question="How accurate are the calculations?"
                answer="The calculator uses JavaScript's built-in Math functions with double-precision floating-point arithmetic, which provides accuracy up to 15-17 significant digits."
              />
              <FAQCard
                question="Can I chain multiple trigonometric functions?"
                answer="Yes! You can perform multiple operations sequentially. For example, enter a number, press sin, then the result is automatically used for the next operation."
              />
              <FAQCard
                question="What happens if I calculate tan(90°)?"
                answer="Tangent of 90 degrees (or π/2 radians) approaches infinity. The calculator will display a very large number or an error depending on the precision."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function FAQCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
      <p className="text-gray-400 text-sm">{answer}</p>
    </div>
  )
}