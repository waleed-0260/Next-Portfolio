"use client"

import React, {useEffect, useState} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Button } from "../ui/button";


const Skills = () => {
  const [right, setRight] = useState(1200);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position from the top of the page
      const scrollPosition = window.scrollY;

      // Adjust the offset based on the scroll position
      if (scrollPosition < 300) {
        // Range from 1200 to 600
        setRight(1200 - (scrollPosition * 600) / 300);
      } else if (scrollPosition < 600) {
        // Range from 600 to 0
        setRight(600 - ((scrollPosition - 300) * 600) / 300);
      } else {
        // Below 600, the offset is 0
        setRight(0);
      }

      // When scrolling back up, reset accordingly
      if (scrollPosition < 300) {
        setRight(1200);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      className=" w-[90%] m-10 overflow-hidden"
    >
      <div
        className="w-full bg-white h-[1px] relative transition-all duration-300 "
        style={{ right: `${right}px` }}
      ></div>
      <div className="flex md:flex-row flex-col md:items-left items-center justify-between mt-4">

      <div className="flex flex-col" data-aos="fade-right">
        <h1 className="text-4xl font-bold heading">MY SKILLS</h1>
        <p className="md:w-[40vw] w-[80vw] text-black mt-[20px] text">
        With a very strong foundation in JavaScript, I excel in leveraging its full potential to build efficient and scalable applications. My expertise in React and Next.js allows me to create dynamic, responsive, and user-friendly interfaces that enhance user experience. This combination of skills ensures high-performance frontend development tailored to meet modern web standards.<br />
        <br />
        On the backend, I am skilled in Node.js and Express.js, which enables me to develop secure and scalable server-side solutions. Additionally, I have hands-on experience with MongoDB for NoSQL databases and have successfully completed projects using MySQL, demonstrating my versatility in managing various types of databases.</p>
        <Button variant={"outline"} className="bg-white hover:bg-[#FEC544] w-[200px] hover:text-black transition-all mt-4 border-none rounded-3xl">Get a Purposal</Button>
      </div>

      <div className="mt-4 sm:mt-0" data-aos="fade-left">
      <div className="flex flex-col gap-1 mt-3 mt-6">
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          JavaScript
            </p>
            <p>100%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            {/* <Progress value={97} className="h-[5px] bg-yellow-600"/> */}
            <ProgressBar 
    completed={100}
    bgColor="#FEC544"
    height="5px"
    isLabelVisible={false}
    labelColor="#e80909"
    baseBgColor="#ffffff"
    animateOnRender
    />
          </div>
        </div>
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          ReactJs
            </p>
            <p>100%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={100}
    bgColor="#FEC544"
    height="5px"
    isLabelVisible={false}
    labelColor="#e80909"
    baseBgColor="#ffffff"
    animateOnRender
    />
          </div>
        </div>
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          NextJs
            </p>
            <p>100%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={100}
    bgColor="#FEC544"
    height="5px"
    isLabelVisible={false}
    labelColor="#e80909"
    baseBgColor="#ffffff"
    animateOnRender
    />
          </div>
        </div>
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          Node JS
            </p>
            <p>100%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={100}
    bgColor="#FEC544"
    height="5px"
    isLabelVisible={false}
    labelColor="#e80909"
    baseBgColor="#ffffff"
    animateOnRender
    />
          </div>
        </div>
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          MongoDB
            </p>
            <p>100%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={100}
    bgColor="#FEC544"
    height="5px"
    isLabelVisible={false}
    labelColor="#e80909"
    baseBgColor="#ffffff"
    animateOnRender
    />
          </div>
        </div>
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          MySql
            </p>
            <p>100%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={100}
    bgColor="#FEC544"
    height="5px"
    isLabelVisible={false}
    labelColor="#e80909"
    baseBgColor="#ffffff"
    animateOnRender
    />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
