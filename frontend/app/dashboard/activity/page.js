'use client'
import { useState, useEffect } from 'react'

export default function ActivityPage() {
  const [executions, setExecutions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExecutions()
    
    // Set up polling for real-time feel
    const interval = setInterval(fetchExecutions, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchExecutions = async () => {
    try {
      const response = await fetch('/api/executions')
      const data = await response.json()
      setExecutions(data.executions || [])
    } catch (error) {
      // Dummy data for UI testing
      setExecutions([
        {
          id: '1',
          workflow_name: 'Invoice Processing',
          status: 'success',
          started_at: new Date(Date.now() - 3600000).toISOString(),
          duration_ms: 45000,
          trigger: 'Email received'
        },
        {
          id: '2',
          workflow_name: 'Weekly Reports',
          status: 'running',
          started_at: new Date(Date.now() - 60000).toISOString(),
          duration_ms: null,
          trigger: 'Schedule'
        },
        {
          id: '3',
          workflow_name: 'Invoice Processing',
          status: 'failed',
          started_at: new Date(Date.now() - 7200000).toISOString(),
          duration_ms: 30000,
          trigger: 'Email received',
          error: 'Failed to connect to Google Drive'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <span className="text-green-500">✓</span>
      case 'failed':
        return <span className="text-red-500">✗</span>
      case 'running':
        return (
          <svg className="animate-spin h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )
    }
  }

  const formatDuration = (ms) => {
    if (!ms) return '-'
    const seconds = Math.floor(ms / 1000)
    return `${seconds}s`
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date
    
    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Activity</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {executions.length === 0 ? (
            <li className="px-6 py-12 text-center text-sm text-gray-500">
              No activity yet. Your workflow executions will appear here.
            </li>
          ) : (
            executions.map((execution) => (
              <li key={execution.id}>
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4">
                      {getStatusIcon(execution.status)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {execution.workflow_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {execution.trigger} • {formatTime(execution.started_at)}
                      </p>
                      {execution.error && (
                        <p className="text-sm text-red-600 mt-1">
                          {execution.error}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDuration(execution.duration_ms)}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}