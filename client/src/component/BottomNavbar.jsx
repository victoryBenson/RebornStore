import React, { useContext, useEffect, useState } from "react";
import { HomeLogo, Logo } from "./Logo";
import { NavLink, Link, useNavigate, useLocation} from "react-router-dom";
import { CiUser, CiLogout, CiLogin, CiEdit, CiMenuFries, CiShoppingTag,} from "react-icons/ci";
import { BiPurchaseTag } from "react-icons/bi";
import { RiArrowDownSLine,  RiArrowUpSLine } from "react-icons/ri";
import { LuHelpCircle, LuSunMoon } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialMedia } from "./SocialMedia";
import { BsCartCheck } from "react-icons/bs";
import { ShowCustomer, ShowOnLogin, ShowOnLogout, ShowAdmin} from "./hiddenLinks";
import { TbChecklist } from "react-icons/tb";
import { RxDashboard, RxUpdate } from "react-icons/rx";
import { AiFillDashboard } from "react-icons/ai";
import MobileSideMenu from "./MobileSideMenu";
import { FaShopify } from "react-icons/fa6";
import { UserAuth } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { FaUserCheck } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";

const BottomNavBar = () => {
  const [menu, setMenu] = useState(false);
    const [mobile, setMobile] = useState(false);
    const {logOut} = UserAuth()
    const {itemAmount} = useContext(CartContext)
    const {currentUser, Logout} = useContext(UserContext)
    const {username, role, profilePicture} = currentUser
    const navigate = useNavigate();
    const {handleCart} = useContext(SidebarContext)
    const [cartegoryMenu, setCategoryMenu] = useState(false)
    const {isActive } = useContext(SidebarContext)
    const location = useLocation()
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
    <div className={`${isActive ? 'block relative font-poppins ' : 'hidden'}`}>
      <div className='fixed w-full flex items-center justify-between px-4 bottom-0 h-20 bg-white md:hidden z-[99] shadow'>
        {/* navLinks */}
        <NavLink
              onClick={scrollToTop}
              to="/"
              className={({ isActive }) => isActive ? " cursor-pointer border-b font-extrabold flex flex-col items-center"  : "flex flex-col items-center cursor-pointer text-sm "}>
              <GoHome size={20}/>
              Home
          </NavLink>
          <NavLink
              onClick={scrollToTop}
              to="/layout/shop"
              className={({ isActive }) =>
                isActive
                ? " cursor-pointer border-b font-extrabold flex flex-col items-center"
                : " cursor-pointer text-sm flex flex-col items-center"
              }
              >
              <IoStorefrontOutline size={20} className="mx-1"/>
              Store
          </NavLink>
          <ShowAdmin>
            <NavLink
            onClick={scrollToTop}
            to="/dashboard/home-dashboard"
            className={({ isActive }) =>
              isActive
              ? " cursor-pointer border-b font-extrabold flex flex-col items-center"
              : " cursor-pointer text-sm flex flex-col items-center"
            }
            >
            <RxDashboard size={20}  className="mx-1" />
            Dashboard
            </NavLink>
          </ShowAdmin>
          <NavLink 
              to={'/layout/orders'} 
              className={({ isActive }) =>
                isActive
                ? " cursor-pointer border-b font-extrabold relative flex flex-col items-center"
                : " cursor-pointer relative text-sm flex flex-col items-center"
              }
              >
                  <CiShoppingTag size={30} className='mx-1'/>
                  <span className='text-xs md:text-sm absolute md:hidden bg-brown text-ivory rounded-full p-[1px] px-[2px] -top-2  right-5'>9</span>
                  Orders
          </NavLink>
          <div onClick={handleCart}  className="px-1 text-sm cursor-pointer flex flex-col items-center">
              <p  className="relative">
                  <BsCartCheck size={20} />
                  <span className="absolute -top-3 -right-3 px-1 text-sm z-10 bg-brown text-white rounded-full flex item-center justify-center ">
                      {itemAmount}
                  </span>
              </p>
              Cart
          </div>
      </div>
    </div>
  )
}

export default BottomNavBar