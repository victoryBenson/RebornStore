import React, { useState, useEffect, useRef} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { Logo } from '../component/Logo';
import { LuEye, LuEyeOff} from "react-icons/lu";
import loginImage from '../assets/image/signupImage.png'
import { UserAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

// import { OAuth } from '../Component/OAuth';


export const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState("customer") 
    const navigate = useNavigate();
    const [viewPwd, setViewPwd] = useState(false)
    const errRef = useRef();
    const {Register} = UserAuth() 
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [errorMsg, setErrorMsg] = useState('')

    const handleRole = (e) => {
        setRole(e.target.value)
    }

    const togglePwd = () => {
       const changePwd = document.getElementById('Viewpwd')
       const isPassword = changePwd.getAttribute('type') === 'password'

       changePwd.setAttribute(
           "type", 
           isPassword ? 'text' : "password"
       );
       setViewPwd(!viewPwd)

    }

    
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const userData = {
                email,
                password,
                role,
                username
            };
    
            userData.email = userData.email.toLowerCase();
            await Register(userData)
            setLoading(false)
            navigate('/')
            // location.reload()
            toast.success('Registered Successfully')

        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            toast.error(error.response.data.message)
        }

    };
    

  return (
    <div className='relative flex justify-center items-center mx-auto overflow-auto'>
        <div className='bg-hero4 bg-bottom fixed top-0 h-screen right-0 left-0 hidden'>
            <span className='bg-black/60 fixed top-0 h-screen right-0 left-0 blur-[2px]'></span>
        </div>
        <div className='flex w-full justify-center h-screen'>
            <div className='bg-gradient-to-b from-lightBrown from-[10%] to-[70%] to-brown w-1/2 text-3xl z-20  hidden md:flex rounded-l'><img src={loginImage} alt="loginImage" className='h-full w-full object-cover' /></div>
            <div className='z-20 bg-ivory md:w-1/2 w-full rounded-r-lg shadow-r-lg p-4 transition-all'>
                <div className='text-2xl text-center font-bold flex flex-wrap items-center justify-center'><Logo/></div>
                    <h1 className='text-xl text-center font-bold'>Register now!</h1>
                    <div className='max-w-lg m-auto'>
                <p className=' p-1 text-center'>Get access to members only content.</p>
                <form onSubmit={handleRegister} className='flex flex-col gap-4 text-sm' >
                    <div>
                        <label className='p-2'>Enter username:</label>
                        <input type="text" 
                            name="username"
                            value={username || ""} 
                            className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                            placeholder='John Doe' 
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className='p-2'>Enter email:</label>
                        <input type="email" 
                            name="email"
                            value={email || ""} 
                            className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                            placeholder='example@gmail.com' 
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='relative'>
                        <label className='p-2'>Enter Password:</label>
                        <input type="password" 
                            name="password" 
                            id='Viewpwd'
                            value={password || ""}
                            className='outline-none p-3 rounded-lg w-full border border-gray/20 text-blue' 
                            placeholder='Create a Password' 
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    <span onClick={togglePwd} className='absolute top-[54%] right-10 text-brown transition-transform  duration-300'>{viewPwd? <LuEye /> : <LuEyeOff/>}</span>
                    </div>
                    <div className=''>
                        <label htmlFor="Role" className='block'>Select Role:</label>
                        <span className=''>
                            <input 
                                type="radio" 
                                name="role" 
                                value={`customer` || ""} 
                                onChange={handleRole} 
                                checked={role === "customer"}
                            />
                            <label htmlFor="" className='px-1 font-bold'> Customer </label>
                        </span>
                        <span className='pl-2'>
                            <input 
                                type="radio" 
                                name="role" 
                                value={`admin` || ""} 
                                onChange={handleRole} 
                                checked= {role === "admin"} 
                            />
                            <label htmlFor="" className='px-1 font-bold'>Admin</label>
                        </span>
                    </div>
                    {/* error message */}
                    <p ref={errRef} className='text-red mx-auto'>{errorMsg && !loading && errorMsg}</p>
                    <div >
                        <button disabled={loading} className='w-full p-3  from-lightBrown to-brown bg-gradient-to-r text-ivory hover:opacity-80 disabled:opacity-70  hover:font-bold transition-all duration-200 rounded-lg text-center gap-2'>
                            {loading? 'Loading...please wait...' : 'CREATE ACCOUNT'}
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex items-center gap-2 mx-auto p-3 text-center'>
                <p className='text-sm'>already have an account?</p>
                <Link to={`/login`}>
                <p className='hover:underline font-bold hover:font-extrabold'>login</p>
                </Link>
            </div>
            </div>
        </div>
    </div>
    
  )
}