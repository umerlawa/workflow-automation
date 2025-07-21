// app/dashboard/page.js
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

function WorkflowVisualization({ workflow }) {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Generated Workflow</h3>
      <div className="flex items-center space-x-4 overflow-x-auto">
        {/* Trigger */}
        <div className="flex-shrink-0 p-4 bg-blue-100 rounded-lg border-2 border-blue-300">
          <div className="text-blue-600 mb-2">
            {/* mail icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-sm font-medium">Trigger</p>
          <p className="text-xs text-gray-600 mt-1">{workflow.trigger.description}</p>
        </div>

        {/* Arrow */}
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>

        {/* Actions */}
        {workflow.actions.map((action, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-shrink-0 p-4 bg-green-100 rounded-lg border-2 border-green-300">
              <div className="text-green-600 mb-2">
                {/* action icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-sm font-medium">Action {idx + 1}</p>
              <p className="text-xs text-gray-600 mt-1">{action.description}</p>
            </div>
            {idx < workflow.actions.length - 1 && (
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <Button className="bg-blue-600 text-white">Save Workflow</Button>
        <Button variant="outline">Edit</Button>
      </div>
    </div>
  )
}

export default function Page() {
  const router = useRouter()
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [workflow, setWorkflow] = useState(null)
  const [error, setError] = useState('')

  // Route protection
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) router.push('/login')
    }
    checkUser()
  }, [router])

  const exampleTemplates = [
    "When I receive an email with 'Invoice', save it to client folder",
    "Every Monday morning, send me a summary of last week's tasks",
    "When a form is submitted, add the data to a spreadsheet",
  ]

  const handleGenerate = async () => {
    if (!description.trim()) return
    setLoading(true)
    setError('')
    setWorkflow(null)

    try {
      const res = await fetch('/api/workflows/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      })
      if (!res.ok) throw new Error('Failed to generate workflow')
      const data = await res.json()
      setWorkflow(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 space-y-8">
      {/* Top Section */}
      <div className="space-y-4">
        <textarea
          rows={4}
          className="w-full p-4 border rounded-lg resize-none"
          placeholder="Describe your workflow in plain English..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />

        <Button
          onClick={handleGenerate}
          disabled={!description.trim() || loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? 'Analyzing your workflow...' : 'Generate Workflow'}
        </Button>

        {/* Styled Error Block */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        <div className="flex gap-2">
          {exampleTemplates.map((t, i) => (
            <button
              key={i}
              onClick={() => setDescription(t)}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Loading State */}
      {loading && (
        <div className="mt-8 p-8 bg-white rounded-lg shadow text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Analyzing your workflow...</p>
          <p className="text-sm text-gray-400 mt-2">This usually takes 5–10 seconds</p>
        </div>
      )}

      {/* Visualization */}
      {workflow && <WorkflowVisualization workflow={workflow} />}
    </div>
  )
}
