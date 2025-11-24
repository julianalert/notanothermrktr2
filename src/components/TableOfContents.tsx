import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import { CheckIcon } from './CheckIcon'

const tableOfContents = {
  'Day 1: Why You’re Not Getting the Results You Expect From AI': {
    'The core reason your AI outputs feel inconsistent or “off”': 1,
    'What separates people who get great results from those who don’t': 15,
    'How to identify the exact gaps that are limiting your AI potential': 20,
  },
  'Day 2: The Hidden Structure Behind Great AI Results': {
    'The simple way to turn messy tasks into clean, step-by-step workflows': 21,
    'How to guide AI through complex work without rewriting prompts': 22,
    'A method to turn any repeated task into a repeatable system': 26,
  },
  'Day 3: How to Make AI Adapt to You (Not the Other Way Around)': {
    'How to give AI a “memory” of your tone, style, and preferences': 50,
    'The elements AI needs to consistently sound like you': 57,
    'A simple system that makes your results improve week after week': 66,
  },
  'Day 4: Build Your First AI System (No Technical Skills Needed)': {
    'How to bring structure + memory together into one working system': 82,
    'How to run real inputs through it and get polished, usable output': 88,
    'How to refine and strengthen your system with a feedback loop': 95,
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
                        className="py-3"
                        aria-label={title}
                      >
                        <span className="font-medium text-slate-900">
                          {title}
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
        <div id="after-this-course" className="scroll-mt-14 mt-20">
          <SectionHeading number="2" id="after-this-course-title">
            After this course
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
            🧠 After this course, you'll be able to:
          </p>
        </div>
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
