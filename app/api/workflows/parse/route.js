// app/api/workflows/parse/route.js
import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

export async function POST(request) {
  try {
    const { description } = await request.json()
    let data

    if (BACKEND_URL) {
      // Real backend
      const res = await fetch(`${BACKEND_URL}/api/v1/workflows/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      })
      if (!res.ok) throw new Error('Backend parse failed')
      data = await res.json()
    } else {
      // Mock data fallback
      data = {
        trigger: {
          type: 'email',
          description: `Mock trigger from: "${description.slice(0, 50)}..."`,
        },
        actions: [
          { type: 'extract', description: 'Extract relevant data' },
          { type: 'save',    description: 'Save to specified location' },
        ],
      }
      // Simulate processing delay
      await new Promise((r) => setTimeout(r, 1000))
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Failed to parse workflow' },
      { status: 500 }
    )
  }
}
