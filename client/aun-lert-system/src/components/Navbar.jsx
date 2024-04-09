import React from 'react'
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <Link to="/"  className='navbar-brand'>
                AUN ALERT SYSTEM
            </Link>
            </div>
            <div className='navbar-right'>
            <Link  to="/about" className='navbar-brand'>About</Link>
            <Link to="/login" className='navbar-brand'>Login</Link>
            <Link  to="/register" className='navbar-brand'>Register</Link>
            </div>
            </div>
  )
}

export default Navbar