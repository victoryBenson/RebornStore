
// import axios from "axios";
// import authService from "./authServices";


// const backendURL = "https://reborn-api.onrender.com/api/v1/auth/";

// //loginUser
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const response = await axios.post(
//         `${backendURL}login`,
//         userData,
//         config
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// //regUser
// // export const register = createAsyncThunk(
// //   "auth/register",
// //   async(userData, { rejectWithValue }) => {
// //     try {
// //         console.log('processing...!')
// //         return registerUser(userData)
// //     } catch (error) {
// //       if (error.response && error.response.data.message) {
// //         return rejectWithValue(error.response.data.message);
// //       } else {
// //         return rejectWithValue(error.message);
// //       }
// //     }
// //   }
// // );

// //registerUser
// export const register = createAsyncThunk(
//   "auth/register",
//   async (userData, thunkAPI) => {
//       try {
//             const response = await axios.post(`${backendURL}register`, userData)
//             return response.data
//         //   return await authService.register(userData)
//       } catch (error) {
//           const message = (
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//           ) ||
//           error.message || 
//           error.toString();
//           return thunkAPI.rejectWithValue(message)
//       }
//   }
// )


// //getLoginStatus
// export const getLoginStatus = createAsyncThunk(
//   "auth/loginStatus",
//   async (_, {rejectWithValue}) => {
//       try {
//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         };
  
//         const response = await axios.post(
//           `${backendURL}getLoginStatus`,
//           userData,
//           config
//         );
//         return response.data;
//       } catch (error) {
//         if (error.response && error.response.data.message) {
//           return rejectWithValue(error.response.data.message);
//         } else {
//           return rejectWithValue(error.message);
//         }
//       }
//   }
// )

// //currentUser
// export const UpdateProfile = createAsyncThunk(
//   "auth/updateProfile",
//   async (userData, { rejectWithValue }) => {

//     try {
//         const {id} = useParams()
//         const config = {
//             headers: {
//             "Content-Type": "application/json",
//             },
//         };

//         const response = await axios.patch(
//             `${backendURL}updateProfile/${id}`,
//             userData,
//             config
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// //logout user
// export const LogoutUser = createAsyncThunk(
//   "auth/logout",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const response = await axios.get(
//         `${backendURL}logout`,
//         userData,
//         config
//       );
//       return response.data.message;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
