import { useState } from 'react'
import { createCertification } from '../services/certificationService'

function CertificationForm({ resumeId, onCertificationAdded }) {
  const [formData, setFormData] = useState({
    certificateName: '',
    issuingOrganization: '',
    issueDate: '',
    certificateUrl: ''
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
      await createCertification(resumeId, formData)

      setMessage('Certification added successfully')

      setFormData({
        certificateName: '',
        issuingOrganization: '',
        issueDate: '',
        certificateUrl: ''
      })

      onCertificationAdded()

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
        Add Certification
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 sm:grid-cols-2"
      >

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Certificate Name
          </label>

          <input
            name="certificateName"
            placeholder="e.g. Java Programming Certificate"
            value={formData.certificateName}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Issuing Organization
          </label>

          <input
            name="issuingOrganization"
            placeholder="e.g. Oracle"
            value={formData.issuingOrganization}
            onChange={handleChange}
            required
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Issue Date
          </label>

          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="theme-heading mb-2 block text-sm font-medium">
            Certificate URL
          </label>

          <input
            type="url"
            name="certificateUrl"
            placeholder="https://example.com/certificate"
            value={formData.certificateUrl}
            onChange={handleChange}
            className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Add Certification
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

export default CertificationForm
