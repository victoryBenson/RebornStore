import React from "react";
import { Testimonial } from "../component/Testimonial";
import { Hero } from "../component/Hero";
import { HowItWorks } from "../component/HowItWorks";


export const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <Testimonial />
    </div>
  );
};
