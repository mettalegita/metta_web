'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-XH5T5WPZ9C'

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)
  }, [])

  return (
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  )
}

declare global {
  interface Window {
    dataLayer: any[]
  }
}
