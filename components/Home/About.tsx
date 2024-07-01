"use client"
import React, {useEffect} from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import about from "@/images/about.jpg";
import { Progress } from "../ui/progress";
import AOS from "aos"

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="flex md:flex-row flex-col items-center justify-around w-full m-10" data-aos="fade-up">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <b className="mt-5">Hi, I&apos;m Muhammad Waleed Ahsan</b>
        <p className="md:w-[40vw] w-[80vw] text-[#7E7E7E]">
          An excellent Front End Developer expert in ReactJs and NextJs. I&apos;m in this field from the last 2 years and I have covered all aspects of this field. I have strong foundation in JavaScript which helps me working with these technology easily. I&apos;m also good in making the User Interfaces of website and make them easy to use for the user. Currently, I&apos;m learning MERN stack development and I&apos;m persuing my degree in Information Technology from BZU Multan, Pakistan.
        </p>
        <b className="mt-5">WHAT IS MY SKILL LEVEL</b>
        <p className="md:w-[500px] w-[80vw] text-[#7E7E7E]">
          I&apos;m expert in ReactJs and NextJs and I&apos;m on the road to learn MERN stack development. 
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-6">
          <div className="flex flex-col font-bold gap-3">
            HTML/CSS
            <div className="md:w-[220px] w-[80vw]">
              <Progress value={99} />
            </div>
          </div>
          <div className="flex flex-col font-bold gap-3">
            JavaScript
            <div className="md:w-[220px] w-[80vw]">
              <Progress value={97} />
            </div>
          </div>
          <div className="flex flex-col font-bold gap-3">
            ReactJs
            <div className="md:w-[220px] w-[80vw]">
              <Progress value={99} />
            </div>
          </div>
          <div className="flex flex-col font-bold gap-3">
            NextJs
            <div className="md:w-[220px] w-[80vw]">
              <Progress value={99} />
            </div>
          </div>
          <div className="flex flex-col font-bold gap-3">
            Node JS
            <div className="md:w-[220px] w-[80vw]">
              <Progress value={50} />
            </div>
          </div>
          <div className="flex flex-col font-bold gap-3">
            Tailwind CSS
            <div className="md:w-[220px] w-[80vw]">
              <Progress value={100} />
            </div>
          </div>
        </div>
        <Button variant={"outline"} className="w-[140px] bg-transparent hover:bg-black hover:text-white mt-5 rounded-3xl">See More</Button>
      </div>

      <div>
        <Image src={about} alt="about image" className="w-[400px] h-[400px] rounded-lg" />
        <div>
          {" "}
          <b>6+ YEARS</b>
        </div>
      </div>
    </div>
  );
};

export default About;
