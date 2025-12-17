'use client'

import clsx from 'clsx'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

function Plan({
  name,
  description,
  price,
  features,
  featured = false,
}: {
  name: string
  description: string
  price: string
  features: Array<string>
  featured?: boolean
}) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/download-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to download course')
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-blue-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 mask-[linear-gradient(white,transparent)] text-white/10">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : 'divide-slate-200 text-slate-900',
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                  className={clsx(
                    'h-8 w-8 flex-none',
                    featured ? 'fill-white' : 'fill-slate-600',
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {isSuccess ? (
          <div className="mt-8 rounded-md bg-green-50 p-4">
            <p className="text-sm font-medium text-green-800">
              Check your email for course access details!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={clsx(
                  'flex-1 rounded-md border px-4 py-2 text-base',
                  featured
                    ? 'border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20'
                    : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500',
                )}
              />
              <Button
                type="submit"
                color={featured ? 'white' : 'blue'}
                disabled={isLoading}
                className="!py-2 cursor-pointer whitespace-nowrap"
              >
                {isLoading ? 'Downloading...' : 'Start the course'}
              </Button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="3" id="pricing-title">
          Pricing
        </SectionHeading>
        {/* <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Your AI System Upgrade
        </p> */}
        {/* <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
        This is not one of those fluffy “prompt guide” courses. This is a system upgrade.
        </p> */}
      </Container>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="flex justify-center bg-slate-50 sm:px-6 sm:pb-16 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            featured
            name="5-day course"
            description="Everything icon resource you could ever ask for."
            price="Free"
            features={[
              'The full 5-day email course',
              'The Content Transformer Agent Blueprint',
              'The Memory Pack template',
              'A complete AI Stack Map',
              'Real-world examples and exercises',
              'Lifetime access to updates',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
