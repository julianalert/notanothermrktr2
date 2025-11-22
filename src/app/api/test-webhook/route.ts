import { NextRequest, NextResponse } from 'next/server'

const LOOPS_API_KEY = process.env.LOOPS_API_KEY
const LOOPS_API_URL = 'https://app.loops.so/api/v1'

// Simple test endpoint - just visit this URL in your browser!
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const testEmail = searchParams.get('email') || 'test@example.com'

  if (!LOOPS_API_KEY) {
    return NextResponse.json(
      { 
        error: 'LOOPS_API_KEY not set in .env.local',
        testEmail 
      },
      { status: 400 }
    )
  }

  try {
    // Add to loops.so
    const createResponse = await fetch(
      `${LOOPS_API_URL}/contacts/create`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: testEmail,
        }),
      }
    )

    // Trigger event
    const eventResponse = await fetch(
      `${LOOPS_API_URL}/events/send`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: testEmail,
          eventName: 'paidCourse',
        }),
      }
    )

    const createOk = createResponse.ok
    const eventOk = eventResponse.ok

    return NextResponse.json({
      success: createOk && eventOk,
      testEmail,
      loopsContact: createOk ? '✅ Added to loops.so' : '❌ Failed',
      loopsEvent: eventOk ? '✅ paidCourse event sent' : '❌ Failed',
      message: createOk && eventOk 
        ? '🎉 SUCCESS! Check your loops.so dashboard to verify.'
        : '⚠️ Something failed. Check server logs.',
    })
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to connect to loops.so',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

