import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { toast } from 'react-toastify';


export const UserProfile = () => {
    const { updateUser, currentUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const navigate = useNavigate();


    const initialState = {
        username:  "",
        email: "",
        address: "", 
        phone:  "",
        password: "",
        profilePicture:  "",
        confirmPassword: ""
    }
    const [formData, setFormData] = useState(initialState);
    const {username, email, address, phone, password, confirmPassword, profilePicture} = formData;
    
    
    useEffect(() => {
        if(currentUser){
            setFormData({
                username: currentUser?.username,
                email: currentUser?.email,
                address: currentUser?.address, 
                phone: currentUser?.phone,
                password: currentUser?.password,
                profilePicture: currentUser?.profilePicture,
                confirmPassword: ""
            })
        }
    }, [ currentUser])
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

// updateuser
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUser(formData)
            setLoading(false)
            toast.success("user updated successfully")
            location.reload()
        } catch (error) {
            setLoading(false)
            setErrorMsg(error.message)
            console.log(error.message)
            toast.error(error.message)
        }
    }

    useEffect(() =>{
        const token = sessionStorage.getItem('token')
        !token && navigate('/login') 
    },[])

  return (
    <section className='text-sm transition-all p-1 bg-brown3'>
        <form onSubmit={handleSubmit} className='h-screen mx-2'>
            <div className=''>
                <div className=' gap-2 items-center justify-center'>
                    <div className='flex flex-col items-center justify-center '>
                        <div className=" rounded-full h-20 w-20 flex items-center justify-center text-center">
                            <img src={currentUser?.profilePicture}
                            alt="image"
                            />
                            <label htmlFor='label'>
                                <input type="file" name="upload" id="" className='' />
                            </label>

                        </div>
                    </div>
                    <div className='p-2 space-y-4 text-sm'>
                        <div className='flex gap-4'>
                            <div className="w-full relative">
                                <label htmlFor="name" className=''>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    placeholder="username"
                                    className="w-full p-3 outline-none border border-gray/10 rounded"
                                    onChange={handleChange}
                                    // defaultValue={currentUser?.username}
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
                                // defaultValue={currentUser?.email}
                                />
                            </div>
                        </div>
                        <div className='flex gap-4'>
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
                        <div className='flex gap-4 '>
                            <div className="w-full relative">
                                <label htmlFor="name" className=''>Current Password</label>
                                <input
                                type="password"
                                name="password"
                                value={password}
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
                                value={confirmPassword}
                                placeholder="retype new password"
                                className="w-full p-3 outline-none border border-gray/10 rounded"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mx-2 self-end space-x-2">
                            <button disabled={loading} className="bg-lightBrown text-ivory p-2 rounded shadow hover:shadow-lg">
                                { loading? 'Saving Changes...Please wait!' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form> 
    </section>
  )
}
