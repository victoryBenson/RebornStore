import React, { useContext } from 'react'
import { CiShoppingTag, CiViewList } from 'react-icons/ci'
import { FaUserCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'
import { SidebarContext } from '../../contexts/SidebarContext'
import { IoStorefrontOutline } from "react-icons/io5";

const Aside = () => {
  const {handleCart} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)


  return (
    <div className='relative'>
      <div className="  md:bg-lightBrown text-white flex flex-row md:flex-col gap-4 p-3 transition-all md:w-40 lg:w-80 sticky top-20 md:min-h-screen">
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
          {/* <div onClick={handleCart}  
              className='p-2 flex  sm:flex-row text-base lg:text-xl hover:bg-gray/10 rounded w-full items-center justify-center cursor-pointer text-brown md:text-white'>
              <span className='relative'>
                <BsCartCheck size={20} className='mx-1'/>
                <span  className='absolute -top-3 -right-2 items-center flex justify-center text-sm bg-brown text-ivory rounded-full p-[1px] px-1' >{itemAmount}</span>
              </span>
              <span className='hidden md:flex'>Cart</span>
          </div> */}
          <NavLink 
              to={'orders'} 
              style={
                ({isActive}) => {
                return { fontWeight: isActive && 'bolder', padding: isActive && '0.5rem', backgroundColor: isActive && '#ededed', color: isActive && 'gray', opacity: isActive && '40',borderBottomWidth: isActive && '1px'}
                }} 
            className='relative p-2 flex items-center justify-center text-base md:text-xl hover:bg-gray/10 rounded w-full text-brown md:text-white'>
                  <CiShoppingTag size={20} className='mx-1'/>
                  <span className='text-xs md:text-sm absolute md:hidden bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2  right-5'>90</span>
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