import "aos/dist/aos.css"
import { BsCartCheck} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PiCurrencyNgn } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export const CartSummary = () => {
    const {total} = useContext(CartContext)
  return (
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
  )
}
