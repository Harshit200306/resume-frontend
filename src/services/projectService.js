import api from '../api/axios'

export const getProjects = async (resumeId) => {
  const response = await api.get(`/api/resumes/${resumeId}/project`)
  return response.data
}

export const createProject = async (resumeId, projectData) => {
  const response = await api.post(
    `/api/resumes/${resumeId}/project`,
    projectData
  )
  return response.data
}

export const deleteProject = async (resumeId, projectId) => {
  const response = await api.delete(
    `/api/resumes/${resumeId}/project/${projectId}`
  )
  return response.data
}