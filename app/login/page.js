'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) setMessage(error.message)
    else setMessage('Check your email!')
  }

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setMessage(error.message)
    else setMessage('Logged in!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        
        <div className="flex gap-4">
          <button 
            onClick={handleSignIn}
            className="flex-1 bg-blue-600 text-white p-2 rounded"
          >
            Sign In
          </button>
          <button 
            onClick={handleSignUp}
            className="flex-1 bg-gray-600 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </div>
        
        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </div>
  )
}