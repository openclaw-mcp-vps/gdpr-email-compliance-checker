import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Email Compliance Checker — Scan Campaigns Instantly',
  description: 'Analyze email templates and sequences for GDPR compliance issues, missing unsubscribe links, and consent violations. Built for SaaS email marketing managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16a076da-5c8e-46d2-a2fe-23b2096dde5d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
