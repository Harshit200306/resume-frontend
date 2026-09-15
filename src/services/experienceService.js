import api from '../api/axios'

export const getExperiences = async (resumeId) => {
  const response = await api.get(`/api/resumes/${resumeId}/experience`)
  return response.data
}

export const createExperience = async (resumeId, experienceData) => {
  const response = await api.post(
    `/api/resumes/${resumeId}/experience`,
    experienceData
  )
  return response.data
}

export const deleteExperience = async (resumeId, experienceId) => {
  const response = await api.delete(
    `/api/resumes/${resumeId}/experience/${experienceId}`
  )
  return response.data
}