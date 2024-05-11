import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://reborn-api.onrender.com/api/v1/users/";
} else{
    backendURL = "http://localhost:3000/api/v1/users/";
}
console.log(backendURL)

export const UserProvider = ({children}) => {
    const [errorMsg, setErrorMsg] = useState();
    const [loading, setLoading] = useState(false)



    //getUser
// useEffect(()=>{
//     const getUser = async () => {
//         try {
//           const config = {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           };
          
    
//           const response = await axios.get(
//             `${backendURL}getUser`,
//             config
//           );
  
//           return response.data;
//         } catch (error) {
//             setLoading(false)
//             setErrorMsg(error.response.data.message)
//             console.log(error.response.data.message)
//             toast.error(error.response.data.message)
//         }
//       }
//       getUser()
// },[])

const updateUser = async (userData) => {
    const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    await axios.put(`${backendURL}updateUser`,userData,config );
    
};



    return <UserContext.Provider value={{updateUser}}>{children}</UserContext.Provider>
}