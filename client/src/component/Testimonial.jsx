import React, { useEffect, useRef, useState } from 'react'
import { testimonials } from '../database/testimonialData'
import AOS from 'aos'
import "aos/dist/aos.css"


export const Testimonial = () => {
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
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
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

    return (
    <div data-aos="fade-up" className=' flex flex-col justify-center h-full items-center my-10 md:my-20'>
        <div className='text-center py-4'>
            <h1 className='font-bold md:text-3xl text-xl font-poppins'>Good news from far away 🥇</h1>
            <p className='text-lg'>Let's see what people think of Reborn</p>
        </div>
        <div className='overflow-hidden no-scrollbar slideshow w-[86%] sm:w-[80%] my-5'>
            <div className='flex w-full items-center slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` ,transition: "ease-in 500ms"}}>
                {
                    testimonials.map((data, index)=> {
                        return(
                            <div 
                                key={index} 
                                style={{}}
                                className='shrink-0 flex justify-center items-center w-full min-h-full slide '>
                                <div className='p-2 rounded'>
                                    <p className='sm:text-2xl md:text-3xl text-wrap font-poppins p-3 '>"...{data.description}"</p>
                                    <div className='flex items-center justify-center md:justify-start gap-2'>
                                        <p className='h-12 md:h-20 w-12 md:w-20 rounded-full flex'>
                                          <img className='h-full w-full object-cover object-top rounded-full' src={data.image} alt="image" />
                                        </p>
                                        <p className=' gap-2'>
                                          <p className='pt-2 font-bold font-poppins'>{data.name}</p>
                                          <p className='capitalize font-zeyada'>{data.title}</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center'>
                {
                    testimonials.map((_, idx) => (
                        <div 
                            key={idx}
                            onClick={()=> setIndex(idx)}
                            className={`slideshowDot${index === idx && " active"} mx-1 rounded-full h-1 w-5 inline-block cursor-pointer bg-gray`}
                        ></div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
