import { Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Registration } from './pages/Registration'

import { ProtectedRoute } from './components/ProtectedRoute'
import Centerblock from './components/Centerblock'

import { Page } from './pages/Page'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route element={<Page />}>
          <Route path="/" element={<Centerblock />} />
          <Route path="/userTracks" element={<Centerblock />} />
          <Route path="/playlist/:id" element={<Centerblock />} />
        </Route>
      </Route>
    </Routes>
  )
}
