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
    <div className="flex md:flex-row flex-col items-center justify-around w-full m-10">
      <div className="flex flex-col sm:items-start items-center" data-aos="fade-right">
        <h1 className="text-4xl font-bold heading">ABOUT ME</h1>
        <b className="mt-5 text sm:text-left text-center">Hi, I&apos;m Muhammad Waleed Ahsan</b>
        <p className="md:w-[40vw] w-[80vw] text-black text">
        I&apos;m an expert in MERN stack development with over 2 years of experience. As a Computer Science student with a huge passion for computer-based technology, I excel in creating efficient and user-friendly interfaces using React and Next.js. My strong foundation in JavaScript enables me to work seamlessly with these technologies. I have extensive experience in building secure and scalable backend systems using Node.js, MongoDB, and PostgreSQL. I&apos;m currently pursuing my degree in Information Technology from BZU Multan, Pakistan, and continue to expand my skills in this dynamic field.
        </p>

        <div className="flex flex-col">
          <div className="mt-[5px] flex flex-row items-center gap-4 text">
            <p className="font-bold text-md">Phone:</p>
            <p>+923342987718</p>
          </div>
          {/* <div className="mt-[5px] flex flex-row items-center gap-4 text ">
            <p className="font-bold text-md">Email:</p>
            <p className="break-all overflow-wrap-break-word">muhamamdwaleedahsan43@gmail.com</p>
          </div> */}
          <div className="mt-[5px] flex flex-row items-center gap-4 text">
            <p className="font-bold text-md">From:</p>
            <p>Multan, Pakistan</p>
          </div>
          <div className="mt-[5px] flex flex-row items-center gap-4 text">
            <p className="font-bold text-md">Freelance:</p>
            <p>Available</p>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-6">
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
        <Button variant={"outline"} className="w-[140px] bg-transparent hover:bg-black hover:text-white mt-5 rounded-3xl">See More</Button> */}
      </div>

      <div className="mt-4 sm:mt-0" data-aos="fade-left">
        <Image src={about} alt="about image" className="sm:w-[400px] w-[80vw] h-[400px] rounded-lg" />
        <div>
          {" "}
        </div>
      </div>
    </div>
  );
};

export default About;
