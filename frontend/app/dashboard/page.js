// Update app/dashboard/page.js to redirect to overview
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardRedirect() {
 const router = useRouter()
 
 useEffect(() => {
   router.push('/dashboard/overview')
 }, [])
 
 return null
}