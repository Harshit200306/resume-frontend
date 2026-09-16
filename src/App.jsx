import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateResume from './pages/CreateResume'
import ResumeDetails from './pages/ResumeDetails'
import EditResume from './pages/EditResume'
import ProtectedRoute from './routes/ProtectedRoute'
import ResumePreview from './pages/ResumePreview'
import Landing from './pages/Landing'


function App() {
  return (
    
      <>
      

    <Routes>


      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-resume" element={<CreateResume />} />
        <Route path="/resumes/:id" element={<ResumeDetails />} />
        <Route path="/resumes/:id/edit" element={<EditResume />} />
        <Route path="/resumes/:id/preview" element={<ResumePreview />} />
      </Route>

      

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
      </>
  )
}

export default App