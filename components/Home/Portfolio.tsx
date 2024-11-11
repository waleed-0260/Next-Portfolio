"use client"
import React, {useEffect} from "react";
import PortfolioSection from "../PortfolioSection";
import AOS from "aos"
import 'aos/dist/aos.css';
import { Element } from "react-scroll";
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <Element name="portfolio" className="flex flex-col m-10 w-[90%]" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center sm:text-left heading">Portfolio</h2>
        <PortfolioSection/>
      </Element>
    </>
  );
};

export default Portfolio;
