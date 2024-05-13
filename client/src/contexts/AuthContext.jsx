import axios from "axios";
import { useContext, createContext, useState, useEffect,  } from "react";

import { toast } from 'react-toastify';


const AuthContext = createContext();

const backendURL = "http://localhost:3000/api/v1/auth/";

const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')
    const [token, setToken ] = useState()

    //LoginUser
    const Login = async(userData) => {
        setLoading(true)
        try {
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
        
            const response = await axios.post( `${backendURL}login`,userData, config);
            setLoading(false)
            
            const token = JSON.stringify(response.data.token)
            const user = JSON.stringify(response.data.user)

            if (token && user){
                sessionStorage.setItem('user', user)
                sessionStorage.setItem('token', token)
                // console.log(token)
            }
            toast.success('Logged in Successfully')
            window.location.href = "/"
            return response.data;
              
        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            console.log(error.response.data.message)
            toast.error(error.response.data.message)            
        }
    }

    //RegisterUser
    const Signup = async (userData) => {
        setLoading(true)
        try {
            const response = await axios.post(`${backendURL}register`, userData)
            setLoading(false)
            // 
            return response.data
        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    };



    useEffect( () => {
        const user = sessionStorage.getItem('user')
        const token = sessionStorage.getItem('token')
        if(token && user){
            setToken(JSON.parse(token))
            setCurrentUser(JSON.parse(user))
        }
    },[])

  return (
    <AuthContext.Provider value={{loading, errorMsg, currentUser,token, setCurrentUser, Login, Signup}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider 

export const  UserAuth = () => {
    return useContext(AuthContext)
}