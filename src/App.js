import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

export default function app() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}
