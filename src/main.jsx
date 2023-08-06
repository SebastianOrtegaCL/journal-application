import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Root } from './Root.jsx'
import {Login, Register} from './auth/pages'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,

    },
    {
        path: 'auth/*',
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '*',
                element: <Navigate to="/auth/login"/>
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
