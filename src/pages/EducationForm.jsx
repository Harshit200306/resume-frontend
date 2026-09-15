import { useState } from 'react'
import { createEducation } from '../services/educationService'

function EducationForm({ resumeId, onEducationAdded }) {
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
    startYear: '',
    endYear: '',
    percentage: ''
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
      await createEducation(resumeId, formData)

      setMessage('Education added successfully')

      setFormData({
        degree: '',
        institution: '',
        startYear: '',
        endYear: '',
        percentage: ''
      })

      onEducationAdded()

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
        Add Education
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 sm:grid-cols-2"
      >

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Degree
          </label>

          <input
            name="degree"
            placeholder="e.g. MCA"
            value={formData.degree}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Institution
          </label>

          <input
            name="institution"
            placeholder="Institution name"
            value={formData.institution}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Start Year
          </label>

          <input
            name="startYear"
            placeholder="e.g. 2024"
            value={formData.startYear}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            End Year
          </label>

          <input
            name="endYear"
            placeholder="e.g. 2026"
            value={formData.endYear}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Percentage
          </label>

          <input
            name="percentage"
            placeholder="e.g. 77%"
            value={formData.percentage}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Add Education
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

export default EducationForm

