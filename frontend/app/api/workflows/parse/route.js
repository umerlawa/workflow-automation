import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Forward to your Python backend when ready
    // const response = await fetch(`${process.env.BACKEND_URL}/api/v1/workflows/parse`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body)
    // })
    // return NextResponse.json(await response.json())
    
    // Temporary response
    return NextResponse.json({
      trigger: { type: 'email', description: 'Email trigger detected' },
      actions: [{ type: 'process', description: 'Process data' }]
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}