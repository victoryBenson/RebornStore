import React from 'react'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <div className="flex-col md:flex md:flex-row">
      <Aside/>
      <div className='w-full min-h-screen'>
          <Outlet/>
      </div>
    </div>
  )
}

export default ShopLayout