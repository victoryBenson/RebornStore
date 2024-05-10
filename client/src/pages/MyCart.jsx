import React, { useState } from 'react'
import "aos/dist/aos.css"
import { BsCartCheck, BsTrash3 } from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong} from "react-icons/fa6";
// import { decreaseCart, increaseCart, removeCart} from '../redux/features/cartSlide';
import { PiCurrencyNgn } from "react-icons/pi";
import { FiMinus} from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { PayButton } from '../component/PayButton';

export const MyCart = () => {
    // const {cartItems, cartTotalQuantity, cartTotalAmount} = useSelector(state => state.cart)

    // const dispatch = useDispatch();
       
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div onClick={scrollToTop} className='md:flex justify-between block md:mx-10 mx-4  md:space-x-4 lg:space-x-12 relative mt-24'>
        <div className='w-full'>
            <div className='bg-white rounded sticky top-14 py-4 flex items-center mt-1'>
                <p className='p-2 flex items-center font-bold text-lg'>
                    <BsCartCheck/>
                    <span className='pl-1'>
                        Shopping Bag
                        ({cartTotalQuantity})
                    </span>
                </p>
            </div>
            { !cartItems.length ? (
                <div className='flex flex-col h-[100vh] justify-center items-center font-bold mt-5'>
                    <p className='text-xl p-2'>Your cart is currently empty</p>
                    <MdOutlineRemoveShoppingCart size={40}/>
                </div>
            ): 
                <div className='class'>
                    {cartItems.map((item) => {
                        return (
                            <div key={item._id} className='h-40 p-2 my-4 space-x-2 flex text-sm rounded shadow bg-white'>
                                <div className=' flex w-1/2 rounded-lg h-full'>
                                    <img src={item?.image[0]} alt="image" className='h-full w-full object-cover rounded-lg ' />
                                </div>
                                <div className='flex flex-col items-start justify-center w-full px-1'>
                                    <p className={` md:text-[1rem] overflow-auto sm:overflow-hidden capitalize font-bold`}>{item?.name}</p>
                                    <div className='flex items-center justify-between w-full py-2'>
                                        <p className='flex items-center'>
                                            <PiCurrencyNgn className='mt-1'/>
                                            {item.price?.toLocaleString()}
                                        </p>
                                        <p onClick={()=> dispatch(removeCart(item._id))} className='hover:opacity-70 cursor-pointer bg-brown text-ivory flex items-center justify-center p-1 rounded shadow'>
                                            <BsTrash3/> 
                                            <span className='sm: flex capitalize '>remove</span>
                                        </p>
                                    </div>
                                    <p className='py-1 rounded-lg flex justify-start items-center text-sm m-2 sm:w-32 w-28 '>
                                        <FiMinus onClick={() => dispatch(decreaseCart(item._id))} className='cursor-pointer hover:opacity-70 transition-all'/>
                                        <span className='font-bold mx-4'>{item.cartQuantity}</span>
                                        <AiOutlinePlus onClick={() => dispatch(increaseCart(item._id))} className='cursor-pointer hover:opacity-70 transition-all'/>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
        <div className='md:mt-10'>
            <div className=' md:w-[30vw] rounded-lg p-4  shadow capitalize sticky top-20'>
                <p className='p-2 font-bold flex items-center'> <BsCartCheck/>Cart Summary</p>
                <div className='my-1'>
                    <p className='flex flex-wrap justify-between items-center'>
                        <span className=''>
                            item total:
                        </span>
                        <span className='flex items-center ml-2 font-extrabold text-lg'>
                            <PiCurrencyNgn className='mt-1'/>
                            {cartTotalAmount.toLocaleString()}
                        </span>
                    </p>
                    <p className='flex flex-wrap justify-between items-center'>
                        <span className='flex items-center'>
                            delivery fee:
                        </span>
                        <span className='flex items-center ml-2 font-bold text-lg'>
                            <PiCurrencyNgn className='mt-1'/>0.00
                        </span>
                    </p>
                </div>
                <Link to={`/paymentBtn`} className=''>
                    <button className='bg-brown hover:opacity-80 w-full transition-all   text-white rounded p-2 my-2 flex items-center justify-center'>
                        Check-Out (
                        <span className='flex items-center'>
                            <PiCurrencyNgn className='mt-1'/>
                            {cartTotalAmount.toLocaleString()}
                        </span>
                        )
                    </button>
                </Link>
                <Link to={`/`} className=' flex items-center hover:opacity-80 text-sm underline'>
                    continue shopping
                    <BsCartCheck/>
                </Link>
            </div>
        </div>
    </div>
  )
}