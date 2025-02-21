import { useState, useEffect } from 'react'
import AssessmentLayout from '@/components/assessment/AssessmentLayout'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session
  useEffect(() => {
    const authStatus = sessionStorage.getItem('assessment-auth')
    setIsAuthenticated(authStatus === 'true')
    setIsLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ASSESSMENT_PASSWORD) {
      sessionStorage.setItem('assessment-auth', 'true')
      setIsAuthenticated(true)
    } else {
      alert('Invalid password')
      setPassword('')
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Econoco - eCommerce Plan</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your password to continue
            </p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <AssessmentLayout />
} 