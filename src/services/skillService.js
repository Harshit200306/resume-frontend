import api from '../api/axios'

export const getSkills = async (resumeId) => {
  const response = await api.get(`/api/resumes/${resumeId}/skill`)
  return response.data
}

export const createSkill = async (resumeId, skillData) => {
  const response = await api.post(
    `/api/resumes/${resumeId}/skill`,
    skillData
  )
  return response.data
}

export const deleteSkill = async (resumeId, skillId) => {
  const response = await api.delete(
    `/api/resumes/${resumeId}/skill/${skillId}`
  )
  return response.data
}