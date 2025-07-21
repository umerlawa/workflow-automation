// app/dashboard/layout.js
import Image from 'next/image'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={100}
                height={33}
                priority
              />
            </div>
            {/* Centered title */}
            <div className="flex-1 text-center">
              <h1 className="text-xl font-semibold">Workflow Automation</h1>
            </div>
            {/* Sign out button */}
            <button className="text-sm text-gray-500">Sign Out</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
