'use client'

import useReveal from '@/hooks/useReveal'

interface AboutV2Props {
  description?: string
}

const AboutV2 = ({
  description = 'Rivor Agency: Shaping the Future of Digital Innovation. We are dedicated to empowering blockchain pioneers and transforming the realm of digital ownership for today and beyond.',
}: AboutV2Props) => {
  const { revealRef } = useReveal()

  return (
    <section className="relative -z-10 overflow-hidden bg-backgroundBody pb-14 pt-0 dark:bg-dark md:pb-16 lg:pb-[88px] lg:pt-[100px] xl:pb-[100px]">
      <div className="container">
        <div>
          <h3 ref={revealRef} className="text-secondary dark:text-backgroundBody md:text-5xl md:leading-[1.5]">
            {description}
          </h3>
        </div>
      </div>
    </section>
  )
}

export default AboutV2
