import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const RedirectAuthenticated = () => {
    const token = useSelector((state) => state?.auth?.user?.token)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            return navigate(-1)
        }
    }, [])
    return <Outlet />

}

export default RedirectAuthenticated