import React from 'react'
import { CiEdit, CiHome, CiLogin, CiLogout, CiUser } from 'react-icons/ci'
import { IoArrowUndoOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { HomeLogo} from './Logo'
import { BiPurchaseTag } from 'react-icons/bi'
import { ShowAdmin, ShowOnLogin, ShowOnLogout } from './hiddenLinks'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'
import { SocialMedia } from './SocialMedia'


const MobileSideMenu = ({clickMobile,scrollToTop, currentUser, logoutUser}) => {
    const location = useLocation()
    let path = '/'

  return (
    <div className="font-poppins">
        <div onClick={clickMobile} className="z-[999] bg-gray/20 backdrop-blur-[1px] fixed top-0 left-0 right-0 h-screen w-full transition-all text-sm" >
            <div data-aos="fade-right"  className=" hamburger-menu sm:w-2/4 w-2/3 bg-white rounded-r fixed shadow-lg left-0 md:-left-0 top-0 h-screen duration-500 transition-all">
                <div onClick={clickMobile} className="relative bg-white h-screen flex flex-col space-y-8">
                    {/* header */}
                    <div className="py-3 flex items-center justify-between mx-2 relative right-1">
                        <div className="p-2 flex items-center">
                            <HomeLogo />
                        </div>
                        <p onClick={clickMobile} className=" flex items-end justify-end p-2 ">
                            <IoArrowUndoOutline />
                        </p>
                    </div>
                    <div onClick={scrollToTop} className="p-2">
                        {/* profile */}
                        <div className=" flex">
                            <p className="rounded-full h-10 w-10 flex items-center justify-center">
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
                        <div className='space-y-2'>
                            <div>
                            {
                                location.pathname !== path && (
                                    <Link
                                    to={`/`}
                                    className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                    >
                                    <CiHome className="mx-1" />
                                    Home
                                    </Link>

                                )
                            }   
                            </div>
                            <Link
                                to={`/layout/profile`}
                                onClick={scrollToTop}
                                className="flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiUser className="mx-1" />
                                My account
                            </Link>
                            <Link
                                to="/layout/orders"
                                onClick={scrollToTop}
                                className=" flex rounded-full items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                >
                                <BiPurchaseTag className="mx-1" />
                            My order
                            </Link>
                            <ShowAdmin>
                                <Link
                                to={`/dashboard/home-dashboard`}
                                onClick={scrollToTop}
                                className="flex items-center p-2 cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiEdit className="mx-1" />
                                Admin Dashboard
                                </Link>
                            </ShowAdmin>
                        </div>
                    </div>
                    {/* connect with us */}
                    <div className="py-4">
                        <div className="px-4 font-bold flex items-center">
                            <MdOutlineConnectWithoutContact />
                            Connect with us
                        </div>
                        <SocialMedia />
                    </div>
                    {/* check login */}
                    <div className='mx-2'>
                        <ShowOnLogout>
                            <Link
                                to={`login`}
                                className="flex items-center bg-brown rounded text-white font-bold p-2 cursor-pointer hover:underline underline-offset-4"
                                >
                                <CiLogin className="mx-1" />
                                Login
                            </Link>
                        </ShowOnLogout>
                        <ShowOnLogin>
                            <p
                            onClick={logoutUser}
                            className="flex items-center bg-brown rounded text-white font-bold p-2 cursor-pointer hover:underline underline-offset-4"
                            >
                            <CiLogout className="mx-1" />
                            Logout
                            </p>
                        </ShowOnLogin>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileSideMenu