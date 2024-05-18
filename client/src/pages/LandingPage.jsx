import React from "react";
import { Testimonial } from "../component/Testimonial";
import { Hero } from "../component/Hero";
import { HowItWorks } from "../component/HowItWorks";


export const LandingPage = () => {
  return (
    <div className="">
      <Hero/>
      <HowItWorks/>
      <Testimonial />
    </div>
  );
};
