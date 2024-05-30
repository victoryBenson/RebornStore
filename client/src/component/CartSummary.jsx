import "aos/dist/aos.css"
import { BsCartCheck} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PiCurrencyNgn } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";


export const CartSummary = () => {
    const {total} = useContext(CartContext)
    const {handleCart} = useContext(SidebarContext)
    
  return (
    <div className=' rounded-lg p-4 shadow capitalize mx-4'>
        <p className='p-2 font-bold flex items-center text-lg'> <BsCartCheck/>Cart Summary</p>
        <div className='my-1 space-y-2'>
            <p className='flex flex-wrap justify-between items-center'>
                <span className=''>
                    item total:
                </span>
                <span className='flex items-center ml-2 font-extrabold text-lg'>
                    <PiCurrencyNgn className=''/>
                    {total.toLocaleString()}
                </span>
            </p>
            <p className='flex flex-wrap justify-between items-center'>
                <span className='flex items-center'>
                    delivery fee:
                </span>
                <span className='flex items-center ml-2 font-bold text-lg'>
                    <PiCurrencyNgn className=''/>0.00
                </span>
            </p>
        </div>
        <Link to={`/paymentBtn`} onClick={handleCart} className=''>
            <button className='bg-brown hover:opacity-80 w-full transition-all   text-white rounded p-3 my-2 flex items-center justify-center'>
                Check-Out (
                <span className='flex items-center'>
                    <PiCurrencyNgn />
                    {total.toLocaleString()}
                </span>
                )
            </button>
        </Link>
        <Link to={`layout/shop`} onClick={handleCart} className=' flex items-center hover:opacity-80 text-sm underline'>
            continue shopping
            <BsCartCheck/>
        </Link>
    </div>
  )
}
