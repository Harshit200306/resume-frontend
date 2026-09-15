import { useState } from 'react'
import { createSkill } from '../services/skillService'

function SkillForm({ resumeId, onSkillAdded }) {
  const [formData, setFormData] = useState({
    skillName: '',
    skillLevel: ''
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
      await createSkill(resumeId, formData)

      setMessage('Skill added successfully')

      setFormData({
        skillName: '',
        skillLevel: ''
      })

      onSkillAdded()

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
        Add Skill
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 sm:grid-cols-2"
      >

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Skill Name
          </label>

          <input
            name="skillName"
            placeholder="e.g. Java"
            value={formData.skillName}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Skill Level
          </label>

          <select
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Add Skill
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

export default SkillForm
