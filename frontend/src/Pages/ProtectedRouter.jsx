import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
const ProtectedRouter = () => {

  const email = sessionStorage.getItem('email')

  if(!email){
    toast.error('Login and use more Feature ')
    return <Navigate to='/login' replace></Navigate>
  }

  return <Outlet />;
}

export default ProtectedRouter