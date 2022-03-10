import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AdminHome from './components/layout/AdminHome'
import Footer from './components/layout/footer'
import Frontpage from './components/Frontpage'

export default function app() {
  return (
    <>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Admin' element={<AdminHome />} />
        <Route path='/' element={<Frontpage />} />
      </Routes>
    </>
  )
}
