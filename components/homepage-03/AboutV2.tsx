'use client'

import Link from 'next/link'
import useReveal from '@/hooks/useReveal'

interface AboutV2Props {
  description?: string
  buttonText?: string
  buttonLink?: string
}

const AboutV2 = ({
  description = 'Rivor Agency: Shaping the Future of Digital Innovation. We are dedicated to empowering blockchain pioneers and transforming the realm of digital ownership for today and beyond.',
  buttonText = 'Learn More',
  buttonLink = '/about',
}: AboutV2Props) => {
  const { revealRef } = useReveal()

  return (
    <section className="relative overflow-hidden bg-backgroundBody pb-14 pt-0 dark:bg-dark md:pb-16 lg:pb-[88px] lg:pt-[100px] xl:pb-[100px]">
      <div className="container">
        <div>
          <h3 ref={revealRef} className="text-secondary dark:text-backgroundBody md:text-5xl md:leading-[1.5]">
            {description}
          </h3>
          <div className="mt-8 md:mt-12">
            <Link
              href={buttonLink}
              className="inline-block border border-secondary bg-secondary px-8 py-4 text-sm uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-secondary dark:border-white dark:bg-white dark:text-secondary dark:hover:bg-transparent dark:hover:text-white">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutV2
