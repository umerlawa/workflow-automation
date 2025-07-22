'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { apiCall } from '@/lib/api-client'

export default function WorkflowBuilder() {
  const [description, setDescription] = useState('')
  const [workflowName, setWorkflowName] = useState('')
  const [loading, setLoading] = useState(false)
  const [workflow, setWorkflow] = useState(null)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) router.push('/login')
  }

  const templates = [
    { 
      title: "Invoice Processing",
      description: "When I receive an email with 'Invoice', save attachment to Drive and notify me"
    },
    { 
      title: "Weekly Reports",
      description: "Every Monday, compile last week's data and email summary to team"
    },
    { 
      title: "Customer Onboarding",
      description: "When new signup form submitted, create folders and send welcome email"
    }
  ]

  const handleGenerate = async () => {
    if (!description.trim()) {
      setError('Please describe your workflow')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const data = await apiCall('/api/workflows/parse', {
        method: 'POST',
        body: JSON.stringify({ description })
      })
      setWorkflow(data)
    } catch (err) {
      // For now, show a dummy workflow for UI testing
      setWorkflow({
        trigger: { type: 'email', description: 'Email received' },
        actions: [
          { type: 'save', description: 'Save to Drive' },
          { type: 'notify', description: 'Send notification' }
        ]
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!workflowName.trim()) {
      setError('Please name your workflow')
      return
    }

    setLoading(true)
    try {
      await apiCall('/api/workflows', {
        method: 'POST',
        body: JSON.stringify({
          name: workflowName,
          description,
          ...workflow
        })
      })
      router.push('/dashboard/workflows')
    } catch (err) {
      setError('Failed to save workflow')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Workflow</h1>

      {/* Templates */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Start with a template or describe your own:</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {templates.map((template, idx) => (
            <button
              key={idx}
              onClick={() => setDescription(template.description)}
              className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 text-left transition-colors"
            >
              <h3 className="font-medium mb-1">{template.title}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <label className="block text-sm font-medium mb-2">
          Describe your workflow in plain English:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Example: When I receive an email with 'Invoice' in the subject, extract the PDF attachment, save it to my Google Drive in the 'Invoices' folder, and notify me on Slack"
          className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading || workflow}
        />
        
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        {!workflow && (
          <button
            onClick={handleGenerate}
            disabled={loading || !description.trim()}
            className="mt-4 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 font-medium"
          >
            {loading ? 'Analyzing...' : 'Generate Workflow'}
          </button>
        )}
      </div>

      {/* Workflow Preview */}
      {workflow && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Your Workflow</h3>
          
          <div className="flex items-center space-x-4 overflow-x-auto pb-4">
            {/* Trigger */}
            <div className="flex-shrink-0 p-4 bg-blue-100 rounded-lg border-2 border-blue-300 min-w-[150px]">
              <div className="text-blue-600 font-medium">Trigger</div>
              <div className="text-sm mt-1">{workflow.trigger.description}</div>
            </div>

            {/* Arrow */}
            <div className="text-gray-400">→</div>

            {/* Actions */}
            {workflow.actions.map((action, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-shrink-0 p-4 bg-green-100 rounded-lg border-2 border-green-300 min-w-[150px]">
                  <div className="text-green-600 font-medium">Action {idx + 1}</div>
                  <div className="text-sm mt-1">{action.description}</div>
                </div>
                {idx < workflow.actions.length - 1 && <div className="text-gray-400">→</div>}
              </React.Fragment>
            ))}
          </div>

          {/* Save Section */}
          <div className="mt-6 pt-6 border-t">
            <label className="block text-sm font-medium mb-2">
              Name your workflow:
            </label>
            <input
              type="text"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              placeholder="e.g., Invoice Processing Automation"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleSave}
                disabled={loading || !workflowName.trim()}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 font-medium"
              >
                {loading ? 'Saving...' : 'Save Workflow'}
              </button>
              <button
                onClick={() => {
                  setWorkflow(null)
                  setWorkflowName('')
                  setDescription('')
                }}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
