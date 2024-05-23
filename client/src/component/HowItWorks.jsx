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
    <section data-aos="fade-up">
      <div className=' flex flex-col items-center justify-center h-full text-center py-5 sm:p-10'>
          <p className='font-semibold text-xl md:text-3xl font-poppins py-5 md:py-10'>Why choose us?</p>
          <div className='grid gird-cols1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center py-4 w-[90%] md:w-[100%]'>
            {
              services.map((data, index) => {
                return (
                  <div key={index} className='bg-gray/5 w-full h-48 md:h-52 flex flex-col items-center justify-center cursor-pointer p-2 text-center '>
                      <p className='text-4xl md:text-5xl text-gray'><data.icon /></p>
                      <p className='capitalize p-2 font-semibold text-lg md:text-xl'>{data.title}</p>
                      <p className='text-base'>{data.details}</p>
                  </div>
                )
              })
            }
          </div>
          <div data-aos="flip-right" onClick={() => {navigate("layout/shop");scrollToTop() }} className='py-4'>
            <Btn text="Shop now" />
          </div>
      </div>
    </section>
  )
}
