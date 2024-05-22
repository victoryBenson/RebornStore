import React from "react";
import { Testimonial } from "../component/Testimonial";
import { Hero } from "../component/Hero";
import { HowItWorks } from "../component/HowItWorks";
import NewCollections from "../component/NewCollections";
import { FrequentlyAQ } from "../component/FrequentlyAQ";


export const LandingPage = () => {
  return (
    <div className="">
      <Hero/>
      <NewCollections/>
      <HowItWorks/>
      <FrequentlyAQ/>
      <Testimonial />
    </div>
  );
};
