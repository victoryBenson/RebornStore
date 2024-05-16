import axios from "axios";
import { createContext, useEffect, useState} from "react";


export const UserContext = createContext();

let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://rebornv2api.onrender.com/api/v1/users/";
} else{
    backendURL = "http://localhost:3000/api/v1/users/";
}
console.log(backendURL)

export const UserProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [currentUser, setCurrentUser] = useState({})
    const [users, setUsers] = useState(null)
    const [userTotal, setUserTotal] = useState();

    //getuser
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
            setLoading(false)
            setCurrentUser(response.data)
            console.log(response.data)
            return response.data;

        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            console.log(error.response.data.message)
        }
    };

     //getUserTotal
    useEffect(() => {
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
        getUserTotal()
    })
    
    // get users
    useEffect(() => {
        const getUsers = async() => {
            setLoading(true)
            try {
                const config = {
                    headers: {
                    "Content-Type": "application/json",
                    },
                };
                const res = await axios.get(`${backendURL}getUsers`,config)
                const result = await res.data
                setLoading(false)
                setUsers(result)
                console.log(result)
                return result;

            } catch (error) {
                setLoading(false)
                setErrorMsg(error.message)
                console.log(error.message)
            }
        };
        getUsers()
    }, [])

     
    //check active user
    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            getUser()
            // getUsers()
        }
    }, []);

    
    const updateUser = async (userData) => {
        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };
        await axios.put(`${backendURL}updateUser`,userData,config );
        
    };





    return <UserContext.Provider value={{updateUser, userTotal, users,setUsers, currentUser, setCurrentUser, loading, errorMsg}}>{children}</UserContext.Provider>
}