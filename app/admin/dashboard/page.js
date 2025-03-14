'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Download, Search, Filter } from 'lucide-react'

export default function AdminDashboard() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [adminInfo, setAdminInfo] = useState(null)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
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
    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        results (*),
        theses (*)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching students:', error)
      return
    }

    setStudents(data)
    setLoading(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const downloadFile = async (path, type) => {
    const { data, error } = await supabase.storage.from('uploads').download(path)
    if (error) {
      console.error('Error downloading file:', error)
      return
    }

    const url = URL.createObjectURL(data)
    const a = document.createElement('a')
    a.href = url
    a.download = `${type}-${path.split('/').pop()}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const filteredStudents = students.filter(student => {
    const matchesSearch = (
      student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.registration_number.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const matchesFilter = filter === 'all' || student.program_type === filter

    return matchesSearch && matchesFilter
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-700 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <div className="space-x-4">
              <button
                onClick={() => router.push('/admin/upload')}
                className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
              >
                Upload Results
              </button>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-6 flex gap-4">
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-3 rounded border border-green-400 bg-green-900/30 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 rounded border border-green-400 bg-green-900/30 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            >
              <option value="all">All Programs</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          {/* Students List */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {student.first_name} {student.last_name}
                    </h2>
                    <p className="text-white/70">Reg: {student.registration_number}</p>
                    <p className="text-white/70 capitalize">Program: {student.program_type}</p>
                  </div>
                  <button
                    onClick={() => router.push(`/admin/students/${student.id}`)}
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}