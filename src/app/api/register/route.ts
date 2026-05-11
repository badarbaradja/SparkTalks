import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('=== REGISTER API CALLED ===')
    console.log('Body received:', JSON.stringify({
      ...body,
      paymentProof: body.paymentProof ? '[FILE PRESENT]' : null
    }))
    
    const gasUrl = process.env.NEXT_PUBLIC_GAS_URL
    console.log('GAS URL:', gasUrl ? 'PRESENT' : 'MISSING')
    
    if (!gasUrl) {
      return NextResponse.json({ error: 'GAS URL not configured' }, { status: 500 })
    }

    console.log('Sending to GAS...')
    const response = await fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      redirect: 'follow',
    })

    console.log('GAS response status:', response.status)
    const result = await response.text()
    console.log('GAS response body:', result)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('=== REGISTER API ERROR ===', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
