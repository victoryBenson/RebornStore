// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: null,
//     token: null
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         setCredentials: (state, {payload}) => {
//             const {user, assessToken }= payload
//             state.user = user
//             state.token = assessToken
//         },
//         logOut: (state, {payload}) => {
//             state.user = null,
//             state.token = null
//         }
//     }
// })

// export const {setCredentials, logOut} = authSlice.actions;

// export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;