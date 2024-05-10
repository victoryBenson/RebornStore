import { createContext, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [loading, seteLoading] = useState({});
    
    const getProducts = async()=> {
        try {
            
        } catch (error) {
            // console
        }
    }

    return(
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
    )
}