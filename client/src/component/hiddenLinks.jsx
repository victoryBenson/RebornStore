import { UserAuth } from "../contexts/AuthContext"

export const ShowOnLogin = ({children}) => {
    const {token} = UserAuth()
   
    if(token){
        return children
    }
    return null
}


export const ShowCustomer = ({children}) => {
    const {currentUser} = UserAuth()
   
    if(currentUser?.role === "customer"){
        return children
    }
    return null
}

export const ShowAdmin = ({children}) => {
    const {currentUser} = UserAuth()
   
    if(currentUser?.role === "admin"){
        return children
    }
    return null
}


export const ShowOnLogout = ({children}) => {
    const {token} = UserAuth()

    if(!token){
        return children
    }
    return null
}