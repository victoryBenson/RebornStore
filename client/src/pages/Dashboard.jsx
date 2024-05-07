import React from 'react'
import { DashboardMenu } from '../component/DashboardMenu'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='flex relative h-screen flex-col sm:flex-row'>
      <DashboardMenu/>
      <Outlet/>
    </div>
  )
}
