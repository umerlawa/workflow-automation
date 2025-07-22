import { supabase } from './supabase'

export async function apiCall(endpoint, options = {}) {
  const { data: { session } } = await supabase.auth.getSession()
  
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': session ? `Bearer ${session.access_token}` : '',
      ...options.headers
    }
  })
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  
  return response.json()
}