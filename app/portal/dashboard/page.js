'use client'
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function StudentDashboard() {
  const [results, setResults] = useState([])
  const [certificate, setCertificate] = useState(null)
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchData = useCallback(async (studentId) => {
    try {
      const [resultsResponse, certificateResponse] = await Promise.all([
        supabase
          .from('results')
          .select('*')
          .eq('student_id', studentId)
          .order('year_of_study'),
        supabase
          .from('certificates')
          .select('*')
          .eq('student_id', studentId)
          .single()
      ])

      if (resultsResponse.error) throw resultsResponse.error
      setResults(resultsResponse.data || [])

      if (!certificateResponse.error) {
        setCertificate(certificateResponse.data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
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
      const { data, error } = await supabase.storage
        .from(type === 'result' ? 'results' : 'certificates')
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
                  width={128}
                  height={128}
                  className="rounded-xl object-cover shadow-lg border-2 border-white/20"
                  priority
                />
              </div>
            )}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {student?.first_name} {student?.last_name}
                  </h1>
                  <p className="text-gray-200">Reg No: {student?.registration_number}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-6 text-white">Your Results</h2>
          {results.length === 0 ? (
            <p className="text-gray-200">No results available yet.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((year) => {
                const yearResult = results.find(r => r.year_of_study === year)
                return (
                  <div key={year} className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-bold">Year {year}</h3>
                    {yearResult ? (
                      <>
                        <p className="text-gray-300">Academic Year: {yearResult.academic_year}</p>
                        <button 
                          onClick={() => downloadFile(yearResult.file_path, 'result')}
                          className="mt-3 text-blue-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                        >
                          <span>Download Result</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <p className="text-gray-400">No result available</p>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Certificate section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl mt-6">
          <h2 className="text-xl font-semibold mb-6 text-white">Certificate</h2>
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