import { createSlice } from "@reduxjs/toolkit";
import { UsersTotal, deleteUser, getUsers, } from "./userAction";
import {toast} from 'react-toastify';

const initialState = {
    isLoading: false,
    isError: null,
    isSuccess: false,
    userInfo: null,
    errMessage: "",
    data: null,
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // RESET_AUTH(state) {
        //     state.isError = false;
        //     state.errMessage = "";
        //     state.isLoading = false;
        //     state.isSuccess = false;
        //     state.isRegistered = false;
        //     state.userInfo = null;
        //     state.data = null
        // }
    },
    extraReducers: (builder) => {
        builder

        // getUsers
        .addCase(getUsers.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(getUsers.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userInfo = payload;
            // toast.success(payload)
        })
        .addCase(getUsers.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.userInfo = null;
            toast.error(payload)
        })

            // UserCount
        .addCase(UsersTotal.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(UsersTotal.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;
        })
        .addCase(UsersTotal.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
            state.data = null;
        })

         // deleteUser
         .addCase(deleteUser.pending, (state) => {
            state.isLoading = true
            state.isError = null
        })
        .addCase(deleteUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userInfo = null;
        })
        .addCase(deleteUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.isError = true;
            state.errMessage = payload;
        })
    }
})

// export const {RESET_AUTH} =  userSlice.actions;
export default userSlice.reducer