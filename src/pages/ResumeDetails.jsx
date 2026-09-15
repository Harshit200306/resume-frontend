import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api/axios'
import { getEducations, deleteEducation } from '../services/educationService'
import EducationForm from './EducationForm'
import { getExperiences, deleteExperience } from '../services/experienceService'
import ExperienceForm from './ExperienceForm'
import { getProjects, deleteProject } from '../services/projectService'
import ProjectForm from './ProjectForm'
import { getSkills, deleteSkill } from '../services/skillService'
import SkillForm from './SkillForm'
import {
  getCertifications,
  deleteCertification
} from '../services/certificationService'
import CertificationForm from './CertificationForm'

function ResumeDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [resume, setResume] = useState(null)
  const [message, setMessage] = useState('')
  const [educations, setEducations] = useState([])
  const [experiences, setExperiences] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [certifications, setCertifications] = useState([])

  const fetchEducations = async () => {
    try {
      const data = await getEducations(id)
      setEducations(data)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const fetchExperiences = async () => {
    try {
      const data = await getExperiences(id)
      setExperiences(data)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const fetchProjects = async () => {
    try {
      const data = await getProjects(id)
      setProjects(data)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const fetchSkills = async () => {
    try {
      const data = await getSkills(id)
      setSkills(data)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const fetchCertifications = async () => {
    try {
      const data = await getCertifications(id)
      setCertifications(data)
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await api.get(`/api/resumes/${id}`)
        setResume(response.data)
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message)
        } else {
          setMessage('Something went wrong')
        }
      }
    }

    fetchResume()
    fetchEducations()
    fetchExperiences()
    fetchProjects()
    fetchSkills()
    fetchCertifications()
  }, [id])

  const handleDelete = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this resume?'
    )

    if (!confirmed) {
      return
    }

    try {
      await api.delete(`/api/resumes/${id}`)
      navigate('/dashboard')
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const handleDeleteEducation = async (educationId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this education?'
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteEducation(id, educationId)
      setMessage('')
      fetchEducations()
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const handleDeleteExperience = async (experienceId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this experience?'
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteExperience(id, experienceId)
      setMessage('')
      fetchExperiences()
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const handleDeleteProject = async (projectId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this project?'
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteProject(id, projectId)
      fetchProjects()
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const handleDeleteSkill = async (skillId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this skill?'
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteSkill(id, skillId)
      setMessage('')
      fetchSkills()
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  const handleDeleteCertification = async (certificationId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this certification?'
    )

    if (!confirmed) {
      return
    }

    try {
      await deleteCertification(id, certificationId)
      setMessage('')
      fetchCertifications()
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  if (!resume) {
    return (
      <div className="theme-page flex min-h-screen items-center justify-center transition-colors duration-300">
        <p className="theme-muted">
          Loading...
        </p>
      </div>
    )
  }

  return (
    <div className="theme-page min-h-screen px-5 py-10 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="theme-heading text-3xl font-bold">
              {resume.title}
            </h1>

            <p className="theme-muted mt-2">
              Resume details and information
            </p>
          </div>

          <button
            className="theme-button rounded-lg border px-5 py-2.5 font-medium transition"
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </button>

        </div>

        {message && (
          <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-center font-medium text-red-600">
            {message}
          </div>
        )}

        <div className="space-y-6">

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Personal Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              <div>
                <p className="theme-muted text-sm">Full Name</p>
                <p className="theme-heading mt-1 font-medium">
                  {resume.fullName}
                </p>
              </div>

              <div>
                <p className="theme-muted text-sm">Email</p>
                <p className="theme-heading mt-1 font-medium">
                  {resume.email}
                </p>
              </div>

              <div>
                <p className="theme-muted text-sm">Phone</p>
                <p className="theme-heading mt-1 font-medium">
                  {resume.phone}
                </p>
              </div>

              <div>
                <p className="theme-muted text-sm">Address</p>
                <p className="theme-heading mt-1 font-medium">
                  {resume.address || 'Not provided'}
                </p>
              </div>

            </div>

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-4 text-xl font-semibold">
              Professional Summary
            </h2>

            <p className="theme-muted leading-7">
              {resume.summary || 'No summary added'}
            </p>

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Professional Links
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              <div>
                <p className="theme-muted text-sm">LinkedIn</p>
                <p className="mt-1 break-all font-medium text-blue-600">
                  {resume.linkedin || 'Not provided'}
                </p>
              </div>

              <div>
                <p className="theme-muted text-sm">GitHub</p>
                <p className="mt-1 break-all font-medium text-blue-600">
                  {resume.github || 'Not provided'}
                </p>
              </div>

            </div>

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Education
            </h2>

            {educations.length === 0 ? (

              <p className="theme-muted mb-6">
                No education added
              </p>

            ) : (

              <div className="mb-6 space-y-4">

                {educations.map((education) => (

                  <div
                    key={education.id}
                    className="theme-card rounded-lg border p-5 transition-colors duration-300"
                  >

                    <h3 className="theme-heading text-lg font-semibold">
                      {education.degree}
                    </h3>

                    <p className="theme-heading mt-2">
                      {education.institution}
                    </p>

                    <p className="theme-muted mt-1 text-sm">
                      {education.startYear} - {education.endYear}
                    </p>

                    <p className="theme-muted mt-1 text-sm">
                      Percentage: {education.percentage}
                    </p>

                    <button
                      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      onClick={() =>
                        handleDeleteEducation(education.id)
                      }
                    >
                      Delete Education
                    </button>

                  </div>

                ))}

              </div>

            )}

            <EducationForm
              resumeId={id}
              onEducationAdded={fetchEducations}
            />

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Experience
            </h2>

            {experiences.length === 0 ? (

              <p className="theme-muted mb-6">
                No experience added
              </p>

            ) : (

              <div className="mb-6 space-y-4">

                {experiences.map((experience) => (

                  <div
                    key={experience.id}
                    className="theme-card rounded-lg border p-5 transition-colors duration-300"
                  >

                    <h3 className="theme-heading text-lg font-semibold">
                      {experience.jobTitle}
                    </h3>

                    <p className="theme-heading mt-2">
                      {experience.company}
                    </p>

                    <p className="theme-muted mt-1 text-sm">
                      {experience.location}
                    </p>

                    <p className="theme-muted mt-1 text-sm">
                      {experience.startDate} - {experience.endDate}
                    </p>

                    <p className="theme-muted mt-3 leading-6">
                      {experience.description}
                    </p>

                    <button
                      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      onClick={() =>
                        handleDeleteExperience(experience.id)
                      }
                    >
                      Delete Experience
                    </button>

                  </div>

                ))}

              </div>

            )}

            <ExperienceForm
              resumeId={id}
              onExperienceAdded={fetchExperiences}
            />

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Projects
            </h2>

            {projects.length === 0 ? (

              <p className="theme-muted mb-6">
                No projects added
              </p>

            ) : (

              <div className="mb-6 space-y-4">

                {projects.map((project) => (

                  <div
                    key={project.id}
                    className="theme-card rounded-lg border p-5 transition-colors duration-300"
                  >

                    <h3 className="theme-heading text-lg font-semibold">
                      {project.projectName}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-blue-600">
                      {project.technologies}
                    </p>

                    <p className="theme-muted mt-3 leading-6">
                      {project.description}
                    </p>

                    <p className="theme-muted mt-2 break-all text-sm">
                      {project.projectUrl}
                    </p>

                    <button
                      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      onClick={() =>
                        handleDeleteProject(project.id)
                      }
                    >
                      Delete Project
                    </button>

                  </div>

                ))}

              </div>

            )}

            <ProjectForm
              resumeId={id}
              onProjectAdded={fetchProjects}
            />

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Skills
            </h2>

            {skills.length === 0 ? (

              <p className="theme-muted mb-6">
                No skills added
              </p>

            ) : (

              <div className="mb-6 grid gap-4 sm:grid-cols-2">

                {skills.map((skill) => (

                  <div
                    key={skill.id}
                    className="theme-card rounded-lg border p-5 transition-colors duration-300"
                  >

                    <h3 className="theme-heading font-semibold">
                      {skill.skillName}
                    </h3>

                    <p className="theme-muted mt-1 text-sm">
                      Level: {skill.skillLevel}
                    </p>

                    <button
                      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      onClick={() =>
                        handleDeleteSkill(skill.id)
                      }
                    >
                      Delete Skill
                    </button>

                  </div>

                ))}

              </div>

            )}

            <SkillForm
              resumeId={id}
              onSkillAdded={fetchSkills}
            />

          </section>

          <section className="theme-surface rounded-xl border p-6 shadow-sm transition-colors duration-300 sm:p-8">

            <h2 className="theme-heading mb-6 text-xl font-semibold">
              Certifications
            </h2>

            {certifications.length === 0 ? (

              <p className="theme-muted mb-6">
                No certifications found
              </p>

            ) : (

              <div className="mb-6 space-y-4">

                {certifications.map((certification) => (

                  <div
                    key={certification.id}
                    className="theme-card rounded-lg border p-5 transition-colors duration-300"
                  >

                    <h3 className="theme-heading text-lg font-semibold">
                      {certification.certificateName}
                    </h3>

                    <p className="theme-heading mt-2">
                      {certification.issuingOrganization}
                    </p>

                    <p className="theme-muted mt-1 text-sm">
                      {certification.issueDate}
                    </p>

                    <p className="mt-2 break-all text-sm text-blue-600">
                      {certification.certificateUrl}
                    </p>

                    <button
                      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                      onClick={() =>
                        handleDeleteCertification(
                          certification.id
                        )
                      }
                    >
                      Delete Certification
                    </button>

                  </div>

                ))}

              </div>

            )}

            <CertificationForm
              resumeId={id}
              onCertificationAdded={fetchCertifications}
            />

          </section>

          <div className="flex flex-col gap-3 border-t border-gray-300 pt-6 sm:flex-row sm:justify-end">

            <button
              className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
              onClick={() => navigate(`/resumes/${id}/preview`)}
            >
              Preview Resume
            </button>

            <button
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              onClick={() => navigate(`/resumes/${id}/edit`)}
            >
              Edit Resume
            </button>

            <button
              className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete Resume
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ResumeDetails

