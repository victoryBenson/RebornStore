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
    <div data-aos="fade-up" className=' flex flex-col items-center justify-center py-5 md:py-10 w-full space-y-5 md:space-y-10'>
        <p className='font-semibold text-xl md:text-3xl font-poppins'>Why choose us?</p>
        <div className='flex flex-wrap items-center justify-center gap-4 h-full'>
          {
            services.map((data, index) => {
              return (
                <div key={index} className='bg-gray/5 w-5/6 md:w-72  min-h-40 md:h-48 flex-col flex items-center justify-center rounded'>
                  <p className='text-2xl md:text-5xl text-gray'><data.icon /></p>
                  <p className='capitalize p-2 font-semibold text-lg md:text-xl'>{data.title}</p>
                  <p className='text-base'>{data.details}</p>
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
