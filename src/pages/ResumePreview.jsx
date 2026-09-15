import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'

import { getEducations } from '../services/educationService'
import { getExperiences } from '../services/experienceService'
import { getProjects } from '../services/projectService'
import { getSkills } from '../services/skillService'
import { getCertifications } from '../services/certificationService'

function ResumePreview() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [resume, setResume] = useState(null)
  const [educations, setEducations] = useState([])
  const [experiences, setExperiences] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [certifications, setCertifications] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resumeResponse = await api.get(`/api/resumes/${id}`)

        const [
          educationData,
          experienceData,
          projectData,
          skillData,
          certificationData
        ] = await Promise.all([
          getEducations(id),
          getExperiences(id),
          getProjects(id),
          getSkills(id),
          getCertifications(id)
        ])

        setResume(resumeResponse.data)
        setEducations(educationData)
        setExperiences(experienceData)
        setProjects(projectData)
        setSkills(skillData)
        setCertifications(certificationData)
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        } else {
          setMessage('Something went wrong')
        }
      }
    }

    fetchData()
  }, [id])

  if (message) {
    return (
      <div className="theme-page flex min-h-screen items-center justify-center px-5">
        <div className="theme-surface w-full max-w-md rounded-xl border p-8 text-center shadow-sm">
          <p className="mb-6 text-red-600">
            {message}
          </p>

          <button
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  if (!resume) {
    return (
      <div className="theme-page flex min-h-screen items-center justify-center">
        <p className="theme-muted print:text-black">
          Loading...
        </p>
      </div>
    )
  }

  return (
    <div className="theme-page min-h-screen px-5 py-10 print:bg-white print:p-0">
      <div className="mx-auto w-full max-w-4xl print:max-w-none">

        <div className="mb-6 flex items-center justify-between print:hidden">
          <button
            className="theme-button rounded-lg border px-5 py-2.5 font-medium shadow-sm"
            onClick={() => navigate(`/resumes/${id}`)}
          >
            Back
          </button>

          <button
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
            onClick={() => window.print()}
          >
            Print / Save PDF
          </button>
        </div>

        <div className="theme-surface border p-8 shadow-lg sm:p-12 print:border-0 print:bg-white print:p-10 print:text-black print:shadow-none">

          <header className="border-b-2 border-gray-500 pb-6 text-center">
            <h1 className="theme-heading print:text-black text-3xl font-bold uppercase tracking-wide">
              {resume.fullName}
            </h1>

            <p className="theme-muted print:text-black mt-3 text-sm">
              {resume.email} | {resume.phone}
            </p>

            {resume.address && (
              <p className="theme-muted print:text-black mt-1 text-sm">
                {resume.address}
              </p>
            )}

            <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-blue-600">
              {resume.linkedin && (
                <span>{resume.linkedin}</span>
              )}

              {resume.github && (
                <span>{resume.github}</span>
              )}
            </div>
          </header>

          {resume.summary && (
            <section className="mt-7 print:break-inside-avoid">
              <h2 className="theme-heading print:text-black border-b border-gray-400 pb-2 text-lg font-bold uppercase">
                Professional Summary
              </h2>

              <p className="theme-muted print:text-black mt-3 leading-7">
                {resume.summary}
              </p>
            </section>
          )}

          {educations.length > 0 && (
            <section className="mt-7 print:break-inside-avoid">
              <h2 className="theme-heading print:text-black border-b border-gray-400 pb-2 text-lg font-bold uppercase">
                Education
              </h2>

              <div className="mt-4 space-y-4">
                {educations.map((education) => (
                  <div key={education.id}>
                    <div className="flex flex-col justify-between sm:flex-row">
                      <h3 className="theme-heading print:text-black font-semibold">
                        {education.degree}
                      </h3>

                      <p className="theme-muted print:text-black text-sm">
                        {education.startYear} - {education.endYear}
                      </p>
                    </div>

                    <p className="theme-muted print:text-black">
                      {education.institution}
                    </p>

                    {education.percentage && (
                      <p className="theme-muted print:text-black text-sm">
                        Percentage: {education.percentage}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {experiences.length > 0 && (
            <section className="mt-7 print:break-inside-avoid">
              <h2 className="theme-heading print:text-black border-b border-gray-400 pb-2 text-lg font-bold uppercase">
                Experience
              </h2>

              <div className="mt-4 space-y-5">
                {experiences.map((experience) => (
                  <div key={experience.id}>
                    <div className="flex flex-col justify-between sm:flex-row">
                      <h3 className="theme-heading print:text-black font-semibold">
                        {experience.jobTitle}
                      </h3>

                      <p className="theme-muted print:text-black text-sm">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>

                    <p className="theme-muted print:text-black">
                      {experience.company}
                      {experience.location &&
                        ` | ${experience.location}`}
                    </p>

                    <p className="theme-muted print:text-black mt-2 leading-6">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section className="mt-7 print:break-inside-avoid">
              <h2 className="theme-heading print:text-black border-b border-gray-400 pb-2 text-lg font-bold uppercase">
                Projects
              </h2>

              <div className="mt-4 space-y-5">
                {projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="theme-heading print:text-black font-semibold">
                      {project.projectName}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {project.technologies}
                    </p>

                    <p className="theme-muted print:text-black mt-2 leading-6">
                      {project.description}
                    </p>

                    {project.projectUrl && (
                      <p className="mt-1 break-all text-sm text-blue-600">
                        {project.projectUrl}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section className="mt-7 print:break-inside-avoid">
              <h2 className="theme-heading print:text-black border-b border-gray-400 pb-2 text-lg font-bold uppercase">
                Skills
              </h2>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {skills.map((skill) => (
                  <p
                    key={skill.id}
                    className="theme-muted print:text-black"
                  >
                    <span className="theme-heading print:text-black font-semibold">
                      {skill.skillName}
                    </span>

                    {skill.skillLevel &&
                      ` — ${skill.skillLevel}`}
                  </p>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section className="mt-7 print:break-inside-avoid">
              <h2 className="theme-heading print:text-black border-b border-gray-400 pb-2 text-lg font-bold uppercase">
                Certifications
              </h2>

              <div className="mt-4 space-y-4">
                {certifications.map((certification) => (
                  <div key={certification.id}>
                    <h3 className="theme-heading print:text-black font-semibold">
                      {certification.certificateName}
                    </h3>

                    <p className="theme-muted print:text-black">
                      {certification.issuingOrganization}
                    </p>

                    <p className="theme-muted print:text-black text-sm">
                      {certification.issueDate}
                    </p>

                    {certification.certificateUrl && (
                      <p className="mt-1 break-all text-sm text-blue-600">
                        {certification.certificateUrl}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  )
}

export default ResumePreview
