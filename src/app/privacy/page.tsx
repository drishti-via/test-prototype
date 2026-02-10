export default function PrivacyPage() {
  return (
    <div>
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ink-400 mb-6">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-ink-400">
            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Introduction
              </h2>
              <p className="leading-relaxed text-ink-200">
                At CalcMaster, we take your privacy seriously. This privacy policy explains how we collect,
                use, and protect your personal information when you use our calculator website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed mb-4 text-ink-200">
                CalcMaster is designed to be privacy-focused. We do not collect or store:
              </p>
              <ul className="list-disc list-inside space-y-2 text-ink-200 ml-4">
                <li>Personal identification information</li>
                <li>Calculation history or inputs</li>
                <li>User account data (no registration required)</li>
                <li>Location data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Cookies and Local Storage
              </h2>
              <p className="leading-relaxed text-ink-200">
                We may use minimal local storage to enhance your experience, such as remembering your
                preferred settings. No tracking or advertising cookies are used. All data stored locally
                remains on your device and is never transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Third-Party Services
              </h2>
              <p className="leading-relaxed text-ink-200">
                CalcMaster does not use third-party analytics, advertising, or tracking services.
                Our website is self-contained and does not share data with any external parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Data Security
              </h2>
              <p className="leading-relaxed text-ink-200">
                Since we do not collect or store your personal data, there is no risk of data breaches
                affecting your information. Your calculations remain completely private on your device.
              </p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-semibold text-forest-600 mb-4">
                Your Rights
              </h2>
              <p className="leading-relaxed text-ink-200">
                As we do not collect personal data, there is no information to request, modify, or delete.
                You have full control over any local data stored on your device through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Changes to This Policy
              </h2>
              <p className="leading-relaxed text-ink-200">
                We may update this privacy policy from time to time. Any changes will be posted on this
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ink-400 mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed text-ink-200">
                If you have any questions about this privacy policy or our data practices, please contact us
                at support@calcmaster.com
              </p>
            </section>

            <div className="text-sm text-ink-100 pt-8 border-t border-cream-200">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}