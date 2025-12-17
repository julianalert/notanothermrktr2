import { NextRequest, NextResponse } from 'next/server'

const LOOPS_API_KEY = process.env.LOOPS_API_KEY
const LOOPS_API_URL = 'https://app.loops.so/api/v1'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Add email to loops.so audience and trigger event
    if (LOOPS_API_KEY) {
      try {
        // First, create or update the contact in loops.so
        const createContactResponse = await fetch(
          `${LOOPS_API_URL}/contacts/create`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${LOOPS_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
            }),
          }
        )

        if (!createContactResponse.ok) {
          const errorText = await createContactResponse.text()
          console.error('Failed to create/update loops.so contact:', errorText)
          return NextResponse.json(
            { error: 'Failed to process email' },
            { status: 500 }
          )
        }

        console.log(`Successfully added/updated ${email} in loops.so`)

        // Then, send the event
        const sendEventResponse = await fetch(
          `${LOOPS_API_URL}/events/send`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${LOOPS_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              eventName: 'paidCourse',
            }),
          }
        )

        if (!sendEventResponse.ok) {
          const errorText = await sendEventResponse.text()
          console.error('Failed to send loops.so event:', errorText)
          return NextResponse.json(
            { error: 'Failed to trigger course download' },
            { status: 500 }
          )
        }

        console.log(`Successfully triggered paidCourse event for ${email}`)
      } catch (error) {
        console.error('Error with loops.so integration:', error)
        return NextResponse.json(
          { error: 'Failed to process request' },
          { status: 500 }
        )
      }
    } else {
      console.warn('LOOPS_API_KEY not set, skipping loops.so integration')
      return NextResponse.json(
        { error: 'Service not configured' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
