export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 mb-12">
            Have questions or feedback? We'd love to hear from you.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-dark-border">
            <h2 className="text-xl font-semibold text-white mb-4">
              Other Ways to Reach Us
            </h2>
            <div className="space-y-3 text-gray-400">
              <p>Email: support@calcmaster.com</p>
              <p>Twitter: @CalcMaster</p>
              <p>GitHub: github.com/calcmaster</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}