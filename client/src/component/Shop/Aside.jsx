import React, { useContext } from 'react'
import { CiShoppingTag, CiViewList } from 'react-icons/ci'
import { FaUserCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'
import { SidebarContext } from '../../contexts/SidebarContext'
import { IoStorefrontOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";


const Aside = () => {
  const {handleCart} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)


  return (
    <div className='relative'>
      <div className="  md:bg-lightBrown text-white flex flex-row md:flex-col gap-4 p-3 transition-all md:w-40 lg:w-72 sticky top-20 md:min-h-screen">
          <NavLink 
              to={'/'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
                className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full text-brown md:text-white'
                  >
                  <GrHomeRounded className='mx-1'/>
                  <span className='hidden md:flex'>Home</span>
          </NavLink>
          <NavLink 
              to={'shop'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
                className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full text-brown md:text-white'
                  >
                  <IoStorefrontOutline size={20} className='mx-1'/>
                  <span className='hidden md:flex'>Products</span>
          </NavLink>
          <NavLink 
              to={'orders'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
            className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full text-brown md:text-white'>
                  <CiShoppingTag size={20} className='mx-1'/>
                  <span className='text-xs md:text-sm absolute md:hidden bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-1  right-10'>90</span>
                  <span className='hidden md:flex'>Orders</span>
          </NavLink>
          <NavLink 
              to={'profile'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
            className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full text-brown md:text-white'>
                  <FaUserCheck size={20} className='mx-1'/>
                  <span className='hidden md:flex'>Profile</span>
          </NavLink>
      </div>
    </div>
  )
}

export default Aside