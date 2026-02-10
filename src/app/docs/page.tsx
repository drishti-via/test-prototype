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
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Documentation ★
          </h1>
          <p className="text-cyan-300 mb-12 text-lg font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>
            Everything you need to know about using the Scientific Calculator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {docs.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="card y2k-link"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="card-title">★ {doc.title}</h3>
                <p className="card-description">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}