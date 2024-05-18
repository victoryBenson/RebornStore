import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from './Logo';
import { CiShoppingTag, CiUser, CiViewList } from 'react-icons/ci';
import { MdOutlineDashboardCustomize, MdOutlineVerifiedUser } from 'react-icons/md';
import { GrFormViewHide } from "react-icons/gr";
import { ShowAdmin } from './hiddenLinks';
import { RxDashboard } from "react-icons/rx";
import { SidebarContext } from '../contexts/SidebarContext';
import { UserContext } from '../contexts/UserContext';
import { ProductContext } from '../contexts/ProductContext';

export const DashboardSidebar = () => {
    const [toggle, setToggle] = useState(false)
    const {isActive} = useContext(SidebarContext)
    const {userTotal, getUserTotal, getUsers} = useContext(UserContext)
    const {totalProduct} = useContext(ProductContext)
    const [counter, setCounter] = useState(false)   



    //check active user
    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            getUsers()
            getUserTotal()
        }
    }, []);

    const handleToggle = () => {
        setToggle(!toggle)
        window.scroll(0,0)
    }
  return (
    <div className={`col-span-5 md:col-span-1 sm:gap-4 transition-all duration-100 md:bg-lightBrown md:text-white py-2 md:py-4`}>
        <div className=' transition-al flex flex-row md:flex-col items-center md:items-start  md:space-y-4 m-2'>
            <ShowAdmin>
                <NavLink 
                    to={'home-dashboard'} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem',backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                        }} 
                    className='relative px-2 flex items-center justify-center text-lg lg:text-xl hover:bg-gray/10 rounded w-full '>
                        <RxDashboard className='md:mx-1' />
                        <span className='md:hidden text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-3  right-5'>{userTotal}</span>
                        <span className='hidden md:flex '>Overview</span>
                </NavLink>
                <NavLink 
                    to={'admin-products'} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                        }} 
                    className='relative p-2 flex items-center justify-center text-lg lg:text-xl hover:bg-gray/10 rounded w-full'>
                        <CiViewList className='mx-1'/>
                        <span className='md:hidden text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2  right-6'>{totalProduct}</span>
                        <span className='hidden md:flex'>Products</span>
                </NavLink>
            </ShowAdmin>
            <NavLink 
                to={'profile'} 
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem',backgroundColor: isActive && '#FFFFF0', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                    }} 
                className='p-2 flex flex-col sm:flex-row items-center justify-center text-xs lg:text-xl hover:bg-gray/10 rounded w-full'>
                    <CiUser size={20} className='mx-1'/>
                    <span className='hidden md:flex'>Profile</span>
            </NavLink>
            <NavLink 
                to={'orders'} 
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#FFFFF0', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                    }} 
                    className='relative p-2 flex flex-col sm:flex-row items-center justify-center text-lg md:text-xl hover:bg-gray/10 rounded w-full'>
                    <CiShoppingTag className='mx-1'/>
                    <span className='text-sm absolute md:hidden bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2  right-5'>90</span>
                    <span className='hidden md:flex'>Order</span>
            </NavLink>
        </div>
    </div>
  )
}

