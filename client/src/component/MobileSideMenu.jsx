import React from 'react'
import { CiEdit, CiHome, CiLogin, CiLogout, CiUser } from 'react-icons/ci'
import { IoArrowUndoOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { BiPurchaseTag } from 'react-icons/bi'
import { ShowAdmin, ShowOnLogin, ShowOnLogout } from './hiddenLinks'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'
import { SocialMedia } from './SocialMedia'
import { LuSunMoon } from 'react-icons/lu'

const MobileSideMenu = ({clickMobile,scrollToTop, currentUser, Logout}) => {
  return (
    <div className="">
        <div onClick={clickMobile} className="z-50 bg-gray/40 backdrop-blur-[1px] fixed top-0 left-0 right-0 h-screen w-full transition-all text-sm" >
            <div data-aos="fade-right"  className=" hamburger-menu sm:w-2/4 w-1/2 bg-white rounded-r fixed shadow-lg left-0 md:-left-0 top-0 h-screen duration-500 transition-all">
                <div onClick={clickMobile} className="relative bg-white h-screen">
                    {/* header */}
                    <div className="py-4 flex items-center justify-between relative shadow right-1">
                        <div className="p-2 flex items-center">
                            <Logo />
                        </div>
                        <p onClick={clickMobile} className=" flex items-end justify-end p-2 ">
                            <IoArrowUndoOutline size={20} />
                        </p>
                    </div>
                    <div onClick={scrollToTop} className="p-2">
                        {/* profile */}
                        <div className=" p-2 flex">
                            <p className="rounded-full h-14 w-14 flex items-center justify-center">
                                <img
                                src={
                                    currentUser
                                    ? currentUser.profilePicture
                                    : `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg`
                                }
                                alt="image"
                                />
                            </p>
                            <p className="flex flex-col px-2">
                                <span className="font-bold capitalize">
                                {currentUser ? currentUser.username : "user"}
                                </span>
                                <span className="font-light">Nigeria</span>
                            </p>
                        </div>
                        {/* lists */}
                        <Link
                        to={`/`}
                        className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                        >
                        <CiHome className="mx-1" />
                        Home Page
                        </Link>
                        <Link
                        to={`/dashboard/profile`}
                        className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                        >
                        <CiUser className="mx-1" />
                        My Account
                        </Link>
                        <Link
                        to="/dashboard/orders"
                        className=" flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                        >
                        <BiPurchaseTag className="mx-1" />
                        My Order
                        </Link>
                        <ShowAdmin>
                            <Link
                            to={`/dashboard/home-dashboard`}
                            className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                            >
                            <CiEdit className="mx-1" />
                            Admin Dashboard
                            </Link>
                        </ShowAdmin>
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
                            <p
                            onClick={Logout}
                            className="flex items-center text-red font-bold p-2 cursor-pointer hover:underline underline-offset-4"
                            >
                            <CiLogout className="mt-1 mx-1" />
                            Logout
                            </p>
                        </ShowOnLogin>
                    </div>
                    <div className="p-2">
                        <h1 className="px-4 font-bold text-lg flex items-center">
                            <MdOutlineConnectWithoutContact />
                            Connect with us
                        </h1>
                        <div className="flex items-center justify-between px-2">
                            <SocialMedia />
                            <p className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4 bg-gray/20 rounded-full">
                                <LuSunMoon className="mx-1" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileSideMenu