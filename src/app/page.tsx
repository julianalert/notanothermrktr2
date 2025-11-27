import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import avatarImage from '@/images/notanothermarketer.png'

function LinkCard({
  title,
  subtitle,
  href,
  featured = false,
  external = false,
}: {
  title: string
  subtitle: string
  href: string
  featured?: boolean
  external?: boolean
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative block w-full overflow-hidden rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 ${
        featured
          ? 'bg-blue-600 shadow-lg hover:shadow-xl'
          : 'bg-white shadow-md hover:shadow-lg'
      }`}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 mask-[linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="0" />
        </div>
      )}
      <div className="relative flex items-center justify-between">
        <div>
          <h3
            className={`font-display text-lg font-bold ${
              featured ? 'text-white' : 'text-slate-900'
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-0.5 text-sm ${
              featured ? 'text-blue-100' : 'text-slate-500'
            }`}
          >
            {subtitle}
          </p>
        </div>
        <svg
          className={`h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 ${
            featured ? 'text-white' : 'text-slate-400'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 hover:shadow-lg"
    >
      {children}
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100">
      {/* Background pattern */}
      <div className="absolute inset-0 text-slate-200">
        <GridPattern x="50%" y="0" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        {/* Avatar */}
        <div className="relative">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-white p-1 shadow-lg sm:h-32 sm:w-32">
            <Image
              src={avatarImage}
              alt="Not Another Marketer"
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Not Another Marketer
        </h1>

        {/* Bio */}
        <p className="mt-2 text-center text-slate-600">
          AI Marketing. Your way.
        </p>

        {/* Social Links */}
        <div className="mt-5 flex items-center gap-3">
          <SocialLink href="https://x.com/notanothermrktr" label="X (Twitter)">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://instagram.com/notanothermrktr"
            label="Instagram"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://tiktok.com/@notanothermrktr"
            label="TikTok"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </SocialLink>
        </div>

        {/* Link Cards */}
        <div className="mt-10 flex w-full max-w-md flex-col gap-3">
          <LinkCard
            title="The AI Marketing Course"
            subtitle="Master AI in 5 days — $27"
            href="/ai-for-marketing-course"
            featured
          />
          <LinkCard
            title="DFY AI Agent"
            subtitle="We build it for you"
            href="https://notanothermarketer.gumroad.com/l/done-for-you-marketing-ai-agent"
            external
          />
          <LinkCard
            title="AI Agents Library"
            subtitle="Browse ready-to-use agents"
            href="https://notanothermarketer.gumroad.com/l/marketing-ai-agents"
            external
          />
        </div>

        {/* Footer */}
        <p className="mt-auto pt-12 text-sm text-slate-400">
          © {new Date().getFullYear()} Not Another Marketer
        </p>
      </div>
    </div>
  )
}
