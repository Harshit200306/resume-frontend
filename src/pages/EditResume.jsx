import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api/axios'

function EditResume() {
  const { id } = useParams()
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await api.get(`/api/resumes/${id}`)
        setFormData(response.data)
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        } else {
          setMessage('Something went wrong')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchResume()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await api.put(`/api/resumes/${id}`, formData)

      setMessage('Resume updated successfully')

      setTimeout(() => {
        navigate(`/resumes/${id}`)
      }, 1000)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  if (loading) {
    return (
      <div className="theme-page flex min-h-screen items-center justify-center">
        <p className="theme-muted">
          Loading...
        </p>
      </div>
    )
  }

  if (message && !formData.title) {
    return (
      <div className="theme-page flex min-h-screen items-center justify-center px-5">

        <div className="theme-surface rounded-xl border p-8 text-center shadow-sm">

          <p className="mb-5 text-red-600">
            {message}
          </p>

          <button
            onClick={() => navigate('/dashboard')}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Dashboard
          </button>

        </div>

      </div>
    )
  }

  return (
    <div className="theme-page min-h-screen px-5 py-10">

      <div className="mx-auto max-w-4xl">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="theme-heading text-3xl font-bold">
              Edit Resume
            </h1>

            <p className="theme-muted mt-2">
              Update your resume information.
            </p>
          </div>

          <button
            onClick={() => navigate(`/resumes/${id}`)}
            className="theme-button rounded-lg border px-5 py-2.5 font-medium transition"
          >
            Back
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="theme-surface overflow-hidden rounded-xl border shadow-sm"
        >

          <div className="border-b border-(--border) p-6 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Basic Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="theme-heading mb-2 block text-sm font-medium">
                  Resume Title
                </label>

                <input
                  name="title"
                  placeholder="Resume Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="theme-heading mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  name="fullName"
                  placeholder="Full Name"
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
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="theme-heading mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="theme-heading mb-2 block text-sm font-medium">
                  Address
                </label>

                <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

            </div>

          </div>

          <div className="border-(--border) p-6 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Professional Links
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="theme-heading mb-2 block text-sm font-medium">
                  LinkedIn
                </label>

                <input
                  name="linkedin"
                  placeholder="LinkedIn"
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
                  name="github"
                  placeholder="GitHub"
                  value={formData.github}
                  onChange={handleChange}
                  className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

            </div>

          </div>

          <div className="p-6 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Professional Summary
            </h2>

            <textarea
              name="summary"
              placeholder="Professional Summary"
              value={formData.summary}
              onChange={handleChange}
              rows="7"
              className="theme-input w-full resize-y rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-(--border) bg-(--card) p-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => navigate(`/resumes/${id}`)}
              className="theme-button rounded-lg border px-5 py-3 font-medium transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Update Resume
            </button>

          </div>

        </form>

        {message && (
          <p className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4 text-center font-medium text-green-600">
            {message}
          </p>
        )}

      </div>

    </div>
  )
}

export default EditResume

