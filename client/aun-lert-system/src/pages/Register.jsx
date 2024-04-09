import React, { useState } from 'react'
import '../assets/css/form.css'
import { Link } from 'react-router-dom'

//state manage ment implementation
const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInput = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }
  return (
    <>
    <div className='form-container'>
      <form className='form'>
        <h2>Create Account</h2>
        <div className='form-group'>
          <label htmlFor="name">Organization Name:</label>
          <input type="text" placeholder="Enter Organization Name" className='form-control' name='name'
          onChange={handleInput}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Organization Email:</label>
          <input type="email" placeholder="Enter Organization Email" className='form-control' name='name' autoComplete='off' 
          onChange={handleInput}
          />

        </div>
        <div className='form-group'>
          <label htmlFor="email">Password:</label>
          <input type="text" placeholder="******" className='form-control' name='password' 
          onChange={handleInput}
          />
        </div>
        <button className='form-btn'>Register</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
    </>
  )
}

export default Register