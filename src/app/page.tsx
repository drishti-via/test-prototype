import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-ghibli-sky">
        <div className="page-section">
          <h1 className="hero-title">
            A Calm Calculator<br />
            <span className="text-forest-500">Inspired by Nature</span>
          </h1>
          <p className="hero-subtitle">
            A peaceful, capable calculator for everyday problem solving. 
            Beautiful design meets powerful functionality, bringing tranquility to your calculations.
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
      <section className="page-section section-bg-paper">
        <h2 className="text-3xl font-bold text-center text-ink-400 mb-12">
          Gentle Yet Powerful
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Basic Arithmetic"
            description="Perform addition, subtraction, multiplication, and division with ease and grace."
          />
          <FeatureCard
            title="Trigonometric Functions"
            description="Calculate sin, cos, and tan in both degrees and radians, smoothly as a flowing river."
          />
          <FeatureCard
            title="Angle Mode Toggle"
            description="Switch between DEG (degrees) and RAD (radians) instantly, like changing with the seasons."
          />
          <FeatureCard
            title="Keyboard Support"
            description="Use your keyboard for fast and efficient input, flowing naturally through your calculations."
          />
          <FeatureCard
            title="Responsive Design"
            description="Works perfectly on desktop, tablet, and mobile devices, wherever your journey takes you."
          />
          <FeatureCard
            title="Constant π"
            description="Quick access to the mathematical constant pi, as constant as the cycles of nature."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section section-bg-sky">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink-400 mb-4">
            Ready to Calculate in Peace?
          </h2>
          <p className="text-ink-200 mb-8 max-w-2xl mx-auto">
            Start using our nature-inspired calculator now. It's free, fast, and brings a sense of calm to your work.
          </p>
          <Link href="/calculator" className="btn btn-primary">
            Begin Calculating
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