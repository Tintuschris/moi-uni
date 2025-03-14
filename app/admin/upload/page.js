'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Toaster, toast } from 'react-hot-toast'

const logDebug = (message, data) => {
  console.log(`[Debug] ${message}:`, data);
};

export default function UploadResults() {
  const [mode, setMode] = useState('new')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [students, setStudents] = useState([{
    id: null,
    firstName: '',
    lastName: '',
    registrationNumber: '',
    programType: 'undergraduate',
    photo: null,
    photoPreview: null,
    documents: [],
    thesis: null
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

    if (error) {
      console.error('Search error:', error)
      return
    }

    setSearchResults(data || [])
  }

  const handleSelectExistingStudent = (student) => {
    setStudents([{
      id: student.id,
      firstName: student.first_name,
      lastName: student.last_name,
      registrationNumber: student.registration_number,
      programType: student.program_type || 'undergraduate',
      photo: null,
      photoPreview: student.photo_url,
      documents: [],
      thesis: null
    }])
    setSearchTerm('')
    setSearchResults([])
    setMode('existing')
  }

  const addNewStudent = () => {
    setStudents(prev => [...prev, {
      id: null,
      firstName: '',
      lastName: '',
      registrationNumber: '',
      programType: 'undergraduate',
      photo: null,
      photoPreview: null,
      documents: [],
      thesis: null
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
              semester: '1',
              academicYear: new Date().getFullYear().toString(),
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

  const addThesis = (studentIndex) => {
    logDebug('Adding thesis for student', studentIndex);
    setStudents(prev => prev.map((student, i) => {
      if (i === studentIndex) {
        const newThesis = {
          file: null,
          title: '',
          type: student.programType
        };
        logDebug('New thesis data', newThesis);
        return {
          ...student,
          thesis: newThesis
        };
      }
      return student;
    }));
  }

  const updateThesis = (studentIndex, field, value) => {
    logDebug('Updating thesis', { studentIndex, field, value });
    setStudents(prev => prev.map((student, i) => {
      if (i === studentIndex) {
        const updatedThesis = {
          ...student.thesis,
          [field]: value
        };
        logDebug('Updated thesis data', updatedThesis);
        return {
          ...student,
          thesis: updatedThesis
        };
      }
      return student;
    }));
  }
  const resetForm = () => {
    setStudents([{
      id: null,
      firstName: '',
      lastName: '',
      registrationNumber: '',
      programType: 'undergraduate',
      photo: null,
      photoPreview: null,
      documents: [],
      thesis: null
    }]);
    setSearchTerm('');
    setSearchResults([]);
    setMode('new');
  };

  const handleUpload = async () => {
    setLoading(true)
    try {
      // Validate students array
      if (!students.length) {
        toast.error('No students to upload');
        return;
      }

      for (const student of students) {
        logDebug('Processing student', student);

        let studentId = student.id;

        // For new students
        if (!studentId) {
          if (!student.firstName || !student.lastName || !student.registrationNumber) {
            const studentName = student.firstName && student.lastName 
              ? `${student.firstName} ${student.lastName}`
              : 'Unknown';
            throw new Error(`Missing required fields for student: ${studentName}. Please fill in all required fields.`);
          }

          // Create new student
          if (student.photo) {
            const photoExt = student.photo.name.split('.').pop();
            const photoName = `${Date.now()}.${photoExt}`;
          
            const { data: photoData, error: photoError } = await supabase.storage
              .from('passport_photos')
              .upload(photoName, student.photo);

            if (photoError) {
              logDebug('Photo upload error', photoError);
              throw new Error(photoError.message || 'Failed to upload photo');
            }

            const { data: { publicUrl: photoUrl } } = supabase.storage
              .from('passport_photos')
              .getPublicUrl(photoName);

            const { data: newStudent, error: studentError } = await supabase
              .from('students')
              .insert({
                first_name: student.firstName,
                last_name: student.lastName,
                registration_number: student.registrationNumber,
                username: (student.firstName + student.lastName).toLowerCase(),
                photo_url: photoUrl,
                program_type: student.programType || 'undergraduate'
              })
              .select()
              .single();

            if (studentError) {
              logDebug('Student creation error', studentError);
              throw new Error(studentError.message || 'Failed to create student');
            }
          
            studentId = newStudent.id;
            logDebug('Created new student', newStudent);
          }
        }

        // Handle documents for both new and existing students
        if (student.documents?.length > 0) {
          for (const doc of student.documents) {
            if (!doc.file) continue;

            const fileExt = doc.file.name.split('.').pop();
            const fileName = `${studentId}/${Date.now()}.${fileExt}`;
            
            // Different handling based on document type
            if (doc.type === 'result') {
              if (!doc.yearOfStudy || !doc.semester || !doc.academicYear) {
                throw new Error('Missing required result details');
              }

              const { error: uploadError } = await supabase.storage
                .from('results')
                .upload(fileName, doc.file);

              if (uploadError) throw uploadError;

              const { error: resultError } = await supabase
                .from('results')
                .insert({
                  student_id: studentId,
                  file_path: fileName,
                  year_of_study: parseInt(doc.yearOfStudy),
                  semester: doc.semester,
                  academic_year: doc.academicYear
                });

              if (resultError) throw resultError;
            } 
            else if (doc.type === 'certificate') {
              const { error: uploadError } = await supabase.storage
                .from('certificates')
                .upload(fileName, doc.file);

              if (uploadError) throw uploadError;

              const { error: certError } = await supabase
                .from('certificates')
                .insert({
                  student_id: studentId,
                  file_path: fileName,
                  uploaded_at: new Date().toISOString()
                });

              if (certError) throw certError;
            }
            else if (doc.type === 'publication') {
              const { error: uploadError } = await supabase.storage
                .from('publications')
                .upload(fileName, doc.file);

              if (uploadError) throw uploadError;

              const { error: pubError } = await supabase
                .from('publications')
                .insert({
                  student_id: studentId,
                  file_path: fileName,
                  uploaded_at: new Date().toISOString()
                });

              if (pubError) throw pubError;
            }
          }
        }

        // Handle thesis upload for both new and existing students
        if (student.thesis?.file && (student.programType === 'masters' || student.programType === 'phd')) {
          logDebug('Processing thesis upload', student.thesis);

          if (!student.thesis.title) {
            throw new Error('Thesis title is required');
          }

          const fileExt = student.thesis.file.name.split('.').pop();
          const fileName = `${studentId}/${Date.now()}_thesis.${fileExt}`;

          const { data: thesisUploadData, error: thesisUploadError } = await supabase.storage
            .from('theses')
            .upload(fileName, student.thesis.file);

          if (thesisUploadError) {
            logDebug('Thesis upload error', thesisUploadError);
            throw new Error(thesisUploadError.message || 'Failed to upload thesis file');
          }

          const thesisRecord = {
            student_id: studentId,
            file_path: fileName,
            thesis_type: student.programType,
            title: student.thesis.title,
            status: student.thesis.status || 'in_progress',
            uploaded_at: new Date().toISOString()
          };

          const { error: thesisError } = await supabase
            .from('theses')
            .insert(thesisRecord);

          if (thesisError) {
            logDebug('Thesis record creation error', thesisError);
            throw new Error(thesisError.message || 'Failed to create thesis record');
          }

          logDebug('Thesis uploaded successfully', { fileName, thesisRecord });
        }
      }

      toast.success('Upload completed successfully!');
      resetForm();
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }
    // Input field base styles
    const inputClasses = "w-full p-2 rounded border border-green-400 bg-green-900/30 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
    const selectClasses = "w-full p-2 rounded border border-green-400 bg-green-900/30 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
    const fileInputClasses = "w-full p-2 rounded border border-green-400 bg-green-900/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-600 file:text-white hover:file:bg-green-700"
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-700 p-6">
        <Toaster position="top-right" />
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
              <div key={studentIndex} className="bg-white/10 p-6 rounded-lg mb-6">
                {!student.id && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={student.firstName}
                      onChange={(e) => updateStudent(studentIndex, 'firstName', e.target.value)}
                      className={inputClasses}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={student.lastName}
                      onChange={(e) => updateStudent(studentIndex, 'lastName', e.target.value)}
                      className={inputClasses}
                    />
                    <input
                      type="text"
                      placeholder="Registration Number"
                      value={student.registrationNumber}
                      onChange={(e) => updateStudent(studentIndex, 'registrationNumber', e.target.value)}
                      className={inputClasses}
                    />
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoChange(studentIndex, e)}
                        className={fileInputClasses}
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
  
                <select
                  value={student.programType}
                  onChange={(e) => updateStudent(studentIndex, 'programType', e.target.value)}
                  className={selectClasses}
                >
                  <option value="undergraduate">Undergraduate</option>
                  <option value="masters">Masters</option>
                  <option value="phd">PhD</option>
                </select>
  
                {/* Documents Section */}
                <div className="mt-6">
                  <h3 className="text-white font-medium mb-4">Documents</h3>
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
                          className={selectClasses}
                        >
                          {student.programType === 'undergraduate' ? (
                            <>
                              <option value="result">Result/Transcript</option>
                              <option value="certificate">Certificate</option>
                            </>
                          ) : (
                            <>
                              <option value="result">Progress Report</option>
                              <option value="certificate">Certificate</option>
                              <option value="publication">Publication</option>
                            </>
                          )}
                        </select>
  
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => updateDocument(studentIndex, docIndex, 'file', e.target.files[0])}
                          className={fileInputClasses}
                        />
  
                        {doc.type === 'result' && (
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <select
                              value={doc.yearOfStudy}
                              onChange={(e) => updateDocument(studentIndex, docIndex, 'yearOfStudy', e.target.value)}
                              className={selectClasses}
                            >
                              <option value="">Select Year of Study</option>
                              <option value="1">First Year</option>
                              <option value="2">Second Year</option>
                              {student.programType === 'undergraduate' && (
                                <>
                                  <option value="3">Third Year</option>
                                  <option value="4">Fourth Year</option>
                                </>
                              )}
                            </select>
                            <select
                              value={doc.semester}
                              onChange={(e) => updateDocument(studentIndex, docIndex, 'semester', e.target.value)}
                              className={selectClasses}
                            >
                              <option value="">Select Semester</option>
                              <option value="1">First Semester</option>
                              <option value="2">Second Semester</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Academic Year (e.g., 2023/2024)"
                              value={doc.academicYear}
                              onChange={(e) => updateDocument(studentIndex, docIndex, 'academicYear', e.target.value)}
                              className={inputClasses}
                            />
                          </div>
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
  
                {/* Thesis Section - Only show for Masters/PhD */}
                {(student.programType === 'masters' || student.programType === 'phd') && (
                  <div className="mt-6">
                    <h3 className="text-white font-medium mb-4">Thesis</h3>
                    {!student.thesis ? (
                      <button
                        onClick={() => addThesis(studentIndex)}
                        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white"
                      >
                        Add Thesis
                      </button>
                    ) : (
                      <div className="bg-white/5 p-4 rounded">
                        <input
                          type="text"
                          placeholder="Thesis Title"
                          value={student.thesis.title || ''}
                          onChange={(e) => updateThesis(studentIndex, 'title', e.target.value)}
                          className={inputClasses}
                        />
  
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => updateThesis(studentIndex, 'file', e.target.files[0])}
                          className={fileInputClasses}
                        />
                      </div>
                    )}
                  </div>
                )}
  
                {students.length > 1 && (
                  <button
                    onClick={() => removeStudent(studentIndex)}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Remove Student
                  </button>
                )}
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