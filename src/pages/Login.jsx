import { useState } from 'react'
import { loginUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ThemeToggle from '../components/ThemeToggle'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const data = await loginUser({
        email,
        password
      })

      login(data.token)

      setMessage('Login successful')

      navigate('/dashboard')
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message)
      } else {
        setMessage('Something went wrong')
      }
    }
  }

  return (
    <div className="theme-page relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10 transition-colors duration-300">

      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 opacity-60 blur-3xl" />

      <div className="relative w-full max-w-md">

        <div className="mb-8 text-center">
          

           <div className="flex items-center justify-between">

          <button
            onClick={() => navigate('/')}
            className="theme-heading text-2xl font-bold tracking-tight"
          >
            Resume<span className="text-blue-600">Builder</span>
          </button>
           <ThemeToggle />
          </div>

          <p className="theme-muted mt-3">
            Login to manage your resumes
          </p>

        </div>

        <div className="theme-surface rounded-2xl border p-8 shadow-xl transition-colors duration-300">

          <h2 className="theme-heading mb-7 text-2xl font-semibold">
            Login
          </h2>

          <form
            onSubmit={handleLogin}
            autoComplete="off"
            className="space-y-5"
          >

            <div>

              <label className="theme-heading mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="off"
                className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

            </div>

            <div>

              <label className="theme-heading mb-2 block text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="new-password"
                className="theme-input w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Login
            </button>

          </form>

          {message && (
            <p className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-center text-sm font-medium text-red-600">
              {message}
            </p>
          )}

          <p className="theme-muted mt-7 text-center text-sm">
            Don't have an account?{' '}

            <button
              type="button"
              className="font-medium text-blue-600 transition hover:text-blue-700"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Login