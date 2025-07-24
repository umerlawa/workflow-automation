'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowBanner(false)
    // Enable all tracking cookies here
    enableAnalytics()
  }

  const acceptMinimal = () => {
    localStorage.setItem('cookieConsent', 'minimal')
    setShowBanner(false)
    // Only session cookies enabled
  }

  const enableAnalytics = () => {
    // Enable Google Analytics, Posthog, etc.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              🍪 We use cookies to enhance your experience
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We use cookies to keep you logged in and improve our services. 
              You can choose minimal cookies for essential functions only, or accept all cookies for the full experience with analytics to help us improve.
              {' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </p>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
                <h4 className="font-medium text-gray-900 mb-2">Cookie Types:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Essential (Always Active):</strong> Required for login and basic site functions
                  </li>
                  <li>
                    <strong>Analytics:</strong> Help us understand how you use our service to make improvements
                  </li>
                  <li>
                    <strong>Preferences:</strong> Remember your settings and choices
                  </li>
                </ul>
              </div>
            )}
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              {showDetails ? 'Hide details' : 'Show details'}
            </button>
          </div>
          
          <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptMinimal}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Minimal Cookies Only
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm animate-pulse"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}