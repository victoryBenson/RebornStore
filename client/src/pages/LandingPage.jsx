import React from "react";
import { Testimonial } from "../component/Testimonial";
import { Hero } from "../component/Hero";
import NewCollections from "../component/NewCollections";
import { FrequentlyAQ } from "../component/FrequentlyAQ";
import { WhyChooseUs } from "../component/WhyChooseUs";


export const LandingPage = () => {
  return (
    <div className="">
      <Hero/>
      <NewCollections/>
      <WhyChooseUs/>
      <FrequentlyAQ/>
      <Testimonial />
    </div>
  );
};
