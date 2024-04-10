import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
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