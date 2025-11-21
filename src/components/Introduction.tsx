import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          The truth? You are playing with AI tools. 
        </p>
        <p className="mt-4">
        You write random prompts.
        </p>
        <p className="mt-4">You start from scratch every time.</p>
        <p className="mt-4">You get inconsistent results.</p>
        <p className="mt-4">You’re always 6–12 months behind the curve.</p>
        <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
        Using ChatGPT ≠ leveraging AI.
        </p>
        <p className="mt-4">
        You’re still doing 90% of the work manually.
        </p>
        <p className="mt-4">You’re still doing tasks AI could handle for you.</p>
        <p className="mt-4">You’re still reinventing the wheel every week.</p>
        <p className="mt-4">It’s not your fault.</p>
        <p className="mt-4">Nobody taught you how to build AI systems, not prompts.</p>
        <p className="mt-4">Until now.</p>
        <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
        You’ll learn the frameworks used by top 1% marketers to:
        </p>
        
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Stop starting from zero every time',
            'Create repeatable, quality AI outputs day after day',
            'Turn AI into a real part of your workflow',
            'Build the foundation for future automation',
            'And work 5–10x faster to skyrocket your productivity',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          This course isn't theory. 
        </p>
        <p className="mt-8">
          It’s a practical transformation in how you think, organize and execute with AI. 
        </p>
        <p className="mt-10">
          <Link
            href="https://buy.stripe.com/28E28se7Qg8ogRX0CfeME03"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Buy the course - $27{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
