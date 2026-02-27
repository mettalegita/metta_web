'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-XH5T5WPZ9C'

export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as { dataLayer: unknown[]; gtag: Function }
      win.dataLayer = win.dataLayer || []
      win.gtag = function () {
        win.dataLayer.push(arguments)
      }
      win.gtag('js', new Date())
      win.gtag('config', GA_MEASUREMENT_ID)
    }
  }, [])

  return (
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  )
}
