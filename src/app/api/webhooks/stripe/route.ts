import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
})

const LOOPS_API_KEY = process.env.LOOPS_API_KEY
const LOOPS_API_URL = 'https://app.loops.so/api/v1'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const error = err as Error
    console.error('Webhook signature verification failed:', error.message)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    // Get customer email
    const customerEmail = session.customer_email || 
      (session.customer && typeof session.customer === 'string' 
        ? (await stripe.customers.retrieve(session.customer) as Stripe.Customer).email
        : (session.customer as Stripe.Customer)?.email)

    if (!customerEmail) {
      console.error('No customer email found in session')
      return NextResponse.json(
        { error: 'No customer email found' },
        { status: 400 }
      )
    }

    // Add email to loops.so audience and trigger event
    if (LOOPS_API_KEY) {
      try {
        // First, create or update the contact in loops.so
        // Using /contacts/create which creates if doesn't exist or updates if it does
        const createContactResponse = await fetch(
          `${LOOPS_API_URL}/contacts/create`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${LOOPS_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: customerEmail,
            }),
          }
        )

        if (!createContactResponse.ok) {
          const errorText = await createContactResponse.text()
          console.error('Failed to create/update loops.so contact:', errorText)
        } else {
          console.log(`Successfully added/updated ${customerEmail} in loops.so`)
        }

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
              email: customerEmail,
              eventName: 'paidCourse',
            }),
          }
        )

        if (!sendEventResponse.ok) {
          const errorText = await sendEventResponse.text()
          console.error('Failed to send loops.so event:', errorText)
        } else {
          console.log(`Successfully triggered paidCourse event for ${customerEmail}`)
        }
      } catch (error) {
        console.error('Error with loops.so integration:', error)
        // Don't fail the webhook if loops.so fails
      }
    } else {
      console.warn('LOOPS_API_KEY not set, skipping loops.so integration')
    }
  }

  return NextResponse.json({ received: true })
}

