import React, {useState} from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";
import { TiArrowMaximise } from "react-icons/ti";
import { CiCircleMinus} from "react-icons/ci";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { truncateString } from '../utils/index.js';
import { CiCirclePlus } from "react-icons/ci";
import { BsCartX } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RiHeart2Line } from "react-icons/ri";


export const Product = ({product}) => {
    const {_id, image, name, description, color,quantity, size, brand, price, oldPrice, category} = product

    const [open, setOpen] = useState(false);
    const [Color, setColor] = useState(color[1])
    const [Size, setSize] = useState(size[0])
    const [Image, setImage] = useState(image[0])

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleAddToCart = (product) => {
        // dispatch(addToCart(product))
    }

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }
    
  return (
    <div className='bg-white shadow rounded-xl w-full md:w-60 lg:w-64 h-80 relative group m-6 sm:m-4 text-sm md:text-normal'>
        <div className='h-1/2 flex justify-center relative overflow-hidden rounded-t-xl'>
            <div className='lg:group-hover:flex flex lg:hidden lg:bg-lightBrown/5 bg-ivory/10 transition-all absolute z-10 top-0 right-0 left-0 w-full h-full'>
                <div className='bottom-4 flex justify-center absolute w-full'>
                    <div className='flex flex-wrap items-center justify-center gap-2'>
                        <button onClick={()=> {onOpenModal(product); scrollToTop}} className='flex mx-2 items-center bg-white rounded-full p-2 shadow text-sm'>
                            <TiArrowMaximise/>
                            Quick view
                        </button>
                        <button onClick={()=> handleAddToCart(product)} className='flex mx-2 items-center bg-brown p-2 px-3 rounded-full text-white shadow text-sm'>
                            <BsBagCheck/> 
                            Add to bag
                        </button>
                        <Modal open={open} 
                            onClose={onCloseModal} center 
                            classNames={{
                                overlay: 'bg-black/60 customOverlay ', 
                                modal: ' md:w-full w-5/6 mx-auto h-[26rem] no-scrollbar transition-all shadow rounded-xl ',
                                overlayAnimationIn: 'customEnterOverlayAnimation',
                                overlayAnimationOut: 'customLeaveOverlayAnimation',
                                modalAnimationIn: 'customEnterModalAnimation',
                                modalAnimationOut: 'customLeaveModalAnimation',
                                }}
                                animationDuration={100}
                                >
                            <div className='sm:p-3 grid md:grid-cols-2 grid-cols-1 gap-4 '>
                                <div className='relative p-2'>
                                    <span className='absolute top-2 right-2 p-2 z-10  text-yellow rounded-full cursor-pointer'>
                                        <RiHeart2Line size={20}/>
                                    </span>
                                    <div className='h-72 w-full'>
                                        <img src={Image} className='object-contain w-full h-full rounded-lg' alt="image" />
                                    </div>
                                    <div className='flex pt-3  h-20 w-full justify-center'>
                                        {
                                            image.map((mImage, idx) => {
                                                return (
                                                    <div key={idx} onClick={()=> setImage(mImage)} className='cursor-pointer mx-1'>
                                                        <img src={mImage} alt="image" className='rounded object-contain h-full w-full' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h1 className=' font-bold text-xl text-brown capitalize'>{name}</h1>
                                    <div className='flex items-center space-x-4 flex-wrap px-3'>
                                        <p className='text-brown font-bold'>Brand:</p>
                                        <p className='text-gray py-2'>{brand}</p>
                                    </div>
                                    <p className=' py-4 p-2 text-gray'>{description}</p>
                                    <div className='py-3  flex items-center' >
                                        Color: {
                                            color.length ? 
                                                color.map((mColor, index) => {
                                                    return (
                                                        <div key={index} onClick={()=> setColor(mColor)} className={` ${ Color == mColor && `outline-current`} "ring p-3 px-5 shadow-md mx-2 rounded border-1 border-blue/10 " `} style={{backgroundColor: mColor}}>
                                                            {Color == mColor && <FaCheck className='text-gray-light' />}
                                                        </div>
                                                    )
                                                })
                                                :
                                                "As seen"
                                        }
                                    </div>
                                    <div className='py-3  flex flex-wrap items-center' >
                                        Size: 
                                        {
                                            size.length ?
                                            size.map((mSize, index) => {
                                                return (
                                                    <div key={index} onClick={()=> setSize(mSize)} className={`${Size == mSize && `outline outline-2 outline-current uppercase`} " p-1 px-4 shadow mx-2 rounded cursor-pointer m-1 " `} >
                                                        {mSize}
                                                    </div>
                                                )
                                            })
                                            :
                                            " As seen"
                                        }
                                    </div>
                                    <div className='flex flex-wrap sm:flex-nowrap items-center pt-4'>
                                        <p className='space-x-3 sm:w-1/3 justify-center flex mx-2 items-center bg-gray-light/50 p-3 rounded-full'>
                                            <CiCircleMinus 
                                                size={30} 
                                                onClick={() => dispatch(decreaseCart(_id))} 
                                                className='mx-1 cursor-pointer hover:opacity-10 transition-all'
                                            /> 
                                            <span>00</span>
                                            <CiCirclePlus 
                                                size={30} 
                                                onClick={() => dispatch(increaseCart(_id))}
                                                className='mx-1 cursor-pointer hover:opacity-10 transition-all'
                                            /> 
                                        </p>
                                        <p className='w-full py-3'>
                                            {
                                                quantity > 0 ? (
                                                    <button onClick={()=> handleAddToCart(product)} className='hover:opacity-80 transition-all w-full justify-center flex items-center bg-brown p-3 rounded-full text-ivory'>
                                                        <BsBagCheck className='mx-1'/> 
                                                        Add to cart
                                                    </button>
                                                )
                                                    :
                                                    (
                                                    <button className='cursor-not-allowed transition-all hover:opacity-10 w-full justify-center flex mx-2 items-center bg-gray-light p-3 rounded-full text-white'>
                                                        <BsCartX className='mx-1 text-[#d94444]'/> 
                                                        Out of stock
                                                    </button>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <span className='absolute top-2 right-2 p-2 z-10  text-yellow rounded-full cursor-pointer'>
                <RiHeart2Line size={20}/>
            </span>
            <img src={image[0]} alt="image" className='group-hover:scale-110 object-cover rounded-lg w-full cursor-pointer overflow-hidden duration-100 transition-all ' />
        </div>
        <div className='p-2 space-x-2 space-y-2'>
            <p className='font-bold px-2 text-brown capitalize'>{truncateString(name, 20)}</p>
            <p className='text-lightBrown capitalize'>Brand: {brand}</p>
            <p className='text-lightBrown capitalize'>Category: {category}</p>
            <p className='flex items-center gap-1 '>
                <span className=' text-lightBrown font-bold rounded flex items-center'>
                    <TbCurrencyNaira/>
                    {price?.toLocaleString()}
                </span>
                <span className=' line-through text-gray items-center flex'>
                    <TbCurrencyNaira/>
                    {oldPrice?.toLocaleString()}
                </span>
            </p>
        </div>
    </div>
  )
}
