'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ink-400 mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-ink-200 mb-12 text-lg text-center">
            Have a question or feedback? We'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-ink-400 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg text-ink-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg text-ink-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg text-ink-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg text-ink-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-200 transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink-400 mb-3">
                  📧 Email
                </h3>
                <p className="text-ink-200">
                  support@calcmaster.com
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-ink-400 mb-3">
                  🌐 Social Media
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-forest-500 hover:text-forest-600 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-forest-500 hover:text-forest-600 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-forest-500 hover:text-forest-600 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-ink-400 mb-3">
                  💡 Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/docs" className="text-forest-500 hover:text-forest-600 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-forest-500 hover:text-forest-600 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/calculator" className="text-forest-500 hover:text-forest-600 transition-colors">
                      Try Calculator
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card bg-ghibli-meadow">
                <h3 className="text-lg font-semibold text-forest-600 mb-3">
                  🍃 Response Time
                </h3>
                <p className="text-ink-400">
                  We typically respond within 24-48 hours. Thank you for your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}