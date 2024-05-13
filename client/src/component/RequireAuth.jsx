import {Navigate, Outlet, useLocation} from "react-router-dom"


export const RequireAuth = () => {
    const token = sessionStorage.getItem('token')
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : 
            <Navigate 
                to="/login" 
                state={{ from: location }} 
                replace 
            />
    )
};