// import axios from "../../../utils/axios";
import axios from "axios";



// const backendURL = "https://reborn-api.onrender.com/api/auth/";

// export const registerUser = async(userData) => {
//     const response = await axios.post(
//         `register`,
//         JSON.stringify(userData),
//         // JSON.stringify({ username, email, password, role }),

//          {
//             responseType: 'json',
//             headers: {
//                 "Accept": "application/json",
//                 "Accept-Encoding": "deflate"
//             },
//             withCredentials: true
//          }
//     );
//     return response.data
// }

//registerUser

const register = async(userData) => {
    const response = await axios.post("https://reborn-api.onrender.com/api/v1/auth/register", userData)
    return response.data
}

const authService = {
    register,
    
}

export default authService;