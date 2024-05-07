import React from 'react'
import { useSelector } from 'react-redux';

const Greeting = () => {
    const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className='p-5'>
        <p className='text-xl'>Welcome, <span className='font-semibold md:text-2xl font-poppins capitalize'>{currentUser ? currentUser.username : null}</span> </p>
        <p className='text-2xl md:text-3xl py-2 font-zeyada'>Discover fashion that defines you</p>
    </div>
  )
}

export default Greeting