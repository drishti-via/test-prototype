import Link from 'next/link'

export default function DocsPage() {
  const docs = [
    {
      href: '/docs/getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of using the scientific calculator.',
      icon: '🚀',
    },
    {
      href: '/docs/keyboard-shortcuts',
      title: 'Keyboard Shortcuts',
      description: 'Master keyboard shortcuts for faster calculations.',
      icon: '⌨️',
    },
    {
      href: '/docs/scientific-functions',
      title: 'Scientific Functions',
      description: 'Explore advanced trigonometric and mathematical functions.',
      icon: '📐',
    },
  ]

  return (
    <div>
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ink-400 mb-4">
            Documentation
          </h1>
          <p className="text-ink-200 mb-12 text-lg">
            Everything you need to know about using the Scientific Calculator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {docs.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="card transition-all duration-300"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="card-title">{doc.title}</h3>
                <p className="card-description">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}