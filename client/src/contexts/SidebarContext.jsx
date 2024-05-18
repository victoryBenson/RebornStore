import axios from "axios";
import { createContext, useEffect, useState} from "react";


export const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
      })

    return <SidebarContext.Provider value={{isActive, setIsActive}}>{children}</SidebarContext.Provider>
}