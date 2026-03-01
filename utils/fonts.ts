import localFont from 'next/font/local'
import { Instrument_Serif } from 'next/font/google'

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

export { satoshi, instrumentSerif }
