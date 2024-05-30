import React, { useContext, useEffect, useState} from 'react'
import 'react-responsive-modal/styles.css';
import { UserContext } from '../contexts/UserContext';
import { truncateString } from '../utils';
import { SearchNotFound } from './NotFound';
import { TbShoppingBagSearch } from 'react-icons/tb';
import { Loader } from './Loader';
import axios from 'axios';

export const tableHead = ["Image", "Username", "Email", "Role"];

let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://rebornv2api.onrender.com/api/v1/users/";
} else{
    backendURL = "http://localhost:3000/api/v1/users/";
}

const RegisteredUsers = () => {
    const {users, getUserTotal, getUsers, error, isLoading} = useContext(UserContext)
    const [searchUser, setSearchUser] = useState('')

    let searchOutput
    if(users !== null){
        searchOutput = users.filter((user) => {
            if(searchUser == "" || `${user.username} ${user.email} ${user.role} `.toLowerCase().includes(searchUser.toLowerCase())){
                return user
            }
        })
    }
    // console.log(searchOutput)

    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            getUsers()
            getUserTotal()
        }
    }, []);

    if (isLoading) {
        <div><Loader/></div>
    }

    if (error) {
        <div>Error: {error}</div>
    }

  return (
    <div className='relative'>
            <div className='block md:flex  items-center justify-between py-5 sticky top-0 bg-brown3 md:px-2'>
                <h1 className='md: p-2 font-semibold md:text-lg'>Registered Users</h1>
                <div className='flex md:w-[70%] bg-white'>
                    <input 
                        type="search"
                        value={searchUser}
                        onChange={(e) => setSearchUser(e.target.value)} 
                        placeholder='search by name, email, role ...' 
                        className='p-3 border-brown/5 rounded border outline-none w-full flex z-[999] bg-white' 
                        // autoFocus
                    />
                </div>
            </div>
            {/* search result label */}
            <div >{searchUser.length && searchOutput.length > 1 ? <span className='px-3 flex items-center'><TbShoppingBagSearch /> search result for "{searchUser}"...</span> : null}</div>
            {/* mapping search result */}
            { (searchOutput.length)? (
                <div className='relative'>
                    {/* <div className=' p-1 md:py-5 items-center font-bold flex justify-evenly w-full text-sm'>
                        {tableHead.map((head, idx) => (
                            <p key={idx} className=''>{head}</p>
                        ))}
                    </div> */}
                    <div className='overflow-y-scroll min-h-screen'>
                        {
                            searchOutput.map(item => (
                                <TableRow key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <SearchNotFound/> 
            )
            }
        </div>
  )
}

export default RegisteredUsers;


export const TableRow = ({item}) => {
    const { profilePicture, username, email, role, _id} = item
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

         //deleteProduct 
         const handleDelete = async(e) => {
            e.preventDefault()
            setLoading(true)
    
            try {
                const config = {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  };
          
                  await axios.delete(`${backendURL}deleteUser/${_id}`, config);
                   setLoading(false)
                  toast.success("User deleted successfully")
                  location.reload()
                  return
            } catch (error) {
                setErrorMsg(error.message)
                console.log(error.message)
                toast.error(error.message) 
                setLoading(false)
            }
        }

    return( 
        <div className=' rounded border border-gray-light/20 md:px-10 '>
            <div className=' p-1 items-center text-sm flex justify-around w-full '>
                <p className='flex justify-center items-center h-10'>
                    <img src={profilePicture} alt="image" className='w-full h-full object-contain top' />
                </p>
                <p className='capitalize text-center flex items-center'>
                    <span>{username}</span>
                </p>
                <p className='text-center flex items-center space-x-2 '>
                    <span>{truncateString(email,20)}</span>
                </p>
                <p className='text-center flex items-center space-x-2 '>
                    <span>{role}</span>
                </p>
                <p className='text-center flex items-center space-x-2 '>
                    {/* <button disabled={loading}>{loading? 'Please wait...' : <p className='text-red'>Delete</p>}</button> */}
                </p>
            </div>
        </div> 
    )

}