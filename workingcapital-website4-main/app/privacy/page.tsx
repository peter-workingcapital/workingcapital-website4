import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | WorkingCapital',
  description: 'Privacy Policy for WorkingCapital – Fractional HR for Venture-Backed Startups.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header bar */}
      <div className="bg-gray-900 py-4 px-6">
        <Link href="/">
          <img src="/logo-white.svg" alt="WorkingCapital" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              WorkingCapital (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a fractional HR consultancy
              helping venture-backed startups hire, comply, and build great cultures.
              Our website is <strong>workingcapitalou.com</strong>. For privacy enquiries contact us at{' '}
              <a href="mailto:peter@workingcapitalou.com" className="text-blue-600 underline">
                peter@workingcapitalou.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Data We Collect</h2>
            <p>We collect personal data only when you actively provide it:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Contact form</strong> – name, email address, company name, and any message you choose to include.</li>
              <li><strong>Lead magnet</strong> – email address when you request the HR Scaling Playbook.</li>
              <li><strong>Analytics</strong> – anonymised usage data via Google Analytics 4 (page views, session duration, referrer). No personally identifiable information is collected by GA4 unless you have submitted a form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to enquiries and schedule discovery calls.</li>
              <li>To send you the resource you requested (e.g. HR Scaling Playbook).</li>
              <li>To send occasional relevant updates about our services (you may unsubscribe at any time).</li>
              <li>To improve our website and marketing via aggregated analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Legal Basis (GDPR)</h2>
            <p>
              Where the GDPR applies, we process your data on the basis of:
              <strong> legitimate interests</strong> (responding to enquiries),
              <strong> consent</strong> (marketing emails – you can withdraw at any time), and
              <strong> contract performance</strong> (where we have an active engagement).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Data Sharing</h2>
            <p>
              We do not sell or rent your personal data. We share it only with trusted service providers
              who help us operate our business (e.g. email delivery via Resend, analytics via Google).
              All processors are bound by data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
            <p>
              We retain contact and lead data for up to 3 years from your last interaction with us,
              after which it is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p>You have the right to access, correct, delete, or port your personal data, and to object to or restrict its processing. To exercise any right, email{' '}
              <a href="mailto:peter@workingcapitalou.com" className="text-blue-600 underline">
                peter@workingcapitalou.com
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              We use essential cookies required for site functionality and analytics cookies (Google Analytics 4).
              You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. The date at the top of the page reflects the most recent revision.
              Continued use of our website after changes constitutes acceptance.
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
