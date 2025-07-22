import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/workflows`,
      { headers: { 'Authorization': request.headers.get('Authorization') } }
    )
    if (!response.ok) throw new Error('Backend error')
    return NextResponse.json(await response.json())
  } catch {
    return NextResponse.json({ workflows: [] })  // fallback
  }
}
