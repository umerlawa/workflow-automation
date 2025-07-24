import Link from 'next/link'

export default function Support() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Support</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          We're here to help! Reach out to our support team:
        </p>
        <p className="text-gray-600">📧 Email: admin@reasonrail.com</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">How do I create my first workflow?</h3>
            <p className="text-gray-600 text-sm mt-1">
              Navigate to the Create page and describe your workflow in plain English. Our AI will generate the workflow automatically based on your description.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
            <div>
              <h3 className="font-medium">Sign up for an account</h3>
              <p className="text-gray-600 text-sm">Create your free account to get started with workflow automation.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
            <div>
              <h3 className="font-medium">Connect your tools</h3>
              <p className="text-gray-600 text-sm">Link your favorite business applications and services.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
            <div>
              <h3 className="font-medium">Create your first workflow</h3>
              <p className="text-gray-600 text-sm">Describe what you want to automate and watch the magic happen.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Need More Help?</h2>
        <p className="text-blue-800 mb-4">
          Can't find what you're looking for? Our support team is ready to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="mailto:admin@reasonrail.com" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
          >
            Email Support
          </a>
        </div>
      </div>
      
      <div className="mt-8">
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  )
}