'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeaderV2 from './SectionHeaderV2'

interface EventItem {
  id: number
  date: string
  title: string
  location: string
  image?: string
}

interface EventsProps {
  data: {
    italicTitle: string
    headingTitle: string
    description: string
    items: EventItem[]
  }
}

const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

const Events = ({ data }: EventsProps) => {
  const previewRef = useRef<HTMLDivElement>(null)
  const previewImgRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnyImage = data.items.some((e) => e.image)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return

    const preview = previewRef.current
    const previewImg = previewImgRef.current
    const container = containerRef.current
    if (!preview || !previewImg || !container) return

    const rows = container.querySelectorAll<HTMLDivElement>('.event-row[data-img]')
    const cleanups: (() => void)[] = []

    rows.forEach((row) => {
      const handleEnter = () => {
        const imgSrc = row.getAttribute('data-img')
        if (!imgSrc) return
        previewImg.src = imgSrc

        gsap.to(preview, {
          duration: 0.3,
          scale: 1,
          rotate: 15,
          ease: 'power2.out',
        })
      }

      const handleMove = (e: MouseEvent) => {
        const offsetX = preview.offsetWidth / 2
        const offsetY = preview.offsetHeight / 2
        preview.style.left = `${e.pageX - offsetX}px`
        preview.style.top = `${e.pageY - offsetY}px`
      }

      const handleLeave = () => {
        gsap.to(preview, {
          duration: 0.3,
          scale: 0,
          rotate: -15,
          ease: 'power2.out',
        })
      }

      row.addEventListener('mouseenter', handleEnter)
      row.addEventListener('mousemove', handleMove)
      row.addEventListener('mouseleave', handleLeave)

      cleanups.push(() => {
        row.removeEventListener('mouseenter', handleEnter)
        row.removeEventListener('mousemove', handleMove)
        row.removeEventListener('mouseleave', handleLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [data.items])

  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container mb-10 flex flex-col justify-center gap-x-8 gap-y-2 max-md:items-start md:mb-20 md:flex-row md:items-center md:justify-between">
        <SectionHeaderV2
          headingTitle={data.headingTitle}
          italicTitle={data.italicTitle}
          description={data.description}
        />
      </div>

      {hasAnyImage && (
        <div
          ref={previewRef}
          className="pointer-events-none absolute left-1/2 top-1/4 z-20 hidden h-[200px] w-[200px] origin-center rotate-[20deg] scale-0 overflow-hidden md:block">
          <img ref={previewImgRef} src={TRANSPARENT_PIXEL} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      <div ref={containerRef}>
        <RevealWrapper className="divide-y-[1px] dark:divide-dark dark:last:border-dark max-md:last:border-b sm:px-10 [&>*:first-child]:border-t dark:[&>*:first-child]:border-dark">
          {data.items.map((event) => (
            <div
              key={event.id}
              className="event-row group relative grid h-full grid-cols-12 items-center overflow-hidden px-5 py-10 text-left max-md:text-center"
              {...(event.image ? { 'data-img': event.image } : {})}>
              <div className="absolute left-0 top-0 h-full w-full origin-bottom scale-y-0 bg-secondary transition-transform duration-500 ease-in-out group-hover:origin-top group-hover:scale-y-100 dark:bg-primary/90"></div>
              <span className="relative z-20 col-span-2 justify-self-center font-instrument text-sm font-normal italic leading-[1.4] transition-colors duration-300 group-hover:text-white max-md:col-span-2 md:text-[19px]">
                {event.date}
              </span>
              <h3 className="relative z-20 col-span-7 text-xl transition-colors duration-300 group-hover:text-white max-md:col-span-7 md:text-3xl lg:text-5xl lg:leading-[1.2]">
                {event.title}
              </h3>
              <p className="relative z-20 col-span-3 text-right text-base leading-[1.4] text-secondary transition-colors duration-300 group-hover:text-white dark:text-backgroundBody max-md:col-span-3">
                {event.location}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Events
