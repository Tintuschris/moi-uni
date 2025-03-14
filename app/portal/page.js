"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function StudentPortal() {
  const [username, setUsername] = useState('')
  const [regNumber, setRegNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const sessionId = sessionStorage.getItem('studentSession')
      if (sessionId) {
        router.push('/portal/dashboard')
      }
    }
    checkSession()
  }, [router])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data: student, error: studentError } = await supabase
        .from('students')
        .select('*')
        .ilike('username', username)
        .eq('registration_number', regNumber)
        .single()

      if (studentError) throw studentError

      const { data: sessionData, error: sessionError } = await supabase
        .from('student_sessions')
        .insert({
          student_id: student.id,
          active: true
        })
        .select()
        .single()

      if (sessionError) throw sessionError

      sessionStorage.setItem('studentSession', sessionData.id)
      router.push('/portal/dashboard')
    } catch (error) {
      setError('Authentication failed')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6">
      <div className="w-full max-w-md bg-green-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <Image 
              src="/moi-logo.png" 
              alt="Logo" 
              width={80} 
              height={80}
              className="w-20 h-20 object-contain" 
            />
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-white text-sm font-medium mb-2">
                  Reg. Number
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-green-400 bg-green-900/30 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your registration number"
                />
              </div>

              <div>
                <label htmlFor="regNumber" className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="regNumber"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-green-400 bg-green-900/30 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-green-500 border-green-400 rounded focus:ring-2 focus:ring-green-400"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 text-white bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-green-300 hover:text-green-200 transition-colors duration-200">
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="bg-green-800 px-8 py-6 space-y-3">
          <div className="text-center text-sm text-white font-medium">
            An ISO 9001:2015 Certified Institution
          </div>
          <div className="text-center text-sm text-white">
            2025 © Designed by DSL Systems
          </div>
        </div>
      </div>
    </div>
  )
}