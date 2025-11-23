import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/toni.jpeg'
import avatarImage2 from '@/images/ben.jpeg'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Toni Porter',
          role: 'Senior Marketing Manager @ Crate&Barrel',
          image: avatarImage1,
          companyLink: 'https://www.crateandbarrel.com/',
          authorLink: 'https://www.linkedin.com/in/tonisichel/',
        }}
      >
        <p>
          "I was struggling with mediocre AI outputs for months. This course finally gave me the quality outputs I was missing."
        </p>
      </Testimonial>
      
      <Pricing />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Ben Shafi',
          role: 'Founder @ 0.finance',
          image: avatarImage2,
          companyLink: 'https://www.0.finance/',
          authorLink: 'https://www.linkedin.com/in/ben-shafii-450039107/',
        }}
      >
        <p>
          "When you understand how to truly use GPT, it's like a whole new world opens up. This course did that for me."
        </p>
      </Testimonial>
      <Author />
      <Footer />
    </>
  )
}
