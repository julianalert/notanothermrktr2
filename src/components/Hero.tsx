import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/marketing-ai-course.png'
import clementImage from '@/images/clement.jpg'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
          "This course transformed everything. Honestly. 10x output, half the work."
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <div className="flex items-center justify-center gap-2 lg:justify-start">
          <Image
            src={clementImage}
            alt="Clément Bernard"
            className="h-8 w-8 rounded-full"
            width={32}
            height={32}
          />
          <strong className="font-semibold text-blue-600">
            <Link
              href="https://x.com/Clement_brnrd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              Clément Bernard
            </Link>
          </strong>
          , CMO @{' '}
          <Link
            href="https://trydetour.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 hover:underline"
          >
            Trydetour.com
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pt-20 lg:pb-36 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 right-1/2 -bottom-12 left-0 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Use AI like a top 1% marketer
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
            A 5-day course that takes you from random prompting to building systems that finally give you the quality you’ve been hoping for. 
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="https://buy.stripe.com/28E28se7Qg8ogRX0CfeME03" color="blue">
                Buy the course - $27
              </Button>
              <Button href="#introduction" variant="outline" color="blue">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
