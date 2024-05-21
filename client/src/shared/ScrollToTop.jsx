import { FaArrowUp } from "react-icons/fa6"
import { SidebarContext } from "../contexts/SidebarContext"
import { useContext } from "react"


export const ScrollToTop = () => {
  const {isActive } = useContext(SidebarContext)


  const scrollToTop = () => {
    window.addEventListener('scroll',(
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    ))
  }

  return (
    <div onClick={scrollToTop} className={`${isActive ? 'text-white transition-all duration-300 bg-lightBrown rounded-full p-2 fixed right-2 shadow bottom-24 md:bottom-10 z-[999] w-10 h-10 flex items-center justify-center' : 'hidden'}`}>
      <FaArrowUp />
    </div>
  )
}

