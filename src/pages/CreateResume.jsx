import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

function CreateResume() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    summary: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await api.post('/api/resumes', formData)

      setMessage('Resume created successfully')

      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  return (
    <div className="theme-page min-h-screen px-5 py-10 transition-colors duration-300">

      <div className="mx-auto max-w-3xl">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <button
              onClick={() => navigate('/dashboard')}
              className="theme-heading text-2xl font-bold tracking-tight"
            >
              Resume<span className="text-blue-600">Builder</span>
            </button>

            <p className="theme-muted mt-2 text-sm">
              Create your resume
            </p>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="theme-button rounded-lg border px-4 py-2 text-sm font-medium transition"
          >
            Back
          </button>

        </div>

        <div className="theme-surface rounded-2xl border p-6 shadow-lg transition-colors duration-300 sm:p-8">

          <div className="mb-8">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Step 1
            </p>

            <h1 className="theme-heading mt-2 text-3xl font-bold">
              Create Resume
            </h1>

            <p className="theme-muted mt-2">
              Enter your basic personal and professional information.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label className="theme-heading mb-2 block text-sm font-medium">
                Resume Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>

                <label className="theme-heading mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              <div>

                <label className="theme-heading mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>

                <label className="theme-heading mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              <div>

                <label className="theme-heading mb-2 block text-sm font-medium">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>

                <label className="theme-heading mb-2 block text-sm font-medium">
                  LinkedIn
                </label>

                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              <div>

                <label className="theme-heading mb-2 block text-sm font-medium">
                  GitHub
                </label>

                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

            </div>

            <div>

              <label className="theme-heading mb-2 block text-sm font-medium">
                Professional Summary
              </label>

              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows="6"
                className="theme-input w-full resize-none rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

            </div>

            {message && (
              <p className="rounded-lg border border-green-200 bg-green-50 p-3 text-center text-sm font-medium text-green-600">
                {message}
              </p>
            )}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="theme-button rounded-lg border px-6 py-3 font-medium transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Create Resume
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default CreateResume

