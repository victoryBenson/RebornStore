import React, { useContext, useEffect} from 'react'
import 'react-responsive-modal/styles.css';
import { UserContext } from '../contexts/UserContext';
import { truncateString } from '../utils';



export const tableHead = ["Image", "Username", "Email", "Role"];

const RegisteredUsers = () => {
    const {users, getUserTotal, getUsers, searchResult, setSearchResult} = useContext(UserContext)

    if(!users){
        <div>Loading...Please wait!</div>
    }

    const searchOutput = users.((user) => {
        if(searchResult == "" || user.name.toLowerCase().includes(searchResult.toLowerCase())){
            return user
        }
    })

    useEffect( () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        if(token && userId){
            getUsers()
            getUserTotal()
        }
    }, []);

  return (
    <div className='relative '>
            <div className='flex items-center justify-between py-5 sticky top-0 bg-brown3 px-2'>
                <h1 className='md:p-2 font-semibold md:text-xl '>Registered Users</h1>
                <div className='flex w-[70%]'>
                    <input 
                        type="search"
                        value={searchResult}
                        onChange={(e) => setSearchResult(e.target.value)} 
                        placeholder='type your search here...' 
                        className='p-3 bg-gray-light/20 outline-brown/10 w-full flex' 
                    />
                </div>
            </div>
            {
             searchOutput ? (
                <div className=''>
                    <div className=' p-1 py-5 items-center font-bold flex justify-around w-full text-sm'>
                        {tableHead.map((head, idx) => (
                            <p key={idx} className=''>{head}</p>
                        ))}
                    </div>
                    <div className='overflow-y-scroll h-48'>
                        {
                            users?.map(item => (
                                <TableRow key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <p>No user found</p>
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