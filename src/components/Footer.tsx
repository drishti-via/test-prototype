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
            {/* Banana badge in footer */}
            <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full bg-dark-card border border-dark-border transition-all duration-300 opacity-0 scale-95" data-banana-badge-inline>
              <span className="text-sm dark:text-gray-400">🍌</span>
              <span className="text-xs font-medium text-gray-400">Banana Theme</span>
            </span>
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
        <p>
          &copy; {new Date().getFullYear()} CalcMaster. All rights reserved.
          <span className="footer-banana-icon ml-2">🍌</span>
        </p>
      </div>
    </footer>
  )
}