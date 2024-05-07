// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getProducts, useFetchItemQuery, useFetchItemsQuery } from "./productServices";

// const initialState = {
//     items: [],
//     cart:[],
//     isError: '',
//     isLoading: false
// }

// // export const fetchProducts = createAsyncThunk("product/fetchProducts", getProducts)


// const productSlide = createSlice({
//     name: 'product',
//     initialState,
//     extraReducers: (builder) => {
//         builder
//         //fetchProducts
//         .addCase(useFetchItemsQuery.pending, (state) => {
//             state.isLoading = true
//         })
//         .addCase(useFetchItemsQuery.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isSuccess = true; 
//             state.items = action.payload;
//             // console.log(action.payload)
//         })
//         .addCase(useFetchItemsQuery.rejected, (state, {payload}) => {
//             state.isLoading = false;
//             state.items = [];
//             state.isError = payload;
//         })

//         //fetch product
//         .addCase(useFetchItemQuery.pending, (state, {payload}) => {
//             state.isLoading = true
//         })

//         .addCase(useFetchItemQuery.fulfilled, (state, {payload}) => {
//             state.isLoading = false;
//             state.isSuccess = true; 
//             state.items = payload;
//         })
//         .addCase(useFetchItemQuery.rejected, (state, {payload}) => {
//             state.isLoading = false;
//             state.items = [];
//             state.isError = payload;
//         })
//     }
// })

// export const { addToCart} = productSlide.actions;
// export default productSlide.reducer;