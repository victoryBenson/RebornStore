import { Btn,} from '../shared/Button';
import { Link, useNavigate } from 'react-router-dom';
import services from '../database/services'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';



export const HowItWorks = () => {
const navigate = useNavigate()

const scrollToTop = () => {
  window.scrollTo(
      {
          top: 0,
          behavior: 'smooth'
      }
  )
}

//animation on scroll
useEffect(() => {
  AOS.init({
    duration: 500
  })    
},[])

  return (
    <div data-aos="fade-" className=' flex flex-col items-center justify-center text-center py-5 sm:p-10'>
        <p className='font-semibold text-xl md:text-3xl font-poppins py-5 md:py-10'>Why choose us?</p>
        <div className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth py-5 transition-all mx-2'>
          {
            services.map((data, index) => {
              return (
                <div key={index} className='bg-gray/10 w-72 h-40 mx-3 inline-block cursor-pointer p-2 text-center overflow-hidden'>
                  <div className='flex flex-col justify-center items-center h-full'>
                    <p className='text-2xl md:text-5xl text-gray'><data.icon /></p>
                    <p className='capitalize p-2 font-semibold text-lg md:text-xl'>{data.title}</p>
                    <p className='text-base'>{data.details}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div data-aos="flip-right" onClick={() => {navigate("layout/shop");scrollToTop() }}>
          <Btn text="Shop now" />
        </div>
    </div>
  )
}
