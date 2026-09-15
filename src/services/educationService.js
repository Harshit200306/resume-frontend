import api from '../api/axios'

export const getEducations = async (resumeId) => {
  const response = await api.get(`/api/resumes/${resumeId}/education`)
  return response.data
}

export const createEducation = async (resumeId, educationData) => {
  const response = await api.post(
    `/api/resumes/${resumeId}/education`,
    educationData
  )
  return response.data
}

export const deleteEducation = async (resumeId, educationId) => {
  const response = await api.delete(
    `/api/resumes/${resumeId}/education/${educationId}`
  )
  return response.data
}