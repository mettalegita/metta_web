import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Content Manager',
  robots: 'noindex',
}

export default function AdminPage() {
  return (
    <>
      <Script src="https://media-library.cloudinary.com/global/all.js" />
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />
    </>
  )
}
