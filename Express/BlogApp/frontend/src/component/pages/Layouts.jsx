import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layouts = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default Layouts
