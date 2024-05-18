import React from 'react'
import { NotfoundGif } from '../component/Spinner'
import { TfiFaceSad } from "react-icons/tfi";

export const NotFound = () => {
  return (
    <div className='text-xl p-4 flex flex-col justify-center items-center h-screen'>
        {/* <NotfoundGif/> */}
        <span className='text-3xl font-bold flex items-center'>
          <TfiFaceSad className='mx-1'/>
          404
        </span>
        Page match Found!
    </div>
  )
}

export const SearchNotFound = () => {
  return (
    <div className='text-xl p-4 col-span-3 items-center flex flex-col justify-center'>
        <span className='text-3xl font-bold flex items-center'>
          <TfiFaceSad className='mx-1'/>
        </span>
        No match Found!
    </div>
  )
}
