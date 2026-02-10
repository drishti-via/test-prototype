export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-y2k text-yellow-300 mb-6" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Privacy Policy ★
          </h1>
          <p className="text-cyan-300 mb-12 font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-invert prose-lg max-w-none text-black font-serif space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
                ★ Information We Collect ★
              </h2>
              <p>
                CalcMaster is a completely client-side application. All calculations are performed
                directly in your browser, and we do not collect, store, or transmit your calculation data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
                ★ Cookies and Local Storage ★
              </h2>
              <p>
                We may use cookies and local storage solely for the purpose of:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Remembering your preferences (such as angle mode)</li>
                <li>Improving site performance</li>
                <li>Providing analytics (anonymized and aggregated)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
                ★ Third-Party Services ★
              </h2>
              <p>
                We do not use third-party services that collect your personal information. The calculator
                runs entirely in your browser with no external dependencies for calculation functions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
                ★ Data Security ★
              </h2>
              <p>
                Since we do not collect or store your data, there is no personal information to secure.
                Your calculations remain private on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
                ★ Your Rights ★
              </h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Use the calculator without creating an account</li>
                <li>Clear your browsing data at any time</li>
                <li>Disable cookies in your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Children's Privacy
              </h2>
              <p>
                CalcMaster is suitable for users of all ages. We do not knowingly collect personal
                information from children under 13 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify users of any
                material changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please contact us at
                privacy@calcmaster.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}