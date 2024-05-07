import { useEffect } from "react"
import { useSelector } from "react-redux"

// useEffect(()=>{
// })

export const ShowOnLogin = ({children}) => {
    const {isLoggedIn} = useSelector((state) => state.auth)
   
    if(isLoggedIn){
        return children
    }
    return null
}


export const ShowCustomer = ({children}) => {
    const {isLoggedIn, currentUser} = useSelector((state) => state.auth)
   
    if(isLoggedIn && currentUser?.role === "customer"){
        return children
    }
    return null
}

export const ShowAdmin = ({children}) => {
    const {isLoggedIn, currentUser} = useSelector((state) => state.auth)
   
    if(isLoggedIn && currentUser?.role === "admin"){
        return children
    }
    return null
}


export const ShowOnLogout = ({children}) => {
    const {isLoggedIn, currentUser} = useSelector((state) => state.auth)

    if(!isLoggedIn && !currentUser){
        return children
    }
    return null
}