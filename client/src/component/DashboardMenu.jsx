import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from './Logo';
import { CiShoppingTag, CiUser, CiViewList } from 'react-icons/ci';
import { MdOutlineDashboardCustomize, MdOutlineVerifiedUser } from 'react-icons/md';
import { GrFormViewHide } from "react-icons/gr";
import { ShowAdmin } from './hiddenLinks';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const DashboardMenu = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
        window.scroll(0,0)
    }
  return (
    <div className=' sm:gap-4 transition-all bg-lightBrown text-white sm:h-screen py-4'>
        <div className=' transition-all flex flex-row sm:flex-col items-center w-full'>
            <ShowAdmin>
                <NavLink 
                    to={'home-dashboard'} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                        }} 
                    className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                        <GrFormViewHide className='mx-1' />
                        <span className='hidden md:flex'>Overview</span>
                </NavLink>
                <NavLink 
                    to={'admin-products'} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                        }} 
                    className='p-2 flex items-center text-xl hover:bg-gray/10 hover:rounded '>
                        <CiViewList className='mx-1'/>
                        <span className='hidden md:flex'>Products</span>
                </NavLink>
            </ShowAdmin>
            <NavLink 
                to={'profile'} 
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                    }} 
                className='p-2 flex flex-col sm:flex-row items-center text-xs sm:text-xl hover:bg-gray/10 hover:rounded '>
                    <CiUser/>
                    Profile
            </NavLink>
            <NavLink 
                to={'orders'} 
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem'}
                    }} 
                    className='p-2 flex flex-col sm:flex-row items-center text-sm sm:text-xl hover:bg-gray/10 hover:rounded '>
                    <CiShoppingTag/>
                    Order
            </NavLink>
        </div>
    </div>
  )
}

