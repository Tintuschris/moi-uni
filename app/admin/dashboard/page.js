'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [adminInfo, setAdminInfo] = useState(null)
  const router = useRouter()

  useEffect(() => {
    checkAdmin()
    fetchStudents()
  }, [])

  const checkAdmin = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/admin')
      return
    }

    const { data: adminData } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (!adminData) {
      router.push('/admin')
      return
    }

    setAdminInfo(adminData)
  }

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('students')
        .select(`
          *,
          results (
            id,
            semester,
            academic_year,
            uploaded_at
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setStudents(data || [])
    } catch (error) {
      console.error('Error fetching students:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Admin Dashboard
              </h1>
              <p className="text-gray-200">Welcome, {adminInfo?.name}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => router.push('/admin/upload')}
                className="bg-white text-green-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Upload Results
              </button>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Students Table Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl overflow-hidden">
          <h2 className="text-xl font-semibold mb-6 text-white">Students Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200/20">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Reg. Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Results</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/20">
                {students.map((student) => (
                  <tr key={student.id} className="text-white hover:bg-white/5">
                    <td className="px-6 py-4 whitespace-nowrap">{student.first_name} {student.last_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.registration_number}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{student.results.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => router.push(`/admin/students/${student.id}`)}
                        className="text-blue-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}