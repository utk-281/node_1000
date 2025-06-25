import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-15 flex  bg-blue-600 '>
      <nav >
        <ul className='flex justify-between gap-10 m-4 text-white font-bold' >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
