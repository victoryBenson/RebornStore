import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../shared/Button';
import { heroData } from './database/Herodata';
import AOS from 'aos'
import "aos/dist/aos.css"
import {Link} from 'react-router-dom'

export const Hero = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5000;
    
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

    useEffect(() => {
      AOS.init({
        duration: 500
      })    
  },[])

  const scrollToTop = () => {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
  }
  
  return (
    <section id='hero' className='overflow-hidden slideshow relative'>
        <div className=" lg:h-[100vh] h-[70vh] flex w-full slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)`,transition: "ease-in 600ms"}}>
            {heroData.map((data, index)=>{
                return(
                    <div key={index} className="slide h-full w-full bg-ivory flex-shrink-0 flex items-center justify-start bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${data.image})`}}>
                        <div className=" flex flex-col justify-start items-start p-2 md:pl-5" data-aos="fade-down">
                            <div className="space-y-2 flex flex-col justify-center items-center">
                                <p data-aos="fade-up" className='font-inter font-extrabold drop-shadow-md text-3xl md:text-6xl text-brown3'>{data.title}<strong className='text-ivory sm:text-brown font-bold font-zeyada text-4xl md:text-7xl'>{data.title2}</strong></p>
                                <p className='md:font-zeyada font-poppins text-base md:text-4xl'>{data.description}</p>
                                <Link to="shop" onClick={scrollToTop}>
                                  <Button/>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='text-center absolute right-0 left-0 bottom-0 space-x-2 '>
                {
                    heroData.map((_, idx) => (
                        <div 
                            key={idx}
                            onClick={()=> setIndex(idx)}
                            className={`slideshowDot${index === idx && " active"} space-x-2 rounded-full h-2 w-5 inline-block cursor-pointer bg-gray`}
                        ></div>
                    ))
                }
            </div>
    </section>
  )
}
