import React from 'react'
import Typewriter from "typewriter-effect";


export const PromoDisplay = () => {
  return (
    <div className='flex hidden justify-center items-center h-12 bg-brown text-white drop-shadow-sm'>
        <div className='flex text-[.7rem] sm:text-lg px-1'>
            <Typewriter
                options={{
                strings: [ 
                  "Welcome here!",
                  "We aim to offer our customers a variety of the latest products.",
                  "For more enquires email us: victorybenson98@gmail.com"
                ],
                autoStart: true,
                loop: true,
            }}
            />
        </div>
    </div>
  )
}