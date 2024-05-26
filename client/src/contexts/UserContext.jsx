import axios from "axios";
import { createContext, useEffect, useState} from "react";


export const UserContext = createContext();

let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://rebornv2api.onrender.com/api/v1/users/";
} else{
    backendURL = "http://localhost:3000/api/v1/users/";
}


export const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [currentUser, setCurrentUser] = useState({})
    const [users, setUsers] = useState([])
    const [userTotal, setUserTotal] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
 
     //getUserTotal
    const getUserTotal = async() => {
        setLoading(true)
        try {
            const config = {
                headers: {
                "Content-Type": "application/json",
                },
            };
            const response = await axios.get(
                `${backendURL}getUsersCount`,
                config
            )
            setLoading(false)
            setUserTotal(response.data)
            return response.data;

        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            console.log(error.response.data.message)
        }
    };
    
    
    //getUser
    const getUsers = async() => {
        setIsLoading(true)
        try {
            const config = {
                headers: {
                "Content-Type": "application/json",
                },
            };
            const res = await axios.get(`${backendURL}getUsers`,config)
            const result = await res.data
            setIsLoading(false)
            setUsers(result)
            // console.log(result)
            return result;

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
            console.log(error.message)
        }
    };
     
    //check active user
    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            const getUser = async() => {
                setLoading(true)
                try {
                    const config = {
                        headers: {
                        "Content-Type": "application/json",
                        },
                    };
                    const response = await axios.get(
                        `${backendURL}getUser`,
                        config
                    )
                    setCurrentUser(response.data)
                    // console.log(response.data)
                    setLoading(false)
                    return await response.data;
        
                } catch (error) {
                    setLoading(false)
                    setErrorMsg(error.response.data.message)
                    console.log(error.response.data.message)
                }
            };
            getUser()
        }
    }, []);


    const Logout = async () => {
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
        setCurrentUser({})  
        window.location.href = '/' 
    };





    return <UserContext.Provider value={{Logout,isLoading, setIsLoading, error, setError, userTotal, users,setUsers, currentUser, setCurrentUser, getUsers, getUserTotal, loading, errorMsg}}>{children}</UserContext.Provider>
}