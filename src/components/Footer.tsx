import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    product: [
      { href: '/calculator', label: 'Calculator' },
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
            <Link href="/" className="text-2xl font-bold text-white hover:text-primary-400 transition-colors">
              CalcMaster
            </Link>
            <p className="mt-2 text-gray-400">
              A powerful scientific calculator for everyone.
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