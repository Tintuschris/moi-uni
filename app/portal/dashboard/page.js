'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { Download, LogOut, FileText, GraduationCap, Book } from 'lucide-react'

export default function StudentDashboard() {
  const [student, setStudent] = useState(null)
  const [results, setResults] = useState([])
  const [thesis, setThesis] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchData = useCallback(async (studentId) => {
    try {
      // Fetch results
      const { data: resultsData, error: resultsError } = await supabase
        .from('results')
        .select('*')
        .eq('student_id', studentId)
        .order('year_of_study', { ascending: true })
        .order('semester', { ascending: true })

      if (resultsError) throw resultsError
      setResults(resultsData)

      // Fetch thesis for masters/phd students
      const { data: thesisData, error: thesisError } = await supabase
        .from('theses')
        .select('*')
        .eq('student_id', studentId)
        .single()

      if (!thesisError) {
        setThesis(thesisData)
      }

      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }, [])

  const checkSession = useCallback(async () => {
    const sessionId = sessionStorage.getItem('studentSession')
    if (!sessionId) {
      router.push('/portal')
      return
    }

    try {
      const { data: session, error: sessionError } = await supabase
        .from('student_sessions')
        .select('*, students(*)')
        .eq('id', sessionId)
        .eq('active', true)
        .single()

      if (sessionError || !session) {
        throw new Error('Invalid session')
      }

      setStudent(session.students)
      fetchData(session.students.id)
    } catch (error) {
      sessionStorage.removeItem('studentSession')
      router.push('/portal')
    }
  }, [router, fetchData])

  useEffect(() => {
    checkSession()
  }, [checkSession])

  const downloadFile = async (filePath, type) => {
    try {
      const bucket = type === 'result' ? 'results' : 
                    type === 'certificate' ? 'certificates' : 'theses'
      
      const { data, error } = await supabase.storage
        .from(bucket)
        .download(filePath)

      if (error) throw error

      const url = URL.createObjectURL(data)
      const a = document.createElement('a')
      a.href = url
      a.download = filePath.split('/').pop()
      document.body.appendChild(a)
      a.click()
      URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download error:', error)
    }
  }

  const handleLogout = async () => {
    const sessionId = sessionStorage.getItem('studentSession')
    if (sessionId) {
      await supabase
        .from('student_sessions')
        .update({ active: false })
        .eq('id', sessionId)
    }
    sessionStorage.removeItem('studentSession')
    router.push('/portal')
  }

  if (loading) {
    return <div>Loading...</div>
  }

  // Apply similar styling to portal dashboard inputs
  const inputClasses = "w-full p-3 rounded border border-green-400 bg-green-900/30 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-700">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {student?.photo_url && (
              <div className="flex-shrink-0">
                <Image
                  src={student.photo_url}
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            )}
            <div className="flex-grow text-white text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">
                {student?.first_name} {student?.last_name}
              </h1>
              <p className="text-white/80 mb-1">Registration: {student?.registration_number}</p>
              <p className="text-white/80 mb-1">Program: {student?.program_type}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        {/* Academic Records */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText />
            Academic Records
          </h2>
          
          {results.length > 0 ? (
            <div className="grid gap-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-4 rounded-lg flex justify-between items-center"
                >
                  <div className="text-white">
                    <p className="font-semibold">
                      Year {result.year_of_study}, Semester {result.semester}
                    </p>
                    <p className="text-sm text-white/70">
                      Academic Year: {result.academic_year}
                    </p>
                  </div>
                  <button
                    onClick={() => downloadFile(result.file_path, 'result')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/70">No academic records available.</p>
          )}
        </div>

        {/* Thesis Section (Masters/PhD only) */}
        {(student?.program_type === 'masters' || student?.program_type === 'phd') && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Book />
              Thesis
            </h2>
            
            {thesis ? (
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">{thesis.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-white/70">
                    Status: <span className="capitalize">{thesis.status}</span>
                  </p>
                  <button
                    onClick={() => downloadFile(thesis.file_path, 'thesis')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download Thesis
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-white/70">No thesis uploaded yet.</p>
            )}
          </div>
        )}

        {/* Certificates Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap />
            Certificates
          </h2>
          {certificate ? (
            <button
              onClick={() => downloadFile(certificate.file_path, 'certificate')}
              className="mt-3 text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
            >
              <span>Download Certificate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          ) : (
            <p className="text-gray-200">No certificate available</p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-300">
          <p>An ISO 9001:2015 Certified Institution</p>
          <p className="mt-2">2025 © Designed by DSL Systems</p>
        </div>
      </div>
    </div>
  )
}