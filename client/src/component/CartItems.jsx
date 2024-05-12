import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { PiCurrencyNgn } from 'react-icons/pi'
import { BsTrash3 } from 'react-icons/bs'
import {FiMinus} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'

export const CartItems = ({item}) => {
    const {_id, image,name, price,amount } = item
    const {increaseCart, decreaseCart, removeCart} = useContext(CartContext)
  return (
    <div  className='h-40 p-2 my-4 space-x-2 flex text-sm rounded shadow bg-white'>
        <div className=' flex w-1/2 rounded-lg h-full'>
            <img src={image[0] || image} alt="image" className='h-full w-full object-cover rounded-lg ' />
        </div>
        <div className='flex flex-col items-start justify-center w-full px-1'>
            <p className={` md:text-[1rem] overflow-auto sm:overflow-hidden capitalize font-bold`}>{name}</p>
            <div className='flex items-center justify-between w-full py-2'>
                <p className='flex items-center'>
                    <span className='font-bold'>{amount === 1 ? "Price: " : "Total Amount: "}</span>
                    <PiCurrencyNgn className=''/>
                    {`${parseFloat(price * amount).toLocaleString()}`}
                </p>
                <p onClick={()=> removeCart(_id)} className='hover:opacity-70 cursor-pointer bg-red text-ivory flex items-center justify-center p-2 rounded shadow'>
                    <BsTrash3/> 
                    <span className='sm:flex hidden capitalize '>remove</span>
                </p>
            </div>
            <p className='py-1 rounded-lg flex justify-start items-center text-sm m-2 sm:w-32 w-28 '>
                <FiMinus onClick={() => decreaseCart(_id)} className='cursor-pointer hover:opacity-70 transition-all'/>
                <span className='font-bold mx-4'>{amount}</span>
                <AiOutlinePlus onClick={() => increaseCart(_id)} className='cursor-pointer hover:opacity-70 transition-all'/>
            </p>
        </div>
    </div>
  )
}
