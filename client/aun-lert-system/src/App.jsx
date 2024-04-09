import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'

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
    <RouterProvider router={router} />
  )
}

export default App