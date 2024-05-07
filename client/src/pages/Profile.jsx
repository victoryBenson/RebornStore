import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProfile } from '../redux/features/auth/authActions';
import { getUser } from '../../../server/controllers/userController';


export const UserProfile = () => {
    const dispatch = useDispatch()
    const { currentUser, isLoading } = useSelector((state) => state.auth);
    // console.log(currentUser);



    const initialState = {
        username: currentUser?.username || "",
        email: currentUser?.email || "",
        address: currentUser?.address || "", 
        phone: currentUser?.phone || "",
        password: currentUser?.password || "",
        profilePicture: currentUser?.profilePicture || "",
        confirmPassword: ""
    }
    const [formData, setFormData] = useState(initialState);
    const {username, email, address, phone, password, confirmPassword, profilePicture} = formData;
    // console.log(`the passoword is ${password}`)

    // useEffect(() => {
    //     if(currentUser === null){
    //         dispatch(getUser())
    //     }
    // }, [dispatch, currentUser])
    
    useEffect(() => {
        if(currentUser){
            setFormData({
                username: currentUser?.username || "",
                email: currentUser?.email || "",
                address: currentUser?.address || "", 
                phone: currentUser?.phone || "",
                password: currentUser?.password || "",
                profilePicture: currentUser?.profilePicture || "",
                confirmPassword: ""
            })
        }
    }, [dispatch, currentUser])
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }


    const handleSubmit = async(e) => {
        e.preventDefault();

        const userData = {
            username,
            email,
            address,
            phone,
            profilePicture,
            password
        }
        await dispatch(UpdateProfile(userData))
    }

  return (
    <section className='text-sm md:w-[80%] transition-all p-1 bg-ivory'>
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
                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                    onChange={handleChange}
                                    defaultValue={currentUser?.username}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="name">Email</label>
                                <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="user@gmail.com"
                                className="w-full p-2 outline-none border border-gray/10 rounded"
                                onChange={handleChange}
                                defaultValue={currentUser?.email}
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
                                    className="w-full p-2 outline-none border border-gray/10 rounded"
                                />
                            </div>
                            <div className="w-full ">
                                <label htmlFor="name">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    placeholder="Phone number"
                                    className="w-full p-2 outline-none border border-gray/10 rounded"
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
                                className="w-full p-2 outline-none border border-gray/10 rounded"
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
                                className="w-full p-2 outline-none border border-gray/10 rounded"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mx-2 self-end space-x-2">
                            <button disabled={isLoading} className="bg-lightBrown text-ivory p-2 rounded shadow hover:shadow-lg">
                                { isLoading? 'Saving Changes...Please wait!' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form> 
    </section>
  )
}
