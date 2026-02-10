import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary">
        <div className="page-section">
          <h1 className="hero-title">
            ★ Scientific Calculator ★<br />
            <span className="text-cyan-300">Made Simple</span>
          </h1>
          <p className="hero-subtitle">
            A powerful, easy-to-use online calculator with advanced mathematical functions.
            Perfect for students, engineers, and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator" className="btn btn-primary">
              [ Try Calculator ]
            </Link>
            <Link href="/docs" className="btn btn-secondary">
              [ View Documentation ]
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-section bg-dark-bg">
        <h2 className="text-3xl font-bold font-y2k text-center text-yellow-300 mb-12" style={{textShadow: '2px 2px 0 #000000'}}>
          ★ Powerful Features ★
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
          <h2 className="text-3xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Ready to Calculate? ★
          </h2>
          <p className="text-cyan-300 mb-8 max-w-2xl mx-auto" style={{background: '#000000', padding: '8px', border: '2px solid #00ffff'}}>
            Start using our scientific calculator now. It's free, fast, and works in your browser.
          </p>
          <Link href="/calculator" className="btn btn-primary">
            [ Launch Calculator ]
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card">
      <h3 className="card-title">★ {title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )
}