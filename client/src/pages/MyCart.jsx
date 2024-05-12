import "aos/dist/aos.css"
import { BsCartCheck} from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItems } from "../component/CartItems";
import { CartSummary } from "../component/CartSummary";



export const MyCart = () => {
    const {itemAmount, cart, } = useContext(CartContext)
    // console.log(cart)
       
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div onClick={scrollToTop} className='md:flex justify-between block md:mx-10 mx-4  md:space-x-4 lg:space-x-12 relative'>
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
        <div>
            <CartSummary/>
        </div>
    </div>
  )
}