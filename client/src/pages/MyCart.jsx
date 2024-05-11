import "aos/dist/aos.css"
import { BsCartCheck, BsTrash3 } from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { PiCurrencyNgn } from "react-icons/pi";
import { FiMinus} from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItems } from "../component/CartItems";



export const MyCart = () => {
    const {total, increaseCart, decreaseCart, itemAmount, cart, removeCart} = useContext(CartContext)
       
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
                        ({itemAmount})
                    </span>
                </p>
            </div>
            { !itemAmount? (
                <div className='flex flex-col h-[100vh] justify-center items-center font-bold mt-5'>
                    <p className='text-xl p-2'>Your cart is currently empty</p>
                    <MdOutlineRemoveShoppingCart size={40}/>
                </div>
            ): 
                <div className='class'>
                    {cart.map((item) => {
                        return (
                            <CartItems key={item._id} item={item}/>
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
                            {total.toLocaleString()}
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
                            {total.toLocaleString()}
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