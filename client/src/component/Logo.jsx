import React from 'react'
import { IoLogoIonic } from "react-icons/io";

export const Logo = () => {
  return (
    <p className='flex items-center md:text-3xl text-2xl font-bold '>
        <IoLogoIonic className='-mt-4'/>
        <span className='drop-shadow font-zeyada font-[800] text-4xl'>Reborn</span>
    </p>
  )
}

export const HeroLogo = () => (
    <p className='flex items-center md:text-5xl text-5xl font-bold drop-shadow'>
        <IoLogoIonic className='mt-1'/>
        <span style={{fontFamily: "cursive"}} >Reborn</span>
    </p>
)