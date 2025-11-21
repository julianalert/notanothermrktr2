import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import { CheckIcon } from './CheckIcon'

const tableOfContents = {
  'Day 1: Why You’re Still Working Like It’s 2023? The AI Illusion': {
    'The hidden reason AI feels powerful but never actually saves you time': 1,
    'The mindset shift that separates AI dabblers from AI operators': 15,
    'A simple exercise that instantly changes how you look at your workflow': 20,
  },
  'Day 2: The Secret to 10× Output With the Same Effort': {
    'Why prompting “smarter” will never fix your AI problems': 21,
    'The structure behind every scalable AI workflow': 22,
    'A method to turn any repeated task into a repeatable system': 26,
  },
  'Day 3: Give Your AI a Brain': {
    'The overlooked trick that makes your AI’s output dramatically better': 50,
    'How to make AI adapt to your style, not the other way around': 57,
    'A simple system that makes your results improve week after week': 66,
  },
  'Day 4: Build your first AI Agent, no coding needed': {
    'Bring together everything you’ve learned into one powerful system': 82,
    'Watch how it transforms raw input into high-quality output': 88,
    'The refinement loop pros use to elevate results instantly': 95,
  },
  'Day 5: This Is How You Become a 10× Marketer': {
    'The 3 essential AI systems every marketer needs': 82,
    'How these systems work together to streamline your whole workflow': 88,
    'Your roadmap for scaling beyond prompts into true AI-powered marketing': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          What's inside?
        </SectionHeading>
        {/* <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p> */}
        {/*<p className="mt-4 text-lg tracking-tight text-slate-700">
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p> */}
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
        <p className="mt-20 font-display text-4xl font-bold tracking-tight text-slate-900">
        🧠 What you’ll be able to do after the course
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Create a reusable AI system you can return to every day for consistent, high-quality output.',
            'Turn messy, repetitive marketing tasks into streamlined processes that AI executes step by step.',
            'Improve AI’s output quality week after week using a simple feedback system you’ll set up once.',
            'Translate complex tasks into simple inputs, letting your AI system handle the heavy lifting.',
            'Build the foundation for real automation (Make, Zapier, n8n) if you want to scale your systems later.',
            'Save hours every week by removing the repetitive, manual parts of your daily marketing work.',
            'Understand AI like top marketers do: not as a tool you “try”, but as a system you run.',
            'Think in systems, giving you a permanent skill you can apply to every future AI workflow you build.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
