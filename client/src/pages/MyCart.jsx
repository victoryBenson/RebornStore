import "aos/dist/aos.css"
import { BsCartCheck} from "react-icons/bs";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { CartItems } from "../component/CartItems";
import { CartSummary } from "../component/CartSummary";
import { SidebarContext } from "../contexts/SidebarContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";



export const MyCart = () => {
    const {itemAmount, cart} = useContext(CartContext)
    const {showCart, handleCart} = useContext(SidebarContext)


    
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <>
        <div className={`${showCart ? "z-[999] bg-gray/20 backdrop-blur-[1px] fixed top-0 left-0 right-0 h-screen w-full transition-all text-sm" : "hidden"}`} >
            <div data-aos="fade-right"  className={`z-[999] hamburger-menu lg:w-1/3 w-3/4 md:w-1/2 bg-white fixed shadow-lg right-0 md:-right-0 top-0  h-screen duration-500 transition-all`}>
                <div className='w-full '>
                    <div className='bg-white rounded py-4 flex items-center mt-1 justify-between m-4  right-0'>
                        <GrClose onClick={handleCart} size={20}  className="cursor-pointer"/>
                        <p className=' flex items-center font-bold text-lg'>
                            <BsCartCheck onClick={handleCart}/>
                            <span className='pl-1'>
                                my bag
                                ({itemAmount})
                            </span>
                        </p>
                    </div>
                    { !itemAmount? (
                        <div className='flex flex-col max-h-[100vh] justify-center items-center font-bold mt-5'>
                            <p className='md:text-lg p-2'>Your cart is currently empty</p>
                            <MdOutlineRemoveShoppingCart size={40}/>
                            <Link to={`layout/shop`} onClick={handleCart} className=' flex items-center hover:opacity-80 text-sm underline text-gray text-light'>
                                continue shopping
                            </Link>
                        </div>
                    ): 
                        <div className='class overflow-y-auto max-h-64'>
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
        </div>
    </>
  )
}

