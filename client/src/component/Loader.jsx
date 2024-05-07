import React from 'react'
import { Circles } from 'react-loader-spinner'
import loadingGif from '../assets/image/loadingGif.gif'
export const Loader = () => {
  return (
    <div className=' justify-center flex flex-col items-center '>
        <p className='h-40'>
            <img src={`https://i.postimg.cc/G2tYzCRr/loadingif.gif`} alt=""  className='h-full '/>
        </p>
    </div>
  )
}

export const Loader2 = () => {
  return (
    <div>
      <Circles
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}