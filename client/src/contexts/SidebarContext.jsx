import { createContext, useEffect, useState} from "react";


export const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)
    const [showCart, setShowCart] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })

    const handleCart = () => {
      setShowCart(!showCart)
      // console.log('hello world')
    }

    return <SidebarContext.Provider value={{isActive, setIsActive, showCart, handleCart}}>{children}</SidebarContext.Provider>
}