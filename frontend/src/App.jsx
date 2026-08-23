import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/register'
import Coffee from './Pages/Coffee'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App