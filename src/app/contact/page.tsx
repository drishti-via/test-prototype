export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-y2k text-yellow-300 mb-6" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Contact Us ★
          </h1>
          <p className="text-cyan-300 mb-12 font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>
            Have questions or feedback? We'd love to hear from you.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold font-y2k text-blue-800 mb-2">
                ★ Name ★
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 y2k-bevel font-serif text-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold font-y2k text-blue-800 mb-2">
                ★ Email ★
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 y2k-bevel font-serif text-black"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold font-y2k text-blue-800 mb-2">
                ★ Message ★
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 y2k-bevel font-serif text-black resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              [ Send Message ]
            </button>
          </form>

          <div className="mt-12 pt-12 border-t-2 border-gray-600">
            <h2 className="text-xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
              ★ Other Ways to Reach Us ★
            </h2>
            <div className="space-y-3 text-black font-serif">
              <p>★ Email: <a href="mailto:support@calcmaster.com" className="y2k-link">support@calcmaster.com</a></p>
              <p>★ Twitter: <a href="https://twitter.com/CalcMaster" className="y2k-link">@CalcMaster</a></p>
              <p>★ GitHub: <a href="https://github.com/calcmaster" className="y2k-link">github.com/calcmaster</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}