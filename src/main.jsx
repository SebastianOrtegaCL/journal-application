import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Root } from './Root.jsx'
import {Login, Register} from './auth/pages'
import {createBrowserRouter, Navigate, RouterProvider, useLoaderData} from 'react-router-dom';
import {AppTheme} from "./theme/AppTheme.jsx";
import {Provider, } from "react-redux";
import {store} from "./store";
import {CheckingAuth} from "./ui/component/CheckingAuth.jsx";

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
                element: <Login />,

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={ store }>
          <AppTheme>
              <RouterProvider router={ router } />
          </AppTheme>
      </Provider>
  </React.StrictMode>,
)