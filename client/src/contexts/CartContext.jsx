import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    return(
        <CartContext.Provider value={{}}>{children}</CartContext.Provider>
    )
}