import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorkingCapital - HR Consulting for Venture-Backed Startups',
  description: 'Stop losing 15 hours per week to HR chaos. We become your fractional HR team so you can get back to building your product. Trusted by 50+ venture-backed startups.',
  keywords: 'HR consulting, startup HR, fractional HR, venture-backed startups, HR strategy, talent acquisition',
  authors: [{ name: 'Peter van Kersen' }],
  openGraph: {
    title: 'WorkingCapital - HR Consulting for Venture-Backed Startups',
    description: 'Stop losing 15 hours per week to HR chaos. We become your fractional HR team so you can get back to building your product.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkingCapital - HR Consulting for Venture-Backed Startups',
    description: 'Stop losing 15 hours per week to HR chaos. We become your fractional HR team so you can get back to building your product.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
