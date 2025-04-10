'use client'

import { useEffect } from 'react'
import { AlertOctagon } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-red-100 p-3">
                <AlertOctagon className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Critical Error</h1>
            <p className="text-gray-600 mb-6">
              A critical error occurred while rendering the application.
            </p>
            {error.digest && (
              <p className="text-xs bg-gray-100 p-2 rounded mb-4">
                Error ID: {error.digest}
              </p>
            )}
            <button
              onClick={reset}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
