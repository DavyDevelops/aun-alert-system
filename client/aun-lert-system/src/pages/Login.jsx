import React, { useState } from 'react'
import '../assets/css/form.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../components/Validation'
import axios from 'axios'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css" 

//state manage ment implementation
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [serverErrors, setServerErrors] = useState([])
  const navigate = useNavigate()
 
  const handleInput = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //prevent default submission
    const errs = Validation(values)
    setErrors(errs)
    if(errs.email === "" && errs.password === ""){
      axios.post('http://localhost:3000/aunalertsystem/login', values)
      .then(res => {
        toast.success("Login Successfully", {
          position: "top-right",
          autoClose: 5000
        })
        navigate('/')
      }).catch(err =>{
        console.log(err)
        if(err.response.data.errors){
          setServerErrors(err.response.data.errors)
        } else {
          console.log(err)
        }
      })
    }
  }
  return (
    <>
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login to Account</h2>
        <div className='form-group'>
          <label htmlFor="email">Organization Email:</label>
          <input type="email" placeholder="Enter Organization Email" className='form-control' name='email' autoComplete='off' 
          onChange={handleInput}
          />
          {
            errors.email && <span className='error'>{errors.email}</span>
          }

        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="******" className='form-control' name='password' 
          onChange={handleInput}
          />
                    {
            errors.password && <span className='error'>{errors.password}</span>
          }
        </div>
        {
          serverErrors.length > 0 && (
            serverErrors.map((error, index) => (
              <p className='error' key={index}>{error.msg}</p>
            ))
          )
        }
        <button className='form-btn' onClick={handleSubmit}>Login</button>
        <p>Dont Have An Account? <Link to='/register'>Register</Link></p>
      </form>
    </div>
    </>
  )
}

export default Login;