import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary transition-all duration-500" id="hero-section">
        <div className="page-section">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-dark-card/50 border border-dark-border/50 backdrop-blur-sm transition-all duration-300" data-hero-banana-badge>
              <span className="text-base">🍌</span>
              <span className="text-sm font-medium text-gray-300">Try Banana Theme!</span>
            </span>
          </div>
          <h1 className="hero-title">
            Scientific Calculator<br />
            <span className="text-primary-400 transition-colors duration-300" id="hero-accent">Made Simple</span>
          </h1>
          <p className="hero-subtitle">
            A powerful, easy-to-use online calculator with advanced mathematical functions.
            Perfect for students, engineers, and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator" className="btn btn-primary">
              Try Calculator
            </Link>
            <Link href="/docs" className="btn btn-secondary">
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-section bg-dark-bg">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Basic Arithmetic"
            description="Perform addition, subtraction, multiplication, and division with ease."
          />
          <FeatureCard
            title="Trigonometric Functions"
            description="Calculate sin, cos, and tan in both degrees and radians."
          />
          <FeatureCard
            title="Angle Mode Toggle"
            description="Switch between DEG (degrees) and RAD (radians) instantly."
          />
          <FeatureCard
            title="Keyboard Support"
            description="Use your keyboard for fast and efficient input."
          />
          <FeatureCard
            title="Responsive Design"
            description="Works perfectly on desktop, tablet, and mobile devices."
          />
          <FeatureCard
            title="Constant π"
            description="Quick access to the mathematical constant pi for calculations."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-dark-card border-t border-dark-border">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Calculate?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start using our scientific calculator now. It's free, fast, and works in your browser.
          </p>
          <Link href="/calculator" className="btn btn-primary">
            Launch Calculator
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )
}