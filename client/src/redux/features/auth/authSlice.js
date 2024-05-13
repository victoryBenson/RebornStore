
// import { getLoginStatus, loginUser, LogoutUser, register, UpdateProfile} from "./authActions";
// import { toast } from "react-toastify";



// const initialState = {
//   isLoading: false,
//   isLoggedIn: false,
//   isError: false,
//   isSuccess: false,
//   errMessage: "",
//   currentUser: null
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     Reset_Auth(state) {
//       state.isLoading = false;
//       state.isError = false;
//       state.isSuccess = false;
//       state.errMessage = "";
//       state.isLoggedIn = false;
//       state.currentUser = null
//     },
//   },
//   extraReducers: (builder) => {
//     builder

//     // register
//     .addCase(register.pending, (state) => {
//       state.isLoading = true
//       state.isError = null
//       })
//     .addCase(register.fulfilled, (state, {payload}) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isLoggedIn = true
//         state.currentUser = payload;
//         toast.success("Registration Successful")
//     })
//     .addCase(register.rejected, (state, {payload}) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.errMessage = payload;
//         state.isLoggedIn = false;
//         state.currentUser = null;
//         toast.error(payload)
//     })

//     //login User
//     .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false
//     })
//     .addCase(loginUser.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.currentUser = payload;
//         state.isSuccess = true;
//         state.isLoggedIn = true;
//         toast.success("Login Successful");
//     })
//     .addCase(loginUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.errMessage = payload;
//         state.isLoggedIn = false;
//         state.currentUser = null;
//         toast.error(payload);
//     })
   
//     //getLoginStatus
//     .addCase(getLoginStatus.pending, (state) => {
//         state.isLoading = true
//     })
//     .addCase(getLoginStatus.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isLoggedIn = action.payload;
//         console.log(action.payload);
//         if(action.payload === "invalid signature"){
//             state.isLoggedIn = false
//         }
//     })
//     .addCase(getLoginStatus.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//     })

//     //update User
//     .addCase(UpdateProfile.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false
//     })
//     .addCase(UpdateProfile.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.currentUser = payload;
//         state.isSuccess = true;
//         toast.success("Profile Updated");
//     })
//     .addCase(UpdateProfile.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.errMessage = payload;
//         state.currentUser = null;
//         toast.error(payload);
//     })
     

//     //logout User
//     .addCase(LogoutUser.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//     })
//     .addCase(LogoutUser.fulfilled, (state, {payload}) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isLoggedIn = false;
//         state.currentUser = null;
//         toast.success(payload);
//     })
//     .addCase(LogoutUser.rejected, (state, {payload}) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.errMessage = payload;
//         toast.error(payload);
//     });
//   },
// });

// export const { Reset_Auth } = authSlice.actions;
// export default authSlice.reducer;
