import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Root } from './Root.jsx'
import { Login, Register } from './auth/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from './auth/layout/AuthLayout'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
        {
            element: <AuthLayout />,
            children: [
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                }
            ]
        }
    ]

  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
