import React,{useEffect, useState}from 'react'
import { useLocation } from 'react-router-dom'

export const ConditionRoute = ({children}) => {
    const location = useLocation(false)
    const [display, setDisplay] = useState()

    useEffect(() => {    
      if (location.pathname === '/login' || location.pathname === '/register') {
        setDisplay(false)
      }else{
        setDisplay(true)
      }
    }, [location])
    
  return (
    // display
    <div>{display && children}</div>
  )
}