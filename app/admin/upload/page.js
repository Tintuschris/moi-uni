'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function UploadResults() {
  const [mode, setMode] = useState('new')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [students, setStudents] = useState([{
    id: null, // null for new students, actual id for existing
    firstName: '',
    lastName: '',
    registrationNumber: '',
    photo: null,
    photoPreview: null,
    documents: []
  }])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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
    }
  }

  useEffect(() => {
    checkAdmin()
  }, [])

  useEffect(() => {
    if (searchTerm.length >= 3) {
      searchStudents()
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  const searchStudents = async () => {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .or(`first_name.ilike.%${searchTerm}%,last_name.ilike.%${searchTerm}%,registration_number.ilike.%${searchTerm}%`)
      .limit(5)

    if (!error) {
      setSearchResults(data)
    }
  }

  const handleSelectExistingStudent = (student) => {
    setStudents(prev => [...prev, {
      id: student.id,
      firstName: student.first_name,
      lastName: student.last_name,
      registrationNumber: student.registration_number,
      photo: null,
      photoPreview: student.photo_url,
      documents: []
    }])
    setSearchTerm('')
    setSearchResults([])
  }

  const addNewStudent = () => {
    setStudents(prev => [...prev, {
      id: null,
      firstName: '',
      lastName: '',
      registrationNumber: '',
      photo: null,
      photoPreview: null,
      documents: []
    }])
  }

  const removeStudent = (index) => {
    setStudents(prev => prev.filter((_, i) => i !== index))
  }

  const updateStudent = (index, field, value) => {
    setStudents(prev => prev.map((student, i) => 
      i === index ? { ...student, [field]: value } : student
    ))
  }

  const handlePhotoChange = (index, e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        updateStudent(index, 'photo', file)
        updateStudent(index, 'photoPreview', reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const addDocument = (studentIndex) => {
    setStudents(prev => prev.map((student, i) => 
      i === studentIndex 
        ? {
            ...student,
            documents: [...student.documents, {
              file: null,
              yearOfStudy: '1',
              semester: '',
              academicYear: '',
              type: 'result'
            }]
          }
        : student
    ))
  }

  const removeDocument = (studentIndex, docIndex) => {
    setStudents(prev => prev.map((student, i) => 
      i === studentIndex 
        ? {
            ...student,
            documents: student.documents.filter((_, j) => j !== docIndex)
          }
        : student
    ))
  }

  const updateDocument = (studentIndex, docIndex, field, value) => {
    setStudents(prev => prev.map((student, i) => 
      i === studentIndex 
        ? {
            ...student,
            documents: student.documents.map((doc, j) => 
              j === docIndex ? { ...doc, [field]: value } : doc
            )
          }
        : student
    ))
  }

  const handleUpload = async () => {
    setLoading(true)
    try {
      for (const student of students) {
        let studentId = student.id

        if (!studentId) {
          // Create new student
          if (student.photo) {
            const photoExt = student.photo.name.split('.').pop()
            const photoName = `${Date.now()}.${photoExt}`
            
            const { error: photoError } = await supabase.storage
              .from('passport_photos')
              .upload(photoName, student.photo)

            if (photoError) throw photoError

            const { data: { publicUrl: photoUrl } } = supabase.storage
              .from('passport_photos')
              .getPublicUrl(photoName)

            const { data: newStudent, error: studentError } = await supabase
              .from('students')
              .insert({
                first_name: student.firstName,
                last_name: student.lastName,
                registration_number: student.registrationNumber,
                username: (student.firstName + student.lastName).toLowerCase(),
                photo_url: photoUrl
              })
              .select()
              .single()

            if (studentError) throw studentError
            studentId = newStudent.id
          }
        }

        // Upload all documents for this student
        for (const doc of student.documents) {
          if (!doc.file) continue

          const fileExt = doc.file.name.split('.').pop()
          const fileName = `${studentId}/year${doc.yearOfStudy}/${Date.now()}.${fileExt}`

          const { error: uploadError } = await supabase.storage
            .from(doc.type === 'result' ? 'results' : 'certificates')
            .upload(fileName, doc.file)

          if (uploadError) throw uploadError

          if (doc.type === 'result') {
            await supabase
              .from('results')
              .insert({
                student_id: studentId,
                file_path: fileName,
                year_of_study: parseInt(doc.yearOfStudy),
                semester: doc.semester,
                academic_year: doc.academicYear
              })
          } else {
            await supabase
              .from('certificates')
              .insert({
                student_id: studentId,
                file_path: fileName,
                uploaded_at: new Date().toISOString()
              })
          }
        }
      }

      router.push('/admin/dashboard')
    } catch (error) {
      console.error('Upload error:', error)
      alert('Error uploading documents. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-700 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Bulk Upload Documents</h1>
            <div className="space-x-4">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
              >
                Back to Dashboard
              </button>
            </div>
          </div>

          {/* Search for existing students */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search existing student..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded bg-white/10 border border-white/20 text-white"
            />
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white/10 rounded p-2">
                {searchResults.map(student => (
                  <div
                    key={student.id}
                    onClick={() => handleSelectExistingStudent(student)}
                    className="p-2 hover:bg-white/10 rounded cursor-pointer text-white"
                  >
                    {student.first_name} {student.last_name} ({student.registration_number})
                  </div>
                ))}
              </div>
            )}
          </div>
            {/* Student entries */}
            {students.map((student, studentIndex) => (
              <div key={studentIndex} className="mb-8 bg-white/5 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">
                    {student.id ? `${student.firstName} ${student.lastName}` : `New Student #${studentIndex + 1}`}
                  </h2>
                  <button
                    onClick={() => removeStudent(studentIndex)}
                    className="px-3 py-1 text-red-400 hover:text-red-300 bg-white/10 rounded"
                  >
                    Remove
                  </button>
                </div>

                {!student.id && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={student.firstName}
                      onChange={(e) => updateStudent(studentIndex, 'firstName', e.target.value)}
                      className="p-3 rounded bg-white/10 border border-white/20 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={student.lastName}
                      onChange={(e) => updateStudent(studentIndex, 'lastName', e.target.value)}
                      className="p-3 rounded bg-white/10 border border-white/20 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Registration Number"
                      value={student.registrationNumber}
                      onChange={(e) => updateStudent(studentIndex, 'registrationNumber', e.target.value)}
                      className="p-3 rounded bg-white/10 border border-white/20 text-white"
                    />
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoChange(studentIndex, e)}
                        className="p-3 rounded bg-white/10 border border-white/20 text-white"
                      />
                      {student.photoPreview && (
                        <Image
                          src={student.photoPreview}
                          alt="Preview"
                          width={100}
                          height={100}
                          className="mt-2 rounded"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Documents section */}
                <div className="space-y-4">
                  {student.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="bg-white/5 p-4 rounded">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-white font-medium">Document #{docIndex + 1}</h3>
                        <button
                          onClick={() => removeDocument(studentIndex, docIndex)}
                          className="px-2 py-1 text-red-400 hover:text-red-300 bg-white/10 rounded"
                        >
                          Remove Document
                        </button>
                      </div>
                    
                      <select
                        value={doc.type}
                        onChange={(e) => updateDocument(studentIndex, docIndex, 'type', e.target.value)}
                        className="w-full p-2 mb-2 rounded bg-white/10 text-white"
                      >
                        <option value="result">Result/Transcript</option>
                        <option value="certificate">Certificate</option>
                      </select>

                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => updateDocument(studentIndex, docIndex, 'file', e.target.files[0])}
                        className="w-full p-2 mb-2 rounded bg-white/10 text-white"
                      />

                      {doc.type === 'result' && (
                        <>
                          <select
                            value={doc.yearOfStudy}
                            onChange={(e) => updateDocument(studentIndex, docIndex, 'yearOfStudy', e.target.value)}
                            className="w-full p-2 mb-2 rounded bg-white/10 text-white"
                          >
                            <option value="1">First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                          </select>
                          <input
                            type="text"
                            placeholder="Semester"
                            value={doc.semester}
                            onChange={(e) => updateDocument(studentIndex, docIndex, 'semester', e.target.value)}
                            className="w-full p-2 mb-2 rounded bg-white/10 text-white"
                          />
                          <input
                            type="text"
                            placeholder="Academic Year"
                            value={doc.academicYear}
                            onChange={(e) => updateDocument(studentIndex, docIndex, 'academicYear', e.target.value)}
                            className="w-full p-2 rounded bg-white/10 text-white"
                          />
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => addDocument(studentIndex)}
                  className="mt-4 bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white"
                >
                  Add Document
                </button>
              </div>
            ))}
          <div className="mt-6 flex justify-between">
            <button
              onClick={addNewStudent}
              className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 text-white"
            >
              Add Another Student
            </button>
            <button
              onClick={handleUpload}
              disabled={loading}
              className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 text-white"
            >
              {loading ? 'Uploading...' : 'Upload All'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}