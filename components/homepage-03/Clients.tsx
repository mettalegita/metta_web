'use client'
import SectionHeader from '../shared/SectionHeader'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import SwiperSlider from './SwiperSlider'

interface ClientLogo {
  id: number
  image: string
  name: string
}

interface ClientsProps {
  italicTitle?: string
  headingTitle?: string
  description?: string
  logos?: ClientLogo[]
}

const defaultLogos: ClientLogo[] = [
  { id: 1, image: '/images/icons/company/client-1.svg', name: 'Client 1' },
  { id: 2, image: '/images/icons/company/client-2.svg', name: 'Client 2' },
  { id: 3, image: '/images/icons/company/client-3.svg', name: 'Client 3' },
  { id: 4, image: '/images/icons/company/client-4.svg', name: 'Client 4' },
  { id: 5, image: '/images/icons/company/client-5.svg', name: 'Client 5' },
  { id: 6, image: '/images/icons/company/client-6.svg', name: 'Client 6' },
]

const Clients = ({
  italicTitle = 'Have',
  headingTitle = 'Trust in us',
  description = 'Our agency is your gateway to discovering extraordinary artworks that speak to your aesthetic sensibilities.',
  logos = defaultLogos,
}: ClientsProps) => {
  // Split logos into two rows for marquee
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2))
  const secondRow = logos.slice(Math.ceil(logos.length / 2))

  return (
    <section className="relative mb-14 mt-14 overflow-hidden bg-dark py-20 dark:py-0 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            headingTitle={headingTitle}
            italicTitle={italicTitle}
            serviceHeadingColor
            description={description}
          />
        </div>
      </div>
      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center justify-between gap-x-20 py-8 md:gap-x-36">
            {logos.map((client) => (
              <div key={client.id} className="first:ml-20 md:first:ml-36">
                <Image src={client.image} alt={client.name} width={120} height={40} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-between gap-x-20 py-8 md:gap-x-36">
            {[...logos].reverse().map((client) => (
              <div key={`reverse-${client.id}`} className="first:ml-20 md:first:ml-36">
                <Image src={client.image} alt={client.name} width={120} height={40} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
      <SwiperSlider />
    </section>
  )
}

export default Clients
