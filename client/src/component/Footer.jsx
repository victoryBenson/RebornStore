import React from 'react'
import {FaTwitter, FaFacebookF, FaInstagram,FaWhatsapp} from 'react-icons/fa'
import "aos/dist/aos.css"
import { PiLinkThin } from "react-icons/pi";
import { FaPhone } from 'react-icons/fa6'

export const Footer = () => {


  return (
    <div className='bg-brown'>
        <div  className=' text-white md:flex items-center md:px-10 p-3'>
            <div className='items-center justify-between md:w-1/2 sm:m-3 md:mb-0 order-last'>
                <div className='rounded sm:p-4 p-2'>
                    <h1 className='font-bold sm:text-2xl sm:p-2'>Don't wanna miss our offers?</h1>
                    <h2 className='md:py-2 text-ivory/60'>Drop your email address below and start receiving the best offers from <strong>Reborn</strong></h2>
                    <div>
                        <form className='flex flex-col space-y-2 h-full items-center justify-center m-2 transition-all'>
                            <input type="email" name="search" id="" placeholder='example@gmail.com' className='border border-gray/20 p-2 w-full rounded outline-none'/>
                            <p>
                                <button type="submit" className='border border-gray/20 p-2 mx-2 rounded hover:scale-95 translate-x-2 skew-y-2'>MALE</button>
                                <button type="submit" className='border border-gray/20 p-2 mx-2 rounded hover:scale-95 translate-x-2 skew-y-2'>FEMALE</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-center '>
                <div className='items-center justify-center space-y-4 md:space-y-0'>
                    <h1 className='font-bold text-xl flex text-center items-center'><PiLinkThin />Join Us</h1>
                    <div className='flex flex-wrap'>
                        <a href="tel:" className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaTwitter size={20}/>
                        </a>
                        <a href="tel:" className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaFacebookF size={20}/>
                        </a>
                        <a href="tel:" className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaInstagram size={20}/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+234-8136878980" className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaWhatsapp size={20}/>
                        </a>
                        <a href="tel:+234-8136878980" className='hover:scale-110 ease-in duration-100 rounded-full p-2'>
                            <FaPhone size={20}/>
                        </a>
                    </div>
                    <p className='text-ivory/50'> &copy;<span className=''>Reborn 2024</span>. All right reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}