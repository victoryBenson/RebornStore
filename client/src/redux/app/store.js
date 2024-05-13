// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import cartReducer, { getTotals } from "../features/cartSlide";
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer} from 'redux-persist';
// import userReducer from '../features/user/userSlice.js'
// import authReducer from '../features/auth/authSlice.js'                                                                                                                                                                                            
// import productReducer from "../features/product/productSlice.js"



// const persistConfig = {
//     key: 'root',
//     storage
// }

// const rootReducer = combineReducers({
//     auth: authReducer,
//     user: userReducer,
//     cart: cartReducer,
//     products: productReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistedReducer,

//     middleware: (getDefaultMiddlewire) => 
//     getDefaultMiddlewire({
//         serializableCheck: false,
//     }),
//     // devTools: process.env.NODE_ENV !== 'production'
//     devTools: true //set true only in development mode
    
// })


// export const persistor = persistStore(store)