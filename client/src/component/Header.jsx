import React, { useContext, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavLink, Link, useNavigate} from "react-router-dom";
import { CiUser, CiLogout, CiLogin, CiEdit, CiMenuFries,} from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import { RiArrowDownSLine,  RiArrowUpSLine } from "react-icons/ri";
import { LuHelpCircle, LuSunMoon } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialMedia } from "./SocialMedia";
import { BsCartCheck } from "react-icons/bs";
import { ShowCustomer, ShowOnLogin, ShowOnLogout, ShowAdmin} from "./hiddenLinks";
import { TbChecklist } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { AiFillDashboard } from "react-icons/ai";
import MobileSideMenu from "./MobileSideMenu";
import { FaShopify } from "react-icons/fa6";
import { UserAuth } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";


export const Header = () => {
    const [menu, setMenu] = useState(false);
    const [mobile, setMobile] = useState(false);
    const {logOut} = UserAuth()
    const {itemAmount} = useContext(CartContext)
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false)
    const [cartegoryMenu, setCategoryMenu] = useState(false)    
    const {username, role, profilePicture} = currentUser

    
    const cartegoryDropDown = () => {
        setCategoryMenu(!cartegoryMenu)
    };

  const clickMobile = () => {
    setMobile(!mobile);
    // alert("hello")
  };


  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = mobile ? "hidden" : "auto";
  }, [mobile]);

  useEffect(()=> {
    window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  const scrollToTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
  };


    const Logout = async () => {
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
        setCurrentUser({})  
        navigate('/') 
        location.reload()
    }
  

  return (
    <header className={`${isActive && 'fixed inset-0 top-0  transition-all duration-200 bg-white'} ${location.pathname == '/' && 'fixed'} z-[999] h-20  inset-0 flex items-center justify-center w-[100%] m-0 p-0`}>
        <div  className={`h-full flex justify-between items-center md:px-10 px-2 w-full`}>
            <div className="flex items-center h-full">
                <NavLink to={`/`} onClick={scrollToTop}>
                    <Logo />
                </NavLink>
            </div>
            {/* mobile */}
            <div className="flex flex-cols md:hidden px-3 order-last">
                <CiMenuFries
                size={20}
                onClick={clickMobile}
                className="cursor-pointer "
                />
                {mobile && (         
                    <MobileSideMenu
                    clickMobile={clickMobile }
                    scrollToTop={scrollToTop} 
                    currentUser={currentUser} 
                    Logout={Logout}
                    />
                )}
            </div>
            <div onClick={scrollToTop} className="md:flex hidden items-center">
                <div className="relative">
                    <NavLink
                        to="shop"
                        className={({ isActive }) =>
                            isActive
                            ? "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-brown decoration-2 font-bold"
                            : "flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                        }
                        >
                        <FaShopify className="mx-1"/>
                        Shop
                    </NavLink>
                </div>
                <ShowCustomer>
                    <div className=" p-2 flex">
                        <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                            isActive
                            ? "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-brown decoration-2 font-bold"
                            : "flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                        }
                        >
                        <BiPurchaseTag className="mx-1" />
                        Dashboard
                        </NavLink>
                    </div>
                </ShowCustomer>
                <ShowAdmin>
                    <div className=" p-2 flex">
                        <NavLink
                        to={`/dashboard/home-dashboard`}
                        className={({ isActive }) =>
                            isActive
                            ? "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-green decoration-2 font-bold"
                            : "flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                        }
                        >
                        <AiFillDashboard className="mx-1" />
                        Dashboard
                        </NavLink>
                    </div>
                </ShowAdmin>
            </div>
            <div className="items-center flex space-x-4">
                <div className="px-2 relative items-center space-x-4 hidden  md:flex">
                    <div  onClick={() => setMenu(!menu)} className="flex items-center cursor-pointer space-x-3 transition-all">
                        <p className={`${isActive ? 'rounded-full h-14 w-14 flex items-center justify-center ' : 'hidden'} transition-all duration-200`}>
                            <img
                            src={
                                currentUser
                                ? `${isActive && `${profilePicture}`} ` : null
                            }
                            className="rounded-full"
                            />
                        </p>
                        <h1 className="capitalize">
                            Hi,
                            <span className="px-1">
                                {currentUser ? <span className="font-semibold capitalize">{username}</span> : "user"}
                            </span>
                        </h1>
                        {menu ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                    </div>
                    <div className="absolute top-10 right-0 z-[99]">
                        {menu && (
                        <div onMouseLeave={()=> setMenu(!menu)} className="drop-shadow w-80 rounded-xl p-4 bg-white">
                            <div className="border-b border-gray/20 p-2 flex">
                                <p className="rounded-full h-14 w-14 flex items-center justify-center">
                                    <img
                                    src={
                                        currentUser
                                        ? profilePicture
                                        : 
                                        `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg`
                                    }
                                    alt="image"
                                    />
                                </p>
                                <p className="flex flex-col px-2">
                                    <span className="font-bold capitalize">
                                    {currentUser ? username : "user"}
                                    </span>
                                    <span className="font-light">Nigeria</span>
                                </p>
                            </div>
                            <ShowCustomer >
                                <div onClick={scrollToTop} className="">
                                    <Link
                                    to={`/dashboard/profile`}
                                    className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiUser className="mx-1" />
                                    Account
                                    </Link>
                                    <Link
                                    to="/dashboard/orders"
                                    className=" flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <BiPurchaseTag className="mx-1" />
                                    My Order
                                    </Link>
                                </div>
                            </ShowCustomer>
                            <ShowAdmin>
                                <div>
                                    <Link
                                    to={`/dashboard/home-dashboard`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiEdit className="mx-1" />
                                    Dashboard
                                    </Link>
                                    <Link
                                    to={`/dashboard/products`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <TbChecklist className="mx-1" />
                                    View Products
                                    </Link>
                                    <Link
                                    to={`dashboard/products`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <RxUpdate className="mx-1" />
                                    Update Product
                                    </Link>
                                </div>
                            </ShowAdmin>
                            <div>
                            <p className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4">
                                <LuHelpCircle className="mx-1" />
                                Help
                            </p>
                            <div className="flex items-center justify-between">
                                <SocialMedia />
                                <p className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4 bg-gray/20 rounded-full">
                                    <LuSunMoon className="mx-1" />
                                </p>
                            </div>
                            <ShowOnLogout>
                                <Link
                                to={`login`}
                                className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiLogin className="mt-1 mx-1" />
                                Login
                                </Link>
                            </ShowOnLogout>
                            <ShowOnLogin>
                                <button
                                onClick={Logout}
                                className="flex items-center p-2 text-red font-bold cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiLogout className="mt-1 mx-1" />
                                Logout
                                </button>
                            </ShowOnLogin>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <NavLink to="/mycart" className="px-1 text-xl  cursor-pointer">
                        <p  className="relative">
                            <BsCartCheck size={30}/>
                            <span className="absolute -top-3 -right-3 px-1 text-sm z-10 bg-brown text-white rounded-full flex item-center justify-center ">
                                {itemAmount}
                            </span>
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    </header>
  );
};
