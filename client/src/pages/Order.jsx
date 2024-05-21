import React from 'react'
import { Link } from 'react-router-dom'

export const Orders = () => {
    
  return (
    <div className='w-full h-screen items-center justify-center text-center'>
      <p>You have not made any order yet</p>
      <Link to={`/layout/shop`} className='underline'>Continue shopping</Link>
    </div>
  )
}
