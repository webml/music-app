import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { MainPage } from './pages/MainPage'
import { NotFound } from './pages/NotFound'
import PlaylistPage from './pages/PlaylistPage'
import { Registration } from './pages/Registration'
import UserTracks from './pages/UserTracks'
import { ProtectedRoute } from './components/ProtectedRoute'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/userTracks" element={<UserTracks />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Route>
    </Routes>
  )
}
