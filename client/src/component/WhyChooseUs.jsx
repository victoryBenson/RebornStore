import { Btn,} from '../shared/Button';
import { Link, useNavigate } from 'react-router-dom';
import services from '../database/services'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

 

export const WhyChooseUs = () => {

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
    <div data-aos="fade-up" className='flex flex-col justify-center items-center bg-brown my-10 md:my-20 text-white'>
        <p className='font-semibold text-xl md:text-3xl font-poppins py-5 mt-5 md:mt-0 md:py-10'>Why choose us?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center py-4 w-[90%] '>
            {
              services.map((data, index) => {
                return (
                  <div key={index} className='bg-gray/30 text-white w-full h-48 md:h-52 flex flex-col items-center justify-center cursor-pointer p-2 text-center rounded'>
                      <p className='text-4xl md:text-5xl text-ivory'><data.icon /></p>
                      <p className='capitalize p-2 font-semibold text-lg md:text-xl'>{data.title}</p>
                      <p className='text-base text-white/60'>{data.details}</p>
                  </div>
                )
              })
            }
        </div>
        <div data-aos="flip-right" onClick={() => {navigate("layout/shop");scrollToTop() }} className='my-10'>
            <Btn text="Shop now" />
        </div>
    </div>
  )
}

