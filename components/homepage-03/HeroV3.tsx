'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

interface HeroV3Props {
  image?: string
  title?: string
  subtitle?: string
}

const HeroV3 = ({ image = '/images/homeV3-hero.png', title = 'Agency', subtitle = 'Rivor' }: HeroV3Props) => {
  const heroZoomImgRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!heroZoomImgRef.current) return
    gsap.to(heroZoomImgRef.current, {
      scale: 3.3,
      ease: 'expoScale',
      scrollTrigger: {
        trigger: heroZoomImgRef.current,
        start: 'top 20%',
        end: 'top -30%',
        pin: true,
        scrub: 1,
      },
    })
  }, [])
  return (
    <section className="relative z-10 overflow-hidden pb-[830px] pt-36 md:pt-[180px] lg:pt-[240px] xl:pb-[850px]">
      <div className="relative mx-auto h-[330px] max-w-xs sm:max-w-[400px] md:max-w-[570px]">
        <Image
          src={image}
          ref={heroZoomImgRef}
          width={570}
          height={330}
          className="absolute left-0 top-0 h-full w-full object-cover"
          alt="Hero image"
        />
      </div>

      <h1 className="absolute right-4 top-56 font-instrument text-5xl font-normal italic leading-[1.1] sm:text-7xl md:top-60 md:text-8xl lg:right-36 lg:top-72 lg:text-9xl xl:right-60 xl:top-96 xl:text-[156px]">
        {title}
      </h1>
      <h2 className="absolute left-[20%] mt-8 text-6xl leading-[1.1] sm:text-8xl md:text-[100px] lg:text-[140px] xl:text-[238px]">
        {subtitle}
      </h2>
    </section>
  )
}

export default HeroV3
