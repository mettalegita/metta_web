'use client'
import { useEffect, useRef } from 'react'

const CursorPointer = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1023) return

    let animationId: number
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const updatePosition = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`
        cursorRef.current.style.top = `${currentY}px`
      }

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', updatePosition)
    animate()

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <div ref={cursorRef} className="pointer"></div>
}

export default CursorPointer
