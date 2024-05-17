import React, { useContext, useEffect, useState } from 'react'
import {Link, Outlet, useNavigate, } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Logo } from '../component/Logo';
import { CiDark, CiLight } from 'react-icons/ci';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { UserAuth } from '../contexts/AuthContext';




const initialState = {
    email: "",
    password: "",
}

export const Login = () => {
    const [formData, setFormData] = useState(initialState);
    const [darkMode, setDarkMode] = useState(false)
    const {email, password} = formData;
    const {Login} = UserAuth() 
    const navigate = useNavigate();
    const [viewPwd, setViewPwd] = useState(true)
    const [loading, setLoading] = useState(false)
    // const [currentUser, setCurrentUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    // useEffect(()=>{
    //     const user = sessionStorage.getItem('user')
    //     console.log(`the user is ${user}`)
    // },[])
    
  
    const handleToggle = () => {
        setDarkMode(!darkMode)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

    const handleViewPassword = () => {
        setViewPwd(!viewPwd)
    }


    //SignIn
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const userData = {
                email,
                password
            }
    
            userData.email = userData.email.toLowerCase();
            await Login(userData)
            setLoading(false)
            navigate('/')
            // location.reload()
            toast.success('Logged in Successfully')

        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            toast.error(error.response.data.message)
        }
    };
   

  return (
    <div className={`${darkMode && "dark"} relative flex justify-center items-center mx-auto h-screen`}>
        <div className=' fixed top-0 h-screen right-0 left-0 '>
            <span className='fixed top-0 h-screen right-0 left-0 bg-white/10 backdrop-blur-md'></span>
        </div>
        <div className='flex w-full justify-center h-screen'>
            <div className='bg-gradient-to-b from-lightBrown from-[10%] to-[70%] to-brown w-1/2 text-3xl z-20 h-full hidden md:flex rounded-l'><img src={`https://i.postimg.cc/d3GQkz3N/slideshow-3.webp`} alt="loginImage" className='h-full w-full object-cover' /></div>
            <div className='z-20 bg-ivory dark:bg-black/10 md:w-1/2 w-full rounded-r shadow shadow-r-lg p-4 transition-all h-full '>
                <div className='text-2xl text-center my-5 font-bold flex flex-wrap items-center justify-center'><Logo/></div>
                <h1 className='text-xl text-center font-bold'>Welcome back!</h1>
                <p className='p-2 text-center'>Login into your account for full access.</p>
                <div className='max-w-lg m-auto'>
                    <form onSubmit={handleLogin} className='flex flex-col gap-4 text-sm' >
                        <div>
                            <label className='p-2'>Enter Email:</label>
                            <input type="email" 
                                name="email"
                                value={email} 
                                className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                                placeholder='example@gmail.com' 
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='relative transition-all'>
                            <label className='p-2'>Enter Password:</label>
                            <input type={viewPwd? "password" : "text"}
                                id='changePwd' 
                                name="password" 
                                value={password}
                                className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                                placeholder='enter your password' 
                                onChange={handleChange}
                                required
                            />
                            <span onClick={handleViewPassword} className='absolute top-[54%] right-10 text-brown transition-transform  duration-300 cursor-pointer'>{viewPwd? <LuEyeOff /> : <LuEye/>}</span>
                        </div>
                        <div className='text-right'>
                            <span className=''>forgot password?</span>
                        </div>
                        {/* error message */}
                        <p className='text-red text-center text-sm'>{errorMsg && errorMsg}</p>
                        <div >
                            <button disabled={loading} className='w-full p-3 from-lightBrown to-[90%] to-brown bg-gradient-to-r text-ivory hover:opacity-90 disabled:opacity-70  hover:font-bold transition-all duration-200 rounded-lg text-center gap-2'>
                                { loading? 'Loading...Please wait!' : 'LOGIN'}
                            </button>
                        </div>
                        <p className='text-blue underline mx-auto text-sm'>continue with google</p>
                        {/* <OAuth/> */}
                    </form>
                </div>
                <div className='flex items-center gap-2 mx-auto p-5 text-center relative text-sm'>
                    <p>new here? Create account</p>
                    <Link to={`/register`}>
                        <p className='hover:underline font-bold hover:font-extrabold'>register</p>
                    </Link>
                    <p className='cursor-pointer flex right-10 absolute bg-ivory/20 rounded p-2 ' onClick={handleToggle}>{darkMode ? <CiDark /> : <CiLight />}</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}