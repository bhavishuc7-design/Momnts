import React from 'react'
import { createBrowserRouter } from 'react-router'
import Register from './features/auth/pages/register/Register'
import Login from './features/auth/pages/login/Login'
import Home from './pages/home/Home'
import Onboarding from './features/auth/pages/onboarding/Onboarding'
import LandingPage from './pages/landing_page/LandingPage'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/dashboard",
        element: <Home />,
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/register",
        element: <Register />
    },
    {
        path:"/onboarding",
        element: <Onboarding />
    }
])