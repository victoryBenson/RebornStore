import React from "react";
import { Testimonial } from "../component/Testimonial";
import { Hero } from "../component/Hero";
import { HowItWorks } from "../component/HowItWorks";
import NewCollections from "../component/NewCollections";


export const LandingPage = () => {
  return (
    <div className="">
      <Hero/>
      <NewCollections/>
      <HowItWorks/>
      <Testimonial />
    </div>
  );
};
