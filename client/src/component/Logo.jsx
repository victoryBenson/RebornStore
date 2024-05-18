import React from 'react'
import { IoLogoIonic } from "react-icons/io";
import logoIcon from '../assets/image/logoIcon.png'


export const Logo = () => {
  return (
    <p className='flex items-center md:text-3xl text- font-bold '>
      <img src={logoIcon} alt="icon" className='h-24 w-24 object-contain ' />
    </p>
  )
}

export const HomeLogo = () => {
  return (
    <p className='flex items-center md:text-3xl text- font-bold '>
      <img src={logoIcon} alt="icon" className='h-24 w-24 object-contain ' />
    </p>
  )
}

export const HeroLogo = () => (
    <p className='flex items-center md:text-5xl text-5xl font-bold drop-shadow'>
        <IoLogoIonic className='mt-1'/>
        <span style={{fontFamily: "cursive"}} >Reborn</span>
    </p>
)