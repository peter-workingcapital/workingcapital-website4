import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | WorkingCapital',
  description: 'Terms of Service for WorkingCapital – Fractional HR for Venture-Backed Startups.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="bg-gray-900 py-4 px-6">
        <Link href="/">
          <img src="/logo-white.svg" alt="WorkingCapital" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Agreement</h2>
            <p>
              By accessing <strong>workingcapitalou.com</strong> (the &ldquo;Site&rdquo;) you agree to these Terms of Service.
              If you do not agree, please do not use the Site. WorkingCapital reserves the right to update these terms
              at any time; continued use of the Site after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Services</h2>
            <p>
              WorkingCapital provides fractional HR consulting services to venture-backed startups.
              Information on the Site is for general informational purposes only and does not constitute
              professional HR, legal, or financial advice. Specific advice is only given under a signed
              engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, and downloadable resources —
              is the property of WorkingCapital and protected by copyright. You may not reproduce, distribute,
              or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Downloadable Resources</h2>
            <p>
              Resources such as the HR Scaling Playbook are provided for your personal, non-commercial use only.
              Redistribution or resale is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, WorkingCapital is not liable for any indirect,
              incidental, or consequential damages arising from your use of this Site or reliance on
              information provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the content
              or privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Spain. Any disputes will be subject to the
              exclusive jurisdiction of the courts of Barcelona, Spain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Contact</h2>
            <p>
              Questions about these terms? Email us at{' '}
              <a href="mailto:peter@workingcapitalou.com" className="text-blue-600 underline">
                peter@workingcapitalou.com
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
