'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Overview() {
  const [stats, setStats] = useState({
    totalWorkflows: 0,
    activeWorkflows: 0,
    executionsToday: 0,
    successRate: 0
  })

  useEffect(() => {
    // Fetch stats when backend is ready
    setStats({
      totalWorkflows: 2,
      activeWorkflows: 2,
      executionsToday: 45,
      successRate: 0.98
    })
  }, [])

  const statCards = [
    { name: 'Total Workflows', value: stats.totalWorkflows, color: 'bg-blue-500' },
    { name: 'Active Workflows', value: stats.activeWorkflows, color: 'bg-green-500' },
    { name: 'Executions Today', value: stats.executionsToday, color: 'bg-purple-500' },
    { name: 'Success Rate', value: `${(stats.successRate * 100).toFixed(0)}%`, color: 'bg-yellow-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-md p-3`}>
                  <div className="h-6 w-6 text-white">📊</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100"
          >
            → Create New Workflow
          </Link>
          <Link
            href="/dashboard/workflows"
            className="block w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            → View All Workflows
          </Link>
          <Link
            href="/dashboard/activity"
            className="block w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            → Check Recent Activity
          </Link>
        </div>
      </div>
    </div>
  )
}