import React from 'react'


export const DeleteBtn =(props) =>{
  return(
    <div className=''>
      <button className=' font-bold flex items-center justify-center animate-pulse text-sm border border-gray/20 hover:bg-opacity-70 transition-all p-2 md:p-3 rounded-lg '>
          {props.text}
      </button>
    </div>
  )
}