import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    product: [
      { href: '/calculator', label: 'Calculator' },
      { href: '/converter', label: 'Converter' },
      { href: '/docs', label: 'Documentation' },
      { href: '/blog', label: 'Blog' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
    resources: [
      { href: '/docs/getting-started', label: 'Getting Started' },
      { href: '/docs/keyboard-shortcuts', label: 'Keyboard Shortcuts' },
      { href: '/docs/scientific-functions', label: 'Scientific Functions' },
    ],
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <Link href="/" className="text-2xl font-bold text-ink-400 hover:text-forest-500 transition-colors flex items-center gap-2">
              {/* Small decorative leaf */}
              <svg 
                className="w-6 h-6 text-forest-500" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z"/>
              </svg>
              CalcMaster
            </Link>
            <p className="mt-2 text-ink-200">
              A calm, capable calculator inspired by nature's beauty.
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CalcMaster. All rights reserved.</p>
      </div>
    </footer>
  )
}