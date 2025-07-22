'use client'
import { useState, useEffect } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])

  const showToast = (message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 5000)
  }

  return { toasts, showToast }
}

export function ToastContainer({ toasts }) {
  return (
    <div className="fixed bottom-0 right-0 p-6 space-y-4 z-50">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`px-6 py-4 rounded-lg shadow-lg text-white ${
            toast.type === 'success' ? 'bg-green-500' : 
            toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}