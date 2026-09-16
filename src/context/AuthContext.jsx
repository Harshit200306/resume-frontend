import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem('token')
  )

  const navigate = useNavigate()

const login = (newToken, userName) => {
  localStorage.setItem('token', newToken)
  localStorage.setItem('userName', userName)
  setToken(newToken)
}
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setToken(null)
     navigate('/')
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}