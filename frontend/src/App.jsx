import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register'
import Coffee from './Pages/Coffee'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './Pages/Profile.jsx'
import Cart from './Pages/Cart.jsx'
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
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}

export default App