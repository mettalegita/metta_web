import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import GoogleAnalytics from '@/components/shared/GoogleAnalytics'
import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'

export const metadata: Metadata = {
  title: {
    default: 'Metta Legita | Pianist, Composer, Educator',
    template: '%s | Metta Legita',
  },
  description:
    'Metta Legita is a pianist, composer, and music educator based in Phnom Penh, Cambodia. Known for jazz-contemporary works and cross-disciplinary projects.',
  keywords: ['pianist', 'composer', 'music educator', 'jazz', 'Phnom Penh', 'Cambodia'],
  authors: [{ name: 'Metta Legita' }],
  openGraph: {
    title: 'Metta Legita | Pianist, Composer, Educator',
    description: 'Metta Legita is a pianist, composer, and music educator based in Phnom Penh, Cambodia.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Metta Legita',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              <ThemeSwitcher />
              <CursorPointer />
              {children}
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
