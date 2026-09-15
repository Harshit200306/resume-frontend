import { useState } from 'react'
import { createExperience } from '../services/experienceService'

function ExperienceForm({ resumeId, onExperienceAdded }) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const [message, setMessage] = useState('')

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
      await createExperience(resumeId, formData)

      setMessage('Experience added successfully')

      setFormData({
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      })

      onExperienceAdded()

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  return (
    <div className="theme-card rounded-xl border p-6 shadow-sm transition-colors duration-300">

      <h3 className="theme-heading mb-6 text-xl font-semibold">
        Add Experience
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 sm:grid-cols-2"
      >

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Job Title
          </label>

          <input
            name="jobTitle"
            placeholder="e.g. Java Developer"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Company
          </label>

          <input
            name="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Location
          </label>

          <input
            name="location"
            placeholder="e.g. Noida"
            value={formData.location}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Start Date
          </label>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            End Date
          </label>

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="theme-heading mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            name="description"
            placeholder="Describe your responsibilities and achievements"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="theme-input w-full resize-y rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Add Experience
          </button>
        </div>

      </form>

      {message && (
        <p className="mt-5 rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-600">
          {message}
        </p>
      )}

    </div>
  )
}

export default ExperienceForm

