'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageSquare, Clock, TrendingUp } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [topEmail, setTopEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [bottomSubmitted, setBottomSubmitted] = useState(false)

  const handleSubmit = async (e, isBottom = false) => {
    e.preventDefault()
    console.log('Email submitted:', isBottom ? email : topEmail)
    
    if (isBottom) {
      setBottomSubmitted(true)
      setTimeout(() => setBottomSubmitted(false), 3000)
    } else {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const handleCookieSettings = () => {
    // Remove cookie consent from localStorage and reload page
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookieConsent');
      window.location.reload();
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Company Logo" 
                className="h-8 w-auto"
              />
            </div>
            <button 
              onClick={() => window.location.href = '/login'}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <Image 
              src="/logo.svg" 
              alt="Company Logo" 
              width={120} 
              height={40}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Turn Your Words Into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Workflows
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
              Describe what you want automated in plain English, and our AI builds it in{" "}
              <span className="font-semibold text-blue-600">5 minutes</span> instead of{" "}
              <span className="font-semibold text-gray-900">2 hours</span>
            </p>

            {/* Email Signup */}
            <form onSubmit={(e) => handleSubmit(e, false)} className="mx-auto mt-10 max-w-md">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  value={topEmail}
                  onChange={(e) => setTopEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="flex-1 h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  required
                />
                <Link
                  href="/login"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg inline-block text-center"
                >
                  Get Started
                </Link>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                By registering, you agree to our{' '}
                <Link href="/tos" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-500">Join 50+ businesses already automating</p>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Automation Made Simple</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Stop spending hours on repetitive tasks. Let AI handle the heavy lifting.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative overflow-hidden border-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
              <div className="relative p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Natural Language</h3>
                <p className="mt-2 text-base text-gray-600">
                  Just describe what you want automated in plain English. No coding or technical jargon required.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative overflow-hidden border-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50" />
              <div className="relative p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">5 Minute Setup</h3>
                <p className="mt-2 text-base text-gray-600">
                  No technical knowledge needed. Our AI understands your requirements and builds workflows instantly.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative overflow-hidden border-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50" />
              <div className="relative p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Save 10+ Hours</h3>
                <p className="mt-2 text-base text-gray-600">
                  Per week on repetitive tasks. Focus on what matters while AI handles the routine work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Choose the plan that fits your automation needs
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Free Plan */}
            <div className="relative border-2 border-gray-200 rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold">Free</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">3 workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">100 uses/month</span>
                </li>
              </ul>
              <button className="w-full mt-6 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Starter Plan */}
            <div className="relative border-2 border-blue-200 rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold">Starter</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">5,000 uses/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
              <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200">
                Choose Starter
              </button>
            </div>

            {/* Growth Plan */}
            <div className="relative border-2 border-indigo-200 rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold">Growth</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">25,000 uses/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Advanced integrations</span>
                </li>
              </ul>
              <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200">
                Choose Growth
              </button>
            </div>

            {/* Scale Plan */}
            <div className="relative border-2 border-purple-200 rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold">Scale</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$599</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">100,000 uses/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">24/7 phone support</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Dedicated account manager</span>
                </li>
              </ul>
              <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-200">
                Choose Scale
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to automate your workflows?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Join thousands of businesses saving time with AI-powered automation
          </p>
          <form onSubmit={(e) => handleSubmit(e, true)} className="mx-auto mt-8 max-w-md">
            <div className="flex gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-1 h-12 px-4 text-base bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600" 
                required
              />
              <button 
                type="submit"
                className="h-12 px-8 bg-white text-blue-600 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200"
              >
                {bottomSubmitted ? '✓ Thanks!' : 'Get Started'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-4">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/tos" className="hover:text-gray-700">
                Terms of Service
              </Link>
              <Link href="/compliance" className="hover:text-gray-700">
                Compliance
              </Link>
              <button 
                onClick={handleCookieSettings}
                className="hover:text-gray-700 cursor-pointer"
              >
                Cookie Settings
              </button>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Mohenara LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}