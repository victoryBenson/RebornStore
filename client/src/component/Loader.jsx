import React from 'react'
import { Circles } from 'react-loader-spinner'
// import loadingGif from '../assets/image/loadingGif.gif'

export const Loader = () => {
  return (
    <div className=' justify-center flex items-center'>
      <p className=''>
        <iframe src="https://lottie.host/embed/3ad4c310-5836-442d-a7f6-7d451cbb213c/gpEcTLagSW.json"></iframe>
        <p className='text-center font-poppins'>Please wait...</p>
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