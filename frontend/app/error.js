'use client'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-4">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
}