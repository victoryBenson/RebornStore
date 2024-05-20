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
    <div  className='h-24 my-4 mx-2 space-x-2 flex text-sm rounded border border-lightBrown/10 bg-white'>
        <div className=' flex w-1/2 rounded-lg h-full'>
            <img src={image[0] || image} alt="image" className='h-full w-full object-contain rounded-xl p-2' />
        </div>
        <div className='flex flex-col items-start justify-center w-full px-1'>
            <p className={`capitalize font-bold`}>{name}</p>
            <div className='flex items-center justify-between w-full'>
                <p className='flex items-center'>
                    <span className='font-bold'>{amount === 1 ? "Price: " : "Total amount: "}</span>
                    <PiCurrencyNgn className=''/>
                    {`${parseFloat(price * amount).toLocaleString()}`}
                </p>
                <p onClick={()=> removeCart(_id)} className='hover:opacity-70 cursor-pointer border border-gray/20 flex items-center justify-center p-1 rounded '>
                    <BsTrash3/> 
                    <span className='sm:flex hidden capitalize text-sm'>remove</span>
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
