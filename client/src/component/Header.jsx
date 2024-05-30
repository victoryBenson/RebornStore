import React, { useContext, useEffect, useState } from "react";
import { HomeLogo, Logo } from "./Logo";
import { NavLink, Link, useNavigate, useLocation} from "react-router-dom";
import { CiUser, CiLogout, CiLogin, CiEdit, CiMenuFries, CiMenuBurger,} from "react-icons/ci";
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
import { SidebarContext } from "../contexts/SidebarContext";


export const Header = () => {
    const [menu, setMenu] = useState(false);
    const [mobile, setMobile] = useState(false);
    const {logOut} = UserAuth()
    const {itemAmount} = useContext(CartContext)
    const {currentUser, Logout} = useContext(UserContext)
    const {username, role, profilePicture} = currentUser
    const navigate = useNavigate();
    const {isActive } = useContext(SidebarContext)
    const [cartegoryMenu, setCategoryMenu] = useState(false)
    const location = useLocation()
    const {handleCart} = useContext(SidebarContext)
    let path = '/dashboard' 

    
    let check = location.pathname.includes(path)
    
   
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



  const scrollToTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
  };


    const logoutUser = () => {  
        Logout()
    };
  

  return (
    <header className={`${isActive && 'fixed inset-0 top-0  transition-all duration-200 bg-white'} ${location.pathname == '/' && 'fixed inset-0'} z-[999] h-20  inset-0 flex items-center justify-center w-[100%] m-0 p-0`}>
        <div  className={`h-full flex justify-between items-center md:px-10 px-2 w-full mx-2`}>
            {/* mobile */}
            <div onClick={clickMobile} className="flex flex-cols md:hidden cursor-pointer">
                <CiMenuBurger
                size={20}
                className=" "
                />
                {mobile && (         
                    <MobileSideMenu
                    clickMobile={clickMobile }
                    scrollToTop={scrollToTop} 
                    currentUser={currentUser} 
                    logoutUser={logoutUser}
                    />
                )}
            </div>
            <div className="flex items-center h-full">
                <NavLink to={`/`} onClick={scrollToTop}>
                    <HomeLogo />
                </NavLink>
            </div>
            {/* navLinks */}
            <div onClick={scrollToTop} className="hidden md:flex  items-center">
                <div className="relative text-sm md:text-base">
                    <NavLink
                        to="/layout/shop"
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
                <ShowAdmin>    
                    <div className=" p-2 flex text-sm md:text-base">
                        <NavLink
                        to="/dashboard/home-dashboard"
                        className={`${ check && "flex rounded-full items-center p-2 cursor-pointer underline underline-offset-4 decoration-brown decoration-2 font-bold"}
                            flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4
                        `}
                        >
                        <AiFillDashboard className="mx-1" />
                        Dashboard
                        </NavLink>
                    </div>
                </ShowAdmin>
            </div>
            <div className="items-center flex ">
                {/* profile */}
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
                            <span className="px-1 font-semibold capitalize">
                                {username? username : "welcome"}
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
                                    {username? username : "welcome"}
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
                                    to={`/dashboard/admin-products`}
                                    className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <TbChecklist className="mx-1" />
                                    View Products
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
                                onClick={logoutUser}
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
                {/* cart */}
                <div onClick={handleCart}  className="px-1 text-xl  cursor-pointer">
                    <p  className="relative">
                        <BsCartCheck size={30} />
                        <span className="absolute -top-3 -right-3 px-1 text-sm z-10 bg-brown text-white rounded-full flex item-center justify-center ">
                            {itemAmount}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </header>
  );
};
