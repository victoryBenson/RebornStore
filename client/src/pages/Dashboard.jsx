import React from 'react'
import { DashboardMenu } from '../component/DashboardMenu'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='relative grid grid-cols-5'>
      <DashboardMenu/>
      <div className='col-span-4'>
        <Outlet/>
      </div>
    </div>
  )
}
