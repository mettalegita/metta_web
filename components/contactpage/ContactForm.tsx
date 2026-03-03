'use client'
import React, { useCallback, useEffect, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || document.getElementById('recaptcha-script')) return

    const script = document.createElement('script')
    script.id = 'recaptcha-script'
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.onload = () => setRecaptchaLoaded(true)
    document.head.appendChild(script)

    return () => {
      const badge = document.querySelector('.grecaptcha-badge')
      if (badge) badge.remove()
    }
  }, [])

  const getRecaptchaToken = useCallback(async (): Promise<string | null> => {
    if (!RECAPTCHA_SITE_KEY || !recaptchaLoaded || !window.grecaptcha) return null

    const timeout = new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000))
    const tokenPromise = new Promise<string | null>((resolve) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
          resolve(token)
        } catch {
          resolve(null)
        }
      })
    })

    return Promise.race([tokenPromise, timeout])
  }, [recaptchaLoaded])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const recaptchaToken = await getRecaptchaToken()

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', organization: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {status === 'success' ? (
          <RevealWrapper className="reveal-me mx-auto max-w-[800px] text-center">
            <div className="py-16">
              <svg
                className="mx-auto mb-6 size-16 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mb-3 text-3xl font-medium tracking-tight text-secondary dark:text-backgroundBody">
                Message Sent!
              </h3>
              <p className="text-xl text-colorText dark:text-dark-100">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="rv-button rv-button-primary mt-8 inline-block">
                <div className="rv-button-top">
                  <span>Send Another Message</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">Send Another Message</span>
                </div>
              </button>
            </div>
          </RevealWrapper>
        ) : (
          <RevealWrapper
            as="form"
            onSubmit={handleSubmit}
            className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2">
            <div className="md:col-span-full">
              <label
                htmlFor="name"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText placeholder:text-colorText/50 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100 dark:placeholder:text-dark-100/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization (optional)"
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText placeholder:text-colorText/50 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100 dark:placeholder:text-dark-100/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText placeholder:text-colorText/50 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100 dark:placeholder:text-dark-100/50"
                required
              />
            </div>

            <div className="md:col-span-full">
              <label
                htmlFor="message"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your inquiry"
                className="mt-3 min-h-44 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText placeholder:text-colorText/50 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100 dark:placeholder:text-dark-100/50"
                required></textarea>
            </div>

            {status === 'error' && (
              <div className="col-span-full rounded border border-red-300 bg-red-50 px-5 py-3 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
                {errorMessage}
              </div>
            )}

            <div className="col-span-full sm:mt-14 md:mx-auto">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rv-button rv-button-primary block w-full disabled:pointer-events-none disabled:opacity-60 md:inline-block md:w-auto">
                <div className="rv-button-top">
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </div>
              </button>
            </div>

            {RECAPTCHA_SITE_KEY && (
              <p className="col-span-full text-center text-xs text-colorText/60 dark:text-dark-100/40">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noreferrer">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            )}
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default ContactForm
