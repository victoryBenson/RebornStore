import React, { useContext, useEffect, useState} from 'react'
import { BsCartCheck } from "react-icons/bs";
import 'react-responsive-modal/styles.css';
import { ProductContext } from '../contexts/ProductContext';
import { UserContext } from '../contexts/UserContext';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaUsers } from 'react-icons/fa';
import { IoPricetagOutline } from "react-icons/io5";
import RegisteredUsers from '../component/RegisteredUsers';



export const HomeDashboard = () => {
    const {userTotal, getUserTotal, getUsers} = useContext(UserContext)
    const {totalProduct} = useContext(ProductContext)
    const [counter, setCounter] = useState(false)     


    //check active user
    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            getUsers()
            getUserTotal()
        }
    }, []);

  
  return (
    <section className='p-5 md:w-full shadow '>
        {/* dashboard overview */}
        <div className='md:p-2 font-semibold md:text-xl my-3 font-rubik'>Dashboard Overview</div>
        <div className='py-15 hidden md:block'>
            <ScrollTrigger onEnter={ ()=> setCounter(true)} onExit={()=> setCounter(false)}>
                { counter && (
                    <div className='flex items-center justify-between md:justify-around p-5 md:px-10 rounded bg-gray/5'>
                        <div className='flex flex-col items-center justify-center cursor-pointer text-center counter font-bold '>
                            <div className='relative'>
                                <CountUp start={0} end={totalProduct} duration={2} className='text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-3 -right-2' />
                                <BsCartCheck size={30}/>
                            </div>
                            <p className='text-sm lg:text-lg count flex items-center'> Avaliable Stock</p>
                        </div>
                        <div className='flex flex-col items-center justify-center cursor-pointer text-center counter font-bold'>
                            <div className='relative'>
                                <CountUp start={0} end={userTotal} duration={2} className='text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-3 -right-2' />
                                <FaUsers size={30}/>
                            </div>
                            <p className='text-sm lg:text-lg flex items-center'>Registered Users</p>
                        </div>
                        <div className='flex flex-col items-center justify-center cursor-pointer text-center counter font-bold'>
                            <div className='relative'>
                                <CountUp start={0} end={50} suffix='+' duration={2} className='text-sm absolute bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2 -right-7' />
                                <IoPricetagOutline size={30}/>
                            </div>
                            <p className='text-sm lg:text-lg flex items-center'>Orders</p>
                        </div>
                    </div>
                )}
            </ScrollTrigger>
        </div>

        {/* Registered Users */}
        <RegisteredUsers/>
    </section>
  )
}
