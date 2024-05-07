import React from 'react'
import { FaShopify } from 'react-icons/fa6';
import Typewriter from "typewriter-effect";

export const Button = () => {
  return (
    <div className=''>
        <button className='font-bold flex items-center justify-center font-poppins text-xl bg-brown hover:bg-opacity-80 transition-all text-ivory p-3 rounded w-60 '>
            <Typewriter
                options={{
                strings: [ "Discover","Explore!","Shop!"],
                autoStart: true,
                loop: true,
            }}
            />
        </button>
    </div>
  )
}


export const Btn =(props) =>{
  return(
    <div className=''>
      <button className=' font-bold flex items-center justify-center animate-pulse text-xl bg-brown hover:bg-opacity-70 transition-all text-ivory p-3 rounded w-60 gap-2'>
          <FaShopify/>
          {props.text}
      </button>
    </div>
  )
}