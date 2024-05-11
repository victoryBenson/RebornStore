import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'


export const CartItems = ({item}) => {
    const {_id, image,name, price, } = item
    const {increaseCart, decreaseCart, itemAmount, removeCart} = useContext(CartContext)
  return (
    <div  className='h-40 p-2 my-4 space-x-2 flex text-sm rounded shadow bg-white'>
        <div className=' flex w-1/2 rounded-lg h-full'>
            <img src={image[0]} alt="image" className='h-full w-full object-cover rounded-lg ' />
        </div>
        <div className='flex flex-col items-start justify-center w-full px-1'>
            <p className={` md:text-[1rem] overflow-auto sm:overflow-hidden capitalize font-bold`}>{name}</p>
            <div className='flex items-center justify-between w-full py-2'>
                <p className='flex items-center'>
                    <PiCurrencyNgn className='mt-1'/>
                    {price?.toLocaleString()}
                </p>
                <p onClick={()=> removeCart(_id)} className='hover:opacity-70 cursor-pointer bg-brown text-ivory flex items-center justify-center p-1 rounded shadow'>
                    <BsTrash3/> 
                    <span className='sm: flex capitalize '>remove</span>
                </p>
            </div>
            <p className='py-1 rounded-lg flex justify-start items-center text-sm m-2 sm:w-32 w-28 '>
                <FiMinus onClick={() => decreaseCart(_id)} className='cursor-pointer hover:opacity-70 transition-all'/>
                <span className='font-bold mx-4'>{itemAmount}</span>
                <AiOutlinePlus onClick={() => increaseCart(_id)} className='cursor-pointer hover:opacity-70 transition-all'/>
            </p>
        </div>
    </div>
  )
}
