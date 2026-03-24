import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const webhookUrl = process.env.MAKE_PLAYBOOK_WEBHOOK_URL

    if (!webhookUrl) {
      // Dev mode: log and succeed without actually hitting Make
      console.warn('MAKE_PLAYBOOK_WEBHOOK_URL not set; skipping webhook.')
      return NextResponse.json({ message: 'Submitted (dev mode)' }, { status: 200 })
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        source: 'hr-scaling-playbook',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      console.error('Make webhook error:', response.status, await response.text())
      return NextResponse.json({ error: 'Failed to register' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Playbook route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
