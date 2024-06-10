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
    <div className={` md:relative col-span-5 md:col-span-1 sm:gap-4 transition-all duration-100 md:bg-lightBrown md:text-white py-2 md:py-4`}>
        <div className=' sticky top-24 transition-all flex flex-row md:flex-col items-center md:items-start  md:space-y-4 m-2'>
            <ShowAdmin>
                <NavLink 
                    to={'home-dashboard'}
                    onClick={scrollToTop} 
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder',backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                        }} 
                    className=' md:p-2 relative flex flex-col lg:flex-row items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full '>
                        <RxDashboard className='md:mx-1' />
                        <span className=' text-sm lg:text-base'>Overview</span>
                </NavLink>
                <NavLink 
                    to={'admin-products'} 
                    onClick={scrollToTop}
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                        }} 
                    className='md:p-2  relative flex flex-col lg:flex-row items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full '>
                        <IoStorefrontOutline className='mx-1'/>
                        <span className='text-sm lg:text-base'>Products</span>
                </NavLink>
                <NavLink 
                    to={'createProduct'} 
                    onClick={scrollToTop}
                    style={
                        ({isActive}) => {
                        return { fontWeight: isActive && 'bolder', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                        }} 
                    className='md:p-2  relative flex flex-col lg:flex-row items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full'>
                        <IoCreateOutline className='mx-1'/>
                        <span className=' text-sm lg:text-base'>Create Product</span>
                </NavLink>
            </ShowAdmin>
        </div>
    </div>
  )
}

