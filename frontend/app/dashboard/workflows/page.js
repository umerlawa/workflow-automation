'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { apiCall } from '@/lib/api-client'

export default function WorkflowsList() {
  const [workflows, setWorkflows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWorkflows()
  }, [])

  const fetchWorkflows = async () => {
    try {
      const data = await apiCall('/api/workflows')
      setWorkflows(data.workflows || [])
    } catch (error) {
      // For UI testing, use dummy data
      setWorkflows([
        {
          id: '1',
          name: 'Invoice Processing',
          description: 'Process invoices from email',
          status: 'active',
          created_at: new Date().toISOString(),
          executions: 45,
          success_rate: 0.98
        },
        {
          id: '2',
          name: 'Weekly Reports',
          description: 'Generate and send weekly reports',
          status: 'active',
          created_at: new Date().toISOString(),
          executions: 12,
          success_rate: 1.0
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const toggleWorkflow = async (id, currentStatus) => {
    // Update UI optimistically
    setWorkflows(workflows.map(w => 
      w.id === id ? { ...w, status: currentStatus === 'active' ? 'paused' : 'active' } : w
    ))
    
    // Call backend
    try {
      await apiCall(`/api/workflows/${id}/toggle`, {
        method: 'POST',
        body: JSON.stringify({ status: currentStatus === 'active' ? 'paused' : 'active' })
      })
    } catch (error) {
      // Revert on error
      fetchWorkflows()
    }
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
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Workflows</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your automated workflows
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Create workflow
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Executions
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Success Rate
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {workflows.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-3 py-8 text-center text-sm text-gray-500">
                        No workflows yet. Create your first workflow to get started.
                      </td>
                    </tr>
                  ) : (
                    workflows.map((workflow) => (
                      <tr key={workflow.id}>
                        <td className="whitespace-nowrap px-3 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {workflow.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {workflow.description}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            workflow.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {workflow.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {workflow.executions}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {(workflow.success_rate * 100).toFixed(0)}%
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button
                            onClick={() => toggleWorkflow(workflow.id, workflow.status)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            {workflow.status === 'active' ? 'Pause' : 'Resume'}
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
