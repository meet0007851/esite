import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/registrestion'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/nav'

function App() {
  return (
    <>    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
    </Routes>
  </>

  )
}

export default App