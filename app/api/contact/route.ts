import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

interface ContactFormData {
  name: string
  organization: string
  email: string
  message: string
  recaptchaToken: string | null
}

interface RecaptchaResponse {
  success: boolean
  score?: number
  action?: string
  'error-codes'?: string[]
}

function getRecipientEmail(): string {
  try {
    const settingsPath = path.join(process.cwd(), 'data', 'siteSettings.json')
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'))
    return settings.site?.contactEmail || process.env.CONTACT_EMAIL || 'mirzalazuardi@gmail.com'
  } catch {
    return process.env.CONTACT_EMAIL || 'mirzalazuardi@gmail.com'
  }
}

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score: number }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not set — skipping verification')
    return { success: true, score: 1 }
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  })

  const data: RecaptchaResponse = await res.json()
  return { success: data.success, score: data.score ?? 0 }
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // Verify reCAPTCHA if both token and secret key are available
    if (process.env.RECAPTCHA_SECRET_KEY && body.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(body.recaptchaToken)
      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        return NextResponse.json({ error: 'Spam detected. Please try again later.' }, { status: 403 })
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (Number(process.env.SMTP_PORT) || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const recipientEmail = getRecipientEmail()
    const organizationLine = body.organization ? `<p><strong>Organization:</strong> ${body.organization}</p>` : ''

    await transporter.sendMail({
      from: `"Metta Legita Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: body.email,
      subject: `New Contact Form Message from ${body.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #181818; border-bottom: 2px solid #12D8CC; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${body.name}</p>
          ${organizationLine}
          <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">
            ${body.message}
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #999; font-size: 12px;">
            Sent from the contact form at mettalegita.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error)
    console.error('Contact form error:', errMsg, error)

    const isDev = process.env.NODE_ENV === 'development'
    return NextResponse.json(
      { error: isDev ? `Send failed: ${errMsg}` : 'Failed to send message. Please try again later.' },
      { status: 500 },
    )
  }
}
