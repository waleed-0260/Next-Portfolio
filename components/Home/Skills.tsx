"use client"

import React, {useEffect} from "react";
import { Progress } from "../ui/progress";
import AOS from "aos"
import ProgressBar from "@ramonak/react-progress-bar";



const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
  return (
    <div
      className="flex md:flex-row flex-col md:items-left items-center justify-around w-full m-10"
    >
      <div className="flex flex-col" data-aos="fade-right">
        <h1 className="text-4xl font-bold heading">MY SKILLS</h1>
        <p className="md:w-[40vw] w-[80vw] text-black mt-[20px] text">
        With a very strong foundation in JavaScript, I excel in leveraging its full potential to build efficient and scalable applications. My expertise in React and Next.js allows me to create dynamic, responsive, and user-friendly interfaces that enhance user experience. This combination of skills ensures high-performance frontend development tailored to meet modern web standards.<br />
        <br />
        On the backend, I am skilled in Node.js and Express.js, which enables me to develop secure and scalable server-side solutions. Additionally, I have hands-on experience with MongoDB for NoSQL databases and have successfully completed projects using MySQL, demonstrating my versatility in managing various types of databases.</p>
      </div>

      <div className="mt-4 sm:mt-0" data-aos="fade-left">
      <div className="flex flex-col gap-1 mt-3 mt-6">
        <div className="flex flex-col font-bold gap-1 mt-3 text">
          <div className="flex flex-row items-center justify-between">
            <p>
          JavaScript
            </p>
            <p>99%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            {/* <Progress value={97} className="h-[5px] bg-yellow-600"/> */}
            <ProgressBar 
    completed={99}
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
            <p>99%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={99}
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
            <p>99%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={99}
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
            <p>99%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={99}
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
            <p>99%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={99}
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
            <p>99%</p>

          </div>
          <div className="md:w-[450px] w-[80vw]">
            <ProgressBar 
    completed={99}
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
  );
};

export default Skills;
