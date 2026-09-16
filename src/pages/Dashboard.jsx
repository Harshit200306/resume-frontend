import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import ThemeToggle from '../components/ThemeToggle'

function Dashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const [resumes, setResumes] = useState([])
  const [message, setMessage] = useState('')

  const handleLogout = () => {
    logout()
  }

  const handleCreateResume = () => {
    navigate('/create-resume')
  }

  const handleViewResume = (id) => {
    navigate(`/resumes/${id}`)
  }

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await api.get('/api/resumes')
        setResumes(response.data)
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        } else {
          setMessage('Something went wrong')
        }
      }
    }

    fetchResumes()
  }, [])

  return (
    <div className="theme-page min-h-screen transition-colors duration-300">

      <header className="theme-surface border-b transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <button
              onClick={() => navigate('/dashboard')}
              className="theme-heading text-2xl font-bold tracking-tight"
            >
              Resume<span className="text-blue-600">Builder</span>
            </button>

            <p className="theme-muted mt-1 text-sm">
              Manage your resumes
            </p>
          </div>
             

          <div className="flex items-center gap-3">
           <ThemeToggle />   
          <button
            className="theme-button rounded-lg border px-4 py-2 text-sm font-medium transition"
            onClick={handleLogout}
          >
            Logout
          </button>
         </div>

        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 py-10">

        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative">

          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="theme-heading text-3xl font-bold">
                My Resumes
              </h2>

              <p className="theme-muted mt-2">
                Create and manage your professional resumes.
              </p>
            </div>

            <button
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              onClick={handleCreateResume}
            >
              + Create Resume
            </button>

          </div>

          {message && (
            <p className="mb-5 rounded-lg border border-red-300 bg-red-50 p-4 text-red-600">
              {message}
            </p>
          )}

          {resumes.length === 0 ? (

            <div className="theme-card rounded-2xl border border-dashed px-6 py-20 text-center transition-colors duration-300">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/10 text-2xl text-blue-600">
                +
              </div>

              <h3 className="theme-heading mt-5 text-2xl font-semibold">
                No resumes found
              </h3>

              <p className="theme-muted mt-2">
                Create your first resume to get started.
              </p>

              <button
                className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                onClick={handleCreateResume}
              >
                Create Your First Resume
              </button>

            </div>

          ) : (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {resumes.map((resume) => (

                <div
                  className="theme-card group flex min-h-55 flex-col justify-between rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                  key={resume.id}
                >

                  <div>

                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10 text-sm font-bold text-blue-600">
                      CV
                    </div>

                    <h3 className="theme-heading text-xl font-semibold">
                      {resume.title}
                    </h3>

                    <p className="theme-heading mt-4 font-medium">
                      {resume.fullName}
                    </p>

                    <p className="theme-muted mt-2 text-sm">
                      {resume.email}
                    </p>

                  </div>

                  <button
                    className="theme-button mt-6 w-full rounded-lg border px-4 py-3 font-medium transition hover:bg-blue-600 hover:text-white"
                    onClick={() => handleViewResume(resume.id)}
                  >
                    View Resume
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </main>

    </div>
  )
}

export default Dashboard