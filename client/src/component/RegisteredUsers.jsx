import React, { useContext, useEffect, useState} from 'react'
import 'react-responsive-modal/styles.css';
import { UserContext } from '../contexts/UserContext';
import { truncateString } from '../utils';
import { SearchNotFound } from './NotFound';
import { TbShoppingBagSearch } from 'react-icons/tb';



export const tableHead = ["Image", "Username", "Email", "Role"];

const RegisteredUsers = () => {
    const {users, getUserTotal, getUsers} = useContext(UserContext)
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

  return (
    <div className='relative'>
            <div className='block md:flex  items-center justify-between py-5 sticky top-0 bg-brown3 md:px-2'>
                <h1 className='md:p-2 font-semibold md:text-lg'>Registered Users</h1>
                <div className='flex md:w-[70%]'>
                    <input 
                        type="search"
                        value={searchUser}
                        onChange={(e) => setSearchUser(e.target.value)} 
                        placeholder='search by name, email, role ...' 
                        className='p-3 bg-gray-light/20 outline-brown/10 w-full flex' 
                        autoFocus
                    />
                </div>
            </div>
            {/* search result label */}
            <div >{searchUser.length && searchOutput.length > 1 ? <span className='px-3 flex items-center'><TbShoppingBagSearch /> search result for "{searchUser}"...</span> : null}</div>
            {/* mapping search result */}
            { (searchOutput.length)? (
                <div className=''>
                    <div className=' p-1 py-5 items-center font-bold flex justify-around w-full text-sm'>
                        {tableHead.map((head, idx) => (
                            <p key={idx} className=''>{head}</p>
                        ))}
                    </div>
                    <div className='overflow-y-scroll max-h-48'>
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
    const { profilePicture, username, email, role} = item

    return( 
        <div className=' rounded border border-gray-light/40 px-10'>
            <div className=' p-1 items-center text-sm flex justify-around w-full '>
                <p className='flex justify-center items-center h-10'>
                    <img src={profilePicture} alt="image" className='w-full h-full object-contain top' />
                </p>
                <p className='capitalize text-center flex items-center'>
                    <span>{username}</span>
                </p>
                <p className='text-center flex items-center space-x-2 '>
                    <span>{truncateString(email,10)}</span>
                </p>
                <p className='text-center flex items-center space-x-2 '>
                    <span>{role}</span>
                </p>
            </div>
        </div> 
    )

}