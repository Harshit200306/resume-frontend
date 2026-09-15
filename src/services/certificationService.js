import api from '../api/axios'

export const getCertifications = async (resumeId) => {
  const response = await api.get(
    `/api/resumes/${resumeId}/certification`
  )
  return response.data
}

export const createCertification = async (
  resumeId,
  certificationData
) => {
  const response = await api.post(
    `/api/resumes/${resumeId}/certification`,
    certificationData
  )
  return response.data
}

export const deleteCertification = async (
  resumeId,
  certificationId
) => {
  const response = await api.delete(
    `/api/resumes/${resumeId}/certification/${certificationId}`
  )
  return response.data
}