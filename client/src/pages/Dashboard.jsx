import React from 'react'
import {DashboardSidebar } from '../component/DashboardSidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='relative grid grid-cols-5 bg-brown3'>
        <DashboardSidebar/>
        <div className=' col-span-5 md:col-span-4'>
          <Outlet/>
        </div>
    </div>
  )
}
