import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="relative h-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 h-full bg-slate-200 text-slate-800/10">
          <GridPattern x="50%" y="50%" />
        </div>
        <Container size="sm" className="relative py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <svg
                className="mx-auto h-16 w-16 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Thank you!
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Your payment was successful. We're excited to have you on board!
            </p>
            <p className="mt-4 text-xl text-slate-600">
              Check your email for course access details.
            </p>
            <div className="mt-10">
              <Button href="/" color="blue">
                Back to home
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

