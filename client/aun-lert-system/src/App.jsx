import React, { createContext } from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const UserContext = createContext(null)

//06:04


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  }
])

const App = () => {
  return (
    <>
    <ToastContainer />
    <RouterProvider router={router} />
    </>
  )
}

export default App