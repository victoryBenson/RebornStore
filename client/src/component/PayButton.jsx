import React, { useState } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const PayButton = () => {

  return(
    <div className='flex flex-col h-screen justify-center items-center'>
        <p>Opps!, our team is still working on this payment gateway!</p>
        <Link to={`/`} className='flex items-center hover:opacity-80 text-sm underline'>
            return home
            <BsCartCheck/>
        </Link>
    </div>
)
}
