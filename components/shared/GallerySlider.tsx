'use client'

import { cn } from '@/utils/cn'
import { FC, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper/types'
import RevealWrapper from '../animation/RevealWrapper'

interface GalleryImage {
  id: number
  image: string
  alt: string
  caption?: string
}

interface GallerySliderProps {
  images: GalleryImage[]
  className?: string
}

const GallerySlider: FC<GallerySliderProps> = ({ images, className }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <RevealWrapper className={cn('relative w-full', className)}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        speed={700}
        onSwiper={setSwiperInstance}
        className="relative h-56 overflow-hidden rounded-lg md:h-96 lg:h-[500px]">
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative h-full w-full">
              <img src={img.image} alt={img.alt} className="h-full w-full object-cover" />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-5 pt-12">
                  <p className="text-lg font-medium text-white md:text-xl">{img.caption}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/60">
          <svg
            className="h-5 w-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/60">
          <svg
            className="h-5 w-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </RevealWrapper>
  )
}

export default GallerySlider
