import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '700'],
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const metadata: Metadata = {
  title: 'WorkingCapital | Fractional HR for Venture-Backed Startups',
  description: 'Your fractional HR team. We handle hiring, compliance, and culture so you can focus on building your product. Trusted by 60+ venture-backed startups across 12 countries.',
  keywords: 'fractional HR, HR consulting, startup HR, venture-backed startups, fractional HR team, startup people operations, HR outsourcing, scaling startup team, international HR compliance',
  authors: [{ name: 'Peter van Kersen' }],
  metadataBase: new URL('https://www.workingcapitalou.com'),
  alternates: { canonical: 'https://www.workingcapitalou.com' },
  openGraph: {
    title: 'WorkingCapital | Fractional HR for Venture-Backed Startups',
    description: 'Your fractional HR team — from first hire to 500+ employees. 40% faster hiring, 90% fewer compliance issues. Book a free HR audit.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.workingcapitalou.com',
    siteName: 'WorkingCapital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkingCapital | Fractional HR for Venture-Backed Startups',
    description: 'Your fractional HR team — from first hire to 500+ employees. Book a free HR audit today.',
    creator: '@workingcapitalou',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
