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
            <Link href="/" className="text-2xl font-bold font-y2k text-blue-800 hover:text-blue-600">
              ★ CalcMaster ★
            </Link>
            <p className="mt-2 text-black font-serif">
              Welcome to my calculator! &lt;marquee&gt; Best in 1999! &lt;/marquee&gt;
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h3>★ Product ★</h3>
            <ul>
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>• {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3>★ Company ★</h3>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>• {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-section">
            <h3>★ Resources ★</h3>
            <ul>
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>• {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>★ © {new Date().getFullYear()} CalcMaster ★ Best viewed in Netscape Navigator 4.0 ★</p>
      </div>
    </footer>
  )
}