import React, { useContext, useEffect, useRef, useState } from 'react'
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
    profilePicture: null,
    imagePreview: null
}

export const UserProfile = () => {
    const { currentUser} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const inputRef = useRef();
    const [formData, setFormData] = useState(initialState);
    const {username, email, address, phone, profilePicture, imagePreview} = formData;
   

    useEffect(() => {
        if(currentUser){
            setFormData({
                username: currentUser?.username,
                email: currentUser?.email,
                address: currentUser?.address, 
                phone: currentUser?.phone,
                profilePicture: currentUser?.profilePicture
            })
        }
    }, [ currentUser])
 

    const handleClick = () => {
        inputRef.current.click()  
    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

    //image
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0]
        if(imageFile){
            setFormData((prevData) => ({ 
                ...prevData,
                profilePicture: imageFile,
                imagePreview: URL.createObjectURL(imageFile)
            }))

        }
    };


    // update-user
    const handleSubmit = async(e) => {
        e.preventDefault();

        setLoading(true);

        const data = new FormData();
        data.append('username', formData.username);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('address', formData.address);
        if (formData.profilePicture) {
            data.append('profilePicture', formData.profilePicture);
        }

        try {
            await axios.put(`${backendURL}updateUser`, data);

            toast.success("User Updated Successfully")
            location.reload()

        } catch (error) {
            setErrorMsg(error.message)
            console.log(error.message)
            toast.error(error.message)

        } finally{
            setLoading(false)
        }
    }


  return (
    <section className='text-sm transition-all p-1 bg-brown3 h-screen mx-2 flex flex-col justify-center items-center'>
        <div className='bg-white p-3 rounded h-full my-3'>
            <form onSubmit={handleSubmit} className='h-80'>
                <div className=''>
                    <div className=' gap-2 items-center justify-center'>
                        <div className='p-2 space-y-4 text-sm'>
                            {/* profileImage */}
                            <div className='flex flex-col space-y-4 justify-center items-center'>
                                <label
                                    className=' flex justify-center items-center cursor-pointer'
                                    onClick={handleClick}
                                >
                                    {
                                        imagePreview ? (
                                            <div className='border-dashed border-2 border-gray-300 rounded-full h-40 w-40 overflow-hidden'>
                                                <img src={imagePreview} alt="ProfilePreview" className='h-full w-full rounded object-contain' />
                                            </div>
                                        ):(
                                            <div className='border-dashed border-2 border-gray-300 rounded-full h-40 w-40 overflow-hidden'>
                                                <img
                                                    src={profilePicture}
                                                    alt='profile'
                                                    className='h-full w-full rounded object-contain'
                                                />
                                        </div>)
                                    }
                                </label>
                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={handleImageChange}
                                    className='hidden'
                                    id='profileImage'
                                    ref={inputRef}
                                />
                            </div>
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
                            <div className="mx-2 self-end space-x-2">
                                <button disabled={loading} className="bg-lightBrown text-ivory p-3 rounded shadow hover:shadow-lg">
                                    { loading? 'Please wait!...' : 'Save Changes'}
                                </button>
                                <span>{errorMsg && `Error: ${errorMsg}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    </section>
  )
}

