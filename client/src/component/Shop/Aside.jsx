import React, { useContext } from 'react'
import { CiShoppingTag, CiViewList } from 'react-icons/ci'
import { FaUserCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IoStorefrontOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";


const Aside = () => {

  const scrollToTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
  };

  return (
    <div className='relative'>
      <div className="  md:bg-lightBrown text-white flex flex-row md:flex-col gap-4 p-3 transition-all md:w-40 lg:w-64 sticky top-20 md:min-h-screen">
          <NavLink 
              to={'/'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
                className='relative p-2 flex flex-col lg:flex-row items-center justify-center text-sm lg:text-base hover:bg-gray/10 rounded w-full text-brown md:text-white'
                  >
                  <GrHomeRounded className='mx-1'/>
                  <span >Home</span>
          </NavLink>
          <NavLink 
              to={'shop'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
                className='relative p-2 flex flex-col lg:flex-row items-center justify-center text-sm lg:text-base hover:bg-gray/10 rounded w-full text-brown md:text-white'
                  >
                  <IoStorefrontOutline  className='mx-1'/>
                  <span>Products</span>
          </NavLink>
          <NavLink 
              to={'orders'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
            className='relative p-2 flex flex-col lg:flex-row items-center justify-center text-sm lg:text-base hover:bg-gray/10 rounded w-full text-brown md:text-white'>
                  <CiShoppingTag className='mx-1'/>
                  <span>Order</span>
          </NavLink>
          <NavLink 
              to={'profile'} 
              onClick={scrollToTop}
              style={
                  ({isActive}) => {
                  return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem',backgroundColor: isActive && '#FFFFF0', color: isActive && 'gray', opacity: isActive && '40', borderBottomWidth: isActive && '1px'}
                  }} 
                  className='relative p-2 flex flex-col lg:flex-row items-center justify-center text-sm lg:text-base hover:bg-gray/10 rounded w-full text-brown md:text-white'>
                  <FaUserCheck className='mx-1'/>
                  <span>Account</span>
          </NavLink>
      </div>
    </div>
  )
}

export default Aside