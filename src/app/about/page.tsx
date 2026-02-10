import Link from 'next/link'

export default function AboutPage() {
  const features = [
    {
      title: 'User-Friendly Interface',
      description: 'Clean, intuitive design that makes calculations effortless.',
      icon: '🎨',
    },
    {
      title: 'Advanced Functions',
      description: 'Trigonometric functions with support for both degrees and radians.',
      icon: '📐',
    },
    {
      title: 'Keyboard Support',
      description: 'Full keyboard integration for fast and efficient input.',
      icon: '⌨️',
    },
    {
      title: 'Responsive Design',
      description: 'Works perfectly on desktop, tablet, and mobile devices.',
      icon: '📱',
    },
  ]

  const values = [
    {
      title: 'Accessibility',
      description: 'We believe powerful tools should be free and accessible to everyone.',
    },
    {
      title: 'Quality',
      description: 'We maintain high standards for accuracy, performance, and user experience.',
    },
    {
      title: 'Continuous Improvement',
      description: 'We\'re always working on new features and improvements based on user feedback.',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">
            About CalcMaster
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            We're on a mission to make mathematical tools more accessible to everyone.
          </p>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                CalcMaster was built with a simple goal: to provide a powerful, easy-to-use
                scientific calculator that anyone can access for free. We believe that mathematical
                tools shouldn't cost a fortune or require a degree to use effectively.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Why Choose CalcMaster?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Our Values
            </h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Built With Modern Technology
            </h2>
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                CalcMaster is built using cutting-edge web technologies to ensure the best performance and user experience:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span> Next.js for fast, responsive pages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span> TypeScript for code reliability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span> Tailwind CSS for modern styling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">✓</span> React for interactive UI components
                </li>
              </ul>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Our Team
            </h2>
            <div className="bg-dark-card border border-dark-border rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed">
                CalcMaster is developed by a passionate team of engineers, designers, and mathematics
                enthusiasts who believe in the power of accessible education tools. We're constantly
                working on new features and improvements based on your feedback.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8">
              Try our calculator today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn btn-primary">
                Launch Calculator
              </Link>
              <Link href="/docs" className="btn btn-secondary">
                Read the Docs
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}