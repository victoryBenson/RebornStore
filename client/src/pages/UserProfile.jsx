import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { toast } from 'react-toastify';
import axios from 'axios'


let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://rebornv2api.onrender.com/api/v1/users/";
} else{
    backendURL = "http://localhost:3000/api/v1/users/";
}

const initialState = {
    username:  "",
    email: "",
    address: "", 
    phone:  "",
    // password: '',
    // confirmPassword: "",
}

export const UserProfile = () => {
    const { currentUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const navigate = useNavigate();
    const inputFile = useRef()
    const [formData, setFormData] = useState(initialState);
    const {username, email, address, phone} = formData;
    const [imageFile, setImageFile] = useState(null);
    
    useEffect(() => {
        if(currentUser){
            setFormData({
                username: currentUser?.username,
                email: currentUser?.email,
                address: currentUser?.address, 
                phone: currentUser?.phone,
            })
        }
    }, [ currentUser])
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

    // const handleImageChange = (e) =>{
    //     const file = e.target.files[0]
    //     setImageFile({...formData, file})
    // }

    // const handleClick = () => {
    //     inputRef.current.click()
        
    // };

// updateuser
const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {

        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };

        const res = await axios.put(`${backendURL}updateUser`, formData, config );

        setLoading(false)

        // console.log(res.data)

        toast.success("User updated successfully")

        location.reload()

    } catch (error) {
        setLoading(false)
        setErrorMsg(error.message)
        console.log(error.message)
        toast.error(error.message)
    }
}


  return (
    <section className='text-sm transition-all p-1 bg-brown3 h-screen mx-2 flex flex-col justify-center items-center'>
        <div className='bg-white p-3 rounded h-full my-3'>
            <div className='flex flex-col items-center justify-center my-4'>
                <div className=" rounded-full  mx-auto flex flex-col items-center justify-center text-center">
                    <label className='border-dashed border-2 border-gray-300 rounded-full h-32 w-32 flex justify-center items-center cursor-pointer p-4' ref={inputFile} >
                        <p className='text-gray-500'>
                            Click or drag &amp; drop to upload
                        </p>
                    </label>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='h-80'>
                <div className=''>
                    <div className=' gap-2 items-center justify-center'>
                        <div className='p-2 space-y-4 text-sm'>
                            <div className='flex flex-col md:flex-row  gap-4 '>
                                <div className="w-full relative ">
                                    <label htmlFor="name" className=''>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        placeholder="username"
                                        className="w-full p-3 outline-none border border-gray/10 rounded"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="name">Email</label>
                                    <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="user@gmail.com"
                                    className="w-full p-3 outline-none border border-gray/10 rounded"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row  gap-4 '>
                                <div className="w-full">
                                    <label htmlFor="name">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={handleChange}
                                        placeholder="Enter your nearest address"
                                        className="w-full p-3 outline-none border border-gray/10 rounded"
                                    />
                                </div>
                                <div className="w-full ">
                                    <label htmlFor="name">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={phone}
                                        placeholder="Phone number"
                                        className="w-full p-3 outline-none border border-gray/10 rounded"
                                        onChange={handleChange}
                                        defaultValue={currentUser?.phone}
                                    />
                                </div>
                            </div>
                            {/* <div className='flex flex-col md:flex-row  gap-4 '>
                                <div className="w-full relative">
                                    <label htmlFor="name" className=''>Current Password</label>
                                    <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    placeholder="Current Password"
                                    className="w-full p-3 outline-none border border-gray/10 rounded"
                                    onChange={handleChange}
                                    defaultValue={currentUser?.password}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="name">Retype new Password</label>
                                    <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    placeholder="retype new password"
                                    className="w-full p-3 outline-none border border-gray/10 rounded"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div> */}
                            <div className="mx-2 self-end space-x-2">
                                <button disabled={loading} className="bg-lightBrown text-ivory p-3 rounded shadow hover:shadow-lg">
                                    { loading? 'Please wait!...' : 'Save Changes'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    </section>
  )
}

