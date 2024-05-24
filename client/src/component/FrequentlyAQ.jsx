import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaqData } from "../database/FAQ";
import AOS from 'aos'
import "aos/dist/aos.css"


export const FrequentlyAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (index) => {
    isOpen === index ? setIsOpen(false) : setIsOpen(index);
  };

  //animation on scroll
    useEffect(() => {
        AOS.init({
        duration: 500
        })    
    },[])

  return (
    <section data-aos="fade-up">
        <div className="flex flex-col items-center justify-center py-10">
            <div className="p-5">
                <p className="text-xl sm:text-3xl text-center font-semibold pb-3 font-poppins">
                    Frequently Asked Questions
                </p>
            </div>
            <div data-aos="flip-up" className="md: w-[90%] p-2">
                {FaqData.map((data, index) => {
                    return (
                        <div key={index} className="p-2 md:p-4">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)} >
                                <p className="text-base md:text-xl pr-2 font-semibold">{data.title}</p>
                                <span className="transition-all duration-200">
                                    {isOpen === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                </span>
                            </div>
                            <div className="p-2 text-gray ease-in-out transition-all duration-300">
                                {isOpen === index && <div className="text-base">{data.details}</div>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};
