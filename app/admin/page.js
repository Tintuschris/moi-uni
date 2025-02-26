'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/admin/dashboard')
      }
    })

    return () => {
      if (authListener?.unsubscribe) {
        authListener.unsubscribe()
      }
    }
  }, [router])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (signInError) throw signInError

      if (data?.session) {
        router.push('/admin/dashboard')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-800 to-green-700">
      <div className="max-w-md w-full p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl">
        <div>
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Admin Login
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-100 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}