'use client'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'

interface MarqueeImage {
  id: number
  image: string
  alt: string
  link?: string
}

interface ImageMarqueeProps {
  images: MarqueeImage[]
  speed?: number
}

const ImageMarquee = ({ images, speed = 40 }: ImageMarqueeProps) => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealWrapper className="marquee-container">
        <Marquee pauseOnHover speed={speed} autoFill>
          <div className="flex items-end gap-3 first:mr-3">
            {images.map((item, index) => {
              // Alternate heights: odd items are taller
              const isTall = index % 2 === 0
              const heightClass = isTall ? 'h-[320px] md:h-[480px]' : 'h-[260px] md:h-[380px]'
              return (
                <figure key={item.id} className={`group relative w-56 md:w-[362px] ${heightClass}`}>
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute left-1/3 top-[55%] cursor-pointer opacity-0 transition-all duration-[400ms] ease-in-out group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <rect width="48" height="48" fill="#151515" />
                          <path
                            d="M18 30L30 18M30 18H20M30 18V28"
                            stroke="#EDF0F5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                </figure>
              )
            })}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default ImageMarquee
