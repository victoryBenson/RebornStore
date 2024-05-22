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
        <div className='flex whitespace-nowrap overflow-x-auto w-[100%] md:w-[80%] justify-items-center items-center'>
          {
            services.map((data, index) => {
              return (
                <div key={index} className='bg-gray/10 rounded mx-2 flex flex-col p-2 items-center w-64 h-40 justify-center'>
                  <p className='text-5xl'><data.icon /></p>
                  <p className='capitalize p-2 font-semibold text-xl'>{data.title}</p>
                  <p className='text-'>{data.details}</p>
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
