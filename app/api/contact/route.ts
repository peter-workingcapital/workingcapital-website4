import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, stage, challenge, message } = body

    // Validate required fields
    if (!name || !email || !company || !stage || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email to business owner
    const { data, error } = await resend.emails.send({
      from: 'WorkingCapital Contact <peter@workingcapitalou.com>',
      to: ['peter@workingcapitalou.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Company Details</h3>
            <p><strong>Stage:</strong> ${stage}</p>
            <p><strong>Primary Challenge:</strong> ${challenge}</p>
          </div>
          
          ${message ? `
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Additional Details</h3>
            <p>${message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours as promised on the website.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="color: #64748b; font-size: 12px;">
            This email was sent from the WorkingCapital contact form at workingcapitalou.com
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to the customer
    await resend.emails.send({
      from: 'WorkingCapital <peter@workingcapitalou.com>',
      to: [email],
      subject: 'Thank you for your interest in WorkingCapital',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You, ${name}!</h2>
          
          <p>Thank you for reaching out to WorkingCapital. We've received your request for a free HR assessment and will contact you within 24 hours.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
            <h3 style="margin-top: 0; color: #15803d;">What happens next?</h3>
            <ul style="color: #166534;">
              <li>We'll review your company details and challenges</li>
              <li>Peter will personally reach out within 24 hours</li>
              <li>We'll schedule your free 30-minute consultation</li>
              <li>You'll receive a custom HR assessment</li>
            </ul>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Your Submission Details</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Stage:</strong> ${stage}</p>
            <p><strong>Primary Challenge:</strong> ${challenge}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Need immediate assistance?</strong> Call us at +34 627 71 7137 or reply to this email.
            </p>
          </div>
          
          <p>Best regards,<br>
          <strong>Peter van Kersen</strong><br>
          Director & HR Strategist<br>
          WorkingCapital</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="color: #64748b; font-size: 12px;">
            WorkingCapital - Stop losing time to HR chaos. Scale your team, focus on building your product.
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
