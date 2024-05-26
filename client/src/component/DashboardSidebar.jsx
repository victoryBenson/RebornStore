import React, { useContext, useEffect, useState } from 'react'
import { NavLink, } from 'react-router-dom'
import { CiShoppingTag, CiViewList } from 'react-icons/ci';
import { ShowAdmin } from './hiddenLinks';
import { RxDashboard } from "react-icons/rx";
import { UserContext } from '../contexts/UserContext';
import { ProductContext } from '../contexts/ProductContext';
import { FaUserCheck } from 'react-icons/fa';
import { IoCreateOutline, IoStorefrontOutline } from "react-icons/io5";

export const DashboardSidebar = () => {
    const {userTotal, getUserTotal, getUsers} = useContext(UserContext)
    const {totalProduct} = useContext(ProductContext)   



    //check active user
    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            getUsers()
            getUserTotal()
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
      };

  return (
    <div className={`md:relative col-span-5 md:col-span-1 sm:gap-4 transition-all duration-100 md:bg-lightBrown md:text-white py-2 md:py-4`}>
        <div className='md:sticky md:top-24 transition-al flex flex-row md:flex-col items-center md:items-start  md:space-y-4 m-2'>
            <ShowAdmin>
                <NavLink 
                    to={'home-dashboard'}
                    onClick={scrollToTop} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem',backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                        }} 
                    className='relative px-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full '>
                        <RxDashboard className='md:mx-1' />
                        <span className='md:hidden text-xs md:text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-3  right-5'>{userTotal}</span>
                        <span className='hidden md:flex'>Overview</span>
                </NavLink>
                <NavLink 
                    to={'admin-products'} 
                    onClick={scrollToTop}
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                        }} 
                    className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full'>
                        <IoStorefrontOutline className='mx-1'/>
                        <span className='md:hidden text-xs md:text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2  right-6'>{totalProduct}</span>
                        <span className='hidden md:flex'>Products</span>
                </NavLink>
                <NavLink 
                    to={'createProduct'} 
                    onClick={scrollToTop}
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                        }} 
                    className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full'>
                        <IoCreateOutline className='mx-1'/>
                        <span className='md:hidden text-xs md:text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2  right-6'>{totalProduct}</span>
                        <span className='hidden md:flex'>Create Product</span>
                </NavLink>
            </ShowAdmin>
            <NavLink 
                to={'profile'} 
                onClick={scrollToTop}
                style={
                    ({isActive}) => {
                    return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem',backgroundColor: isActive && '#FFFFF0', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                    }} 
                className='p-2 flex flex-col sm:flex-row items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full'>
                    <FaUserCheck size={20} className='mx-1'/>
                    <span className='hidden md:flex'>Profile</span>
            </NavLink>
        </div>
    </div>
  )
}

