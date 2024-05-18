import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export const SocialMedia = () => {
  return (
    <div className='flex flex-wrap transition-all '>
        <p className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
            <FaXTwitter className='text-[#4691b0'/>
        </p>
        <p className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
            <FaFacebookF />
        </p>
        <p className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
            <FaInstagram />
        </p>
        <p className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
            <BiLogoGmail />
        </p>
    </div>
  )
}
