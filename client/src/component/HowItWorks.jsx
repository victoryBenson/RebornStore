import React, { useState } from 'react'
import { SearchNotFound } from './NotFound';
import { TbClipboardList } from 'react-icons/tb';
import workFlow from './database/workFlow';
import { Btn, Button } from '../shared/Button';
import { FaShopify } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
 

  const scrollToTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
  }

  return (
    <div className='flex flex-col items-center justify-center py-10 w-full space-y-10'>
        <p className='p-4 font-semibold text-3xl'>How It Works</p>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-4 overflow-x-auto no-scrollbar justify-items-center items-center'>
          {
            workFlow.map((data) => {
              return (
                <div key={data.image} className='flex flex-col items-center w-60 h-40'>
                  <span className='h-[80%]'><img src={data.image} alt="icon" className='h-full w-full object-contain' /></span>
                  <p className='capitalize text-brown p-2 font-semibold'>{data.text}</p>
                </div>
              )
            })
          }
        </div>
        <Link to="shop" onClick={scrollToTop}>
          <Btn text="shop now" />
        </Link>
    </div>
  )
}
