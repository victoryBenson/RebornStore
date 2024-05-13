import React, { useContext, useEffect, useState} from 'react'
import { Loader } from '../component/Loader'
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { NavLink, useNavigate} from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { UserContext } from '../contexts/UserContext';



export const HomeDashboard = () => {
    const {itemAmount} = useContext(CartContext)
    const {currentUser, users} = useContext(UserContext)
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false)
    const [cartegoryMenu, setCategoryMenu] = useState(false)    
    const {username, role, profilePicture, email} = users
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const {items} = useContext(ProductContext)
  
    console.log(username)
    // console.log(users)
 
    // useEffect(() => {
    //     dispatch(getTotalProduct())
    //     dispatch(UsersTotal())        
    //     dispatch(getUsers())     
    // }, [])

    
    if(loading) return <div className='flex justify-center h-screen w-full'><Loader/></div>
    if(errorMsg) return <div className='flex justify-center'>Error:{errorMsg}</div>
    
  return (
    <section className='max md:w-full mx-2 shadow'>
        <div className='flex flex-wrap justify-evenly items-center py-5 space-y-4'>
            <div>
                <NavLink to={`/dashboard/admin-products`} className='border border-lightBrown/10 shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                    {/* <p>({product.data})</p> */}
                    <p className='flex items-center'><BsCartCheck/>Available Products</p>
                </NavLink>
            </div>
            <div className=' bg-blue text-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                {/* <p>({data})</p> */}
                <p className='flex items-center'><FaUsersViewfinder />Registered Users</p>
            </div>
            <div className=' bg-ivory shadow-lg w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl'>
                <span>(199)</span>
                <p className='flex items-center'><MdOutlineSell/>Orders</p>
            </div>
        </div>
        <div>
            <h1 className='p-2 font-bold text-2xl'>Registered Users</h1>
            <div className=''>
                <div className='min-h-fit w-full my-4 '>
                    <div className='h-full flex justify-between sm:justify-center space-x- rounded shadow sm:p-3'>
                        <div className='w-[20%] sm:w-[50%] h-[16vh]'>
                            <div className='flex justify-center items-center h-full'>
                                <img src={profilePicture} alt="image" className='w-full h-full object-contain top' />
                            </div>
                        </div>
                        <div className='w-full h-[16vh] p-2 flex items-center'>
                            <div>
                                <p className='text-center flex items-center space-x-2 '>
                                    <span className='font-bold'>Name:</span>
                                    <span>{username}</span>
                                </p>
                                <p className='text-center flex items-center space-x-2 '>
                                    <span className='font-bold'>Email:</span>
                                    <span>{email}</span>
                                </p>
                                <p className='text-center flex items-center space-x-2 '>
                                    <span className='font-bold'>Role:</span>
                                    <span>{role}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {
                    users.map((u) => {
                        return (
                            <Users key={user._id} user={user} />
                        )
                    })
                } */}
            </div>
        </div>
        <div>
            <h1 className='p-2 font-bold text-2xl'>Orders</h1>
        </div>
    </section>
  )
}


// export const Users = ({user}) => {
//     const { profilePicture, username, email, role} = user

//     return(
//         <div className='min-h-fit w-full my-4 '>
//             <div className='h-full flex justify-between sm:justify-center space-x- rounded shadow sm:p-3'>
//                 <div className='w-[20%] sm:w-[50%] h-[16vh]'>
//                     <div className='flex justify-center items-center h-full'>
//                         <img src={profilePicture} alt="image" className='w-full h-full object-contain top' />
//                     </div>
//                 </div>
//                 <div className='w-full h-[16vh] p-2 flex items-center'>
//                     <div>
//                         <p className='text-center flex items-center space-x-2 '>
//                             <span className='font-bold'>Name:</span>
//                             <span>{username}</span>
//                         </p>
//                         <p className='text-center flex items-center space-x-2 '>
//                             <span className='font-bold'>Email:</span>
//                             <span>{email}</span>
//                         </p>
//                         <p className='text-center flex items-center space-x-2 '>
//                             <span className='font-bold'>Role:</span>
//                             <span>{role}</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     )

// }