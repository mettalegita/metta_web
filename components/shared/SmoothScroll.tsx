'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface SmoothScrollingProps {
  children: ReactNode
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [LenisComponent, setLenisComponent] = useState<React.ComponentType<any> | null>(null)
  const lenisRef = useRef<any>(null)

  // Defer Lenis loading to after initial render
  useEffect(() => {
    const timer = setTimeout(async () => {
      const { ReactLenis } = await import('lenis/react')
      setLenisComponent(() => ReactLenis)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname, searchParams])

  // Handle .lenis-scroll-to click events
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return

    const handleClick = (e: Event) => {
      const target = e.target as Element
      lenis.scrollTo(target.getAttribute('href') ?? '', {
        offset: -100,
      })
    }

    const elements = document.querySelectorAll('.lenis-scroll-to')
    elements.forEach((ele) => {
      ele.addEventListener('click', handleClick)
    })

    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', handleClick)
      })
    }
  }, [LenisComponent, pathname])

  // Before Lenis loads, render children without smooth scrolling
  if (!LenisComponent) return <>{children}</>

  return (
    <LenisComponent ref={lenisRef} root options={{ duration: 1.1 }}>
      {children}
    </LenisComponent>
  )
}

export default SmoothScrollProvider
