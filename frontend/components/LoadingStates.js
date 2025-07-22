export function TableSkeleton({ rows = 5 }) {
    return (
      <div className="animate-pulse">
        {[...Array(rows)].map((_, i) => (
          <div key={i} className="border-b border-gray-200 py-4">
            <div className="flex space-x-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export function CardSkeleton() {
    return (
      <div className="animate-pulse bg-white p-6 rounded-lg shadow">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    )
  }