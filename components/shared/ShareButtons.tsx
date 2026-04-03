'use client'

import { useEffect, useState } from 'react'

interface ShareButtonsProps {
  title: string
}

const ShareButtons = ({ title }: ShareButtonsProps) => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <path d="M214.75,211.71l-62.6-98.38,73.69-80.16a8,8,0,1,0-11.68-10.7L142.87,105,90.25,44.29A8,8,0,0,0,84,40H48.3a8,8,0,0,0-6.73,12.29l62.6,98.37-73.69,80.17a8,8,0,0,0,11.68,10.71l71.29-77.54,52.62,82.71A8,8,0,0,0,172,252h35.69a8,8,0,0,0,6.73-12.29Z" />
      ),
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
      ),
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
      ),
    },
  ]

  return (
    <ul className="flex items-center gap-5">
      {shareLinks.map((link) => (
        <li
          key={link.name}
          className="relative inline-block h-10 w-10 rounded-full border-2 border-secondary duration-300 hover:bg-primary dark:border-dark">
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
            <span className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 dark:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                {link.icon}
              </svg>
            </span>
            <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 dark:inline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256">
                {link.icon}
              </svg>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ShareButtons
