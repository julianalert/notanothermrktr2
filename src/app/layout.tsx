import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Use AI like a top 1% marketer - 5-Day Course | Not Another Marketer',
  description:
    'A 5-day course that takes you from random prompting to building AI systems. Get consistent, high-quality outputs and work 5-10x faster. Learn the frameworks used by top marketers.',
  keywords: [
    'AI marketing',
    'ChatGPT for marketers',
    'AI systems',
    'marketing automation',
    'AI course',
    'GPT prompts',
    'AI workflow',
    'marketing productivity',
    'AI tools for marketing',
    'Not Another Marketer',
  ],
  authors: [{ name: 'Julien', url: 'https://x.com/notanothermrktr' }],
  creator: 'Julien - Not Another Marketer',
  publisher: 'Not Another Marketer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notanothermrktr.com', // Update with your actual domain
    siteName: 'Not Another Marketer',
    title: 'Use AI like a top 1% marketer - 5-Day Course',
    description:
      'A 5-day course that takes you from random prompting to building AI systems. Get consistent, high-quality outputs and work 5-10x faster.',
    images: [
      {
        url: '/images/cover.png',
        width: 1200,
        height: 630,
        alt: 'Use AI like a top 1% marketer - 5-Day Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use AI like a top 1% marketer - 5-Day Course',
    description:
      'A 5-day course that takes you from random prompting to building AI systems. Get consistent, high-quality outputs and work 5-10x faster.',
    creator: '@notanothermrktr',
    images: ['/images/cover.png'],
  },
  alternates: {
    canonical: 'https://notanothermrktr.com', // Update with your actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
