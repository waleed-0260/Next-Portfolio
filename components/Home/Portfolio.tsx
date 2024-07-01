"use client"
import React, {useEffect} from "react";
import PortfolioSection from "../PortfolioSection";
import AOS from "aos"
import 'aos/dist/aos.css';
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <div className="flex flex-col m-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center sm:text-left">Portfolio</h2>
        {/* <div className="grid grid-cols-3 gap-6">
          <div className=" relative group ">
            <div className="w-[400px] h-[300px] overflow-hidden">

            <Image
              src={portfolio1}
              alt="image 1"
              className="w-[100%] h-[100%] z-10 transition-transform duration-200 ease-in-out hover:scale-[1.07]"
              />
              </div>
            <b className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {" "}
              International Capital Trading ICT
              </b>
          </div>
          <div className=" relative group ">
            <Image
              src={portfolio2}
              alt="image 1"
                            className="w-[400px] h-[300px] z-10 transition-transform duration-200 ease-in-out hover:scale-104"

            />
            <b className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {" "}
              International Capital Trading ICT
            </b>
          </div>
          <div className=" relative group ">
            <Image
              src={portfolio3}
              alt="image 1"
                            className="w-[400px] h-[300px] z-10 transition-transform duration-200 ease-in-out hover:scale-104"

            />
            <b className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {" "}
              International Capital Trading ICT
            </b>
          </div>
          <div className=" relative group ">
            <Image
              src={portfolio4}
              alt="image 1"
                            className="w-[400px] h-[300px] z-10 transition-transform duration-200 ease-in-out hover:scale-104"

            />
            <b className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {" "}
              International Capital Trading ICT
            </b>
          </div>
          <div className=" relative group ">
            <Image
              src={portfolio5}
              alt="image 1"
                            className="w-[400px] h-[300px] z-10 transition-transform duration-200 ease-in-out hover:scale-104"

            />
            <b className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {" "}
              International Capital Trading ICT
            </b>
          </div>
          <div className=" relative group ">
            <Image
              src={portfolio1}
              alt="image 1"
              className="w-[400px] h-[300px] z-10 transition-transform duration-200 ease-in-out hover:scale-104"
            />
            <b className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              {" "}
              International Capital Trading ICT
            </b>
          </div>
        </div> */}
        <PortfolioSection/>
      </div>
    </>
  );
};

export default Portfolio;
