'use client'
import { useEffect, useState, use } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function StudentDetails({ params }) {
  const studentId = use(params).id
  const [student, setStudent] = useState(null)
  const [results, setResults] = useState([])
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editedStudent, setEditedStudent] = useState(null)
  const [newDocument, setNewDocument] = useState(null)
  const [uploadType, setUploadType] = useState('result')
  const router = useRouter()

  useEffect(() => {
    fetchStudentDetails()
  }, [studentId])

  const fetchStudentDetails = async () => {
    try {
      const { data: studentData, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('id', studentId)
        .single()

      if (studentError) throw studentError

      const { data: resultsData, error: resultsError } = await supabase
        .from('results')
        .select('*')
        .eq('student_id', studentId)
        .order('year_of_study', { ascending: true })

      if (resultsError) throw resultsError

      const { data: certificatesData, error: certificatesError } = await supabase
        .from('certificates')
        .select('*')
        .eq('student_id', studentId)
        .order('uploaded_at', { ascending: false })

      if (certificatesError) throw certificatesError

      setStudent(studentData)
      setEditedStudent(studentData)
      setResults(resultsData)
      setCertificates(certificatesData)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateStudent = async () => {
    try {
      const { error } = await supabase
        .from('students')
        .update({
          first_name: editedStudent.first_name,
          last_name: editedStudent.last_name,
          registration_number: editedStudent.registration_number,
        })
        .eq('id', studentId)

      if (error) throw error

      setStudent(editedStudent)
      setIsEditing(false)
      alert('Student details updated successfully!')
    } catch (error) {
      console.error('Error updating student:', error)
      alert('Error updating student details')
    }
  }

  const handleUploadDocument = async (e) => {
    e.preventDefault()
    if (!newDocument?.file) return

    try {
      const fileExt = newDocument.file.name.split('.').pop()
      const fileName = `${studentId}/${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from(uploadType === 'result' ? 'results' : 'certificates')
        .upload(fileName, newDocument.file)

      if (uploadError) throw uploadError

      if (uploadType === 'result') {
        const { error: dbError } = await supabase
          .from('results')
          .insert({
            student_id: studentId,
            file_path: fileName,
            year_of_study: parseInt(newDocument.yearOfStudy),
            semester: newDocument.semester,
            academic_year: newDocument.academicYear
          })

        if (dbError) throw dbError
      } else {
        const { error: dbError } = await supabase
          .from('certificates')
          .insert({
            student_id: studentId,
            file_path: fileName,
            uploaded_at: new Date().toISOString()
          })

        if (dbError) throw dbError
      }

      setNewDocument(null)
      fetchStudentDetails()
      alert('Document uploaded successfully!')
    } catch (error) {
      console.error('Error uploading document:', error)
      alert('Error uploading document')
    }
  }

  const handleDeleteDocument = async (id, type) => {
    if (!confirm('Are you sure you want to delete this document?')) return

    try {
      const { error } = await supabase
        .from(type === 'result' ? 'results' : 'certificates')
        .delete()
        .eq('id', id)

      if (error) throw error

      fetchStudentDetails()
      alert('Document deleted successfully!')
    } catch (error) {
      console.error('Error deleting document:', error)
      alert('Error deleting document')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-800 to-green-700">
        <div className="text-xl text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-700 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              {student.photo_url && (
                <Image
                  src={student.photo_url}
                  alt="Student"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              )}
              <div>
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editedStudent.first_name}
                      onChange={(e) => setEditedStudent({...editedStudent, first_name: e.target.value})}
                      className="block w-full p-2 rounded bg-white/10 text-white"
                    />
                    <input
                      type="text"
                      value={editedStudent.last_name}
                      onChange={(e) => setEditedStudent({...editedStudent, last_name: e.target.value})}
                      className="block w-full p-2 rounded bg-white/10 text-white"
                    />
                    <input
                      type="text"
                      value={editedStudent.registration_number}
                      onChange={(e) => setEditedStudent({...editedStudent, registration_number: e.target.value})}
                      className="block w-full p-2 rounded bg-white/10 text-white"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleUpdateStudent}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false)
                          setEditedStudent(student)
                        }}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold text-white mb-2">
                      {student.first_name} {student.last_name}
                    </h1>
                    <p className="text-gray-200">
                      Registration: {student.registration_number}
                    </p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Edit Details
                    </button>
                  </>
                )}
              </div>
            </div>
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        {/* Upload New Document Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Upload New Document</h2>
          <div className="space-y-4">
            <select
              value={uploadType}
              onChange={(e) => setUploadType(e.target.value)}
              className="w-full p-3 rounded bg-white/10 text-white border border-white/20"
            >
              <option value="result">Result/Transcript</option>
              <option value="certificate">Certificate</option>
            </select>

            {uploadType === 'result' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  value={newDocument?.yearOfStudy || ''}
                  onChange={(e) => setNewDocument({...newDocument, yearOfStudy: e.target.value})}
                  className="p-3 rounded bg-white/10 text-white border border-white/20"
                >
                  <option value="">Select Year</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
                <input
                  type="text"
                  placeholder="Semester"
                  value={newDocument?.semester || ''}
                  onChange={(e) => setNewDocument({...newDocument, semester: e.target.value})}
                  className="p-3 rounded bg-white/10 text-white border border-white/20"
                />
                <input
                  type="text"
                  placeholder="Academic Year"
                  value={newDocument?.academicYear || ''}
                  onChange={(e) => setNewDocument({...newDocument, academicYear: e.target.value})}
                  className="p-3 rounded bg-white/10 text-white border border-white/20"
                />
              </div>
            )}

            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setNewDocument({...newDocument, file: e.target.files[0]})}
              className="w-full p-3 rounded bg-white/10 text-white border border-white/20"
            />

            <button
              onClick={handleUploadDocument}
              className="w-full p-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Upload Document
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Results History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-white">Year {result.year_of_study}</h3>
                    <p className="text-gray-300">Semester: {result.semester}</p>
                    <p className="text-gray-300">Academic Year: {result.academic_year}</p>
                    <p className="text-sm text-gray-400">
                      Uploaded: {new Date(result.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteDocument(result.id, 'result')}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-white">Certificate</h3>
                    <p className="text-sm text-gray-400">
                      Uploaded: {new Date(cert.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteDocument(cert.id, 'certificate')}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
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