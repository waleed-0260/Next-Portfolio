"use client"
import React, {useEffect} from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import about from "@/images/about.webp";
import { Progress } from "../ui/progress";
import AOS from "aos"
import { Element } from 'react-scroll';
import Link from "next/link";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <Element name="about" className="flex md:flex-row flex-col items-center justify-around w-full m-10">
      <div className="flex flex-col sm:items-start items-center" data-aos="fade-right">
        <h1 className="text-4xl font-bold heading">ABOUT ME</h1>
        <b className="mt-5 text sm:text-left text-center">Hi, I&apos;m Muhammad Waleed Ahsan</b>
        <p className="md:w-[40vw] w-[80vw] text-black text">
        With over 2 years of hands-on experience, I&apos;m a seasoned expert in MERN stack development. As a dedicated Computer Science student and passionate tech enthusiast, I specialize in crafting efficient, user-friendly interfaces using React and Next.js. My robust JavaScript skills ensure seamless integration across these technologies.
<br />
I excel in building secure, scalable backend systems using Node.js, MongoDB, and PostgreSQL. Currently, I&apos;m pursuing a degree in Information Technology from BZU Multan, Pakistan, while continuously honing my skills in this dynamic field.
<br />
        </p>
        <p className="font-bold text mt-2">
Let&apos;s build the future together!

        </p>

        <div className="flex flex-col">
        <ul className="mt-[5px] gap-4 text list-disc">
  <li className="flex items-center space-x-2 relative">
    <span className="absolute -left-5 list-disc text-2xl">•</span>
    <p className="font-bold text-md">Email:</p>
    <p className="break-all overflow-wrap-break-word text-sm">muhamamdwaleedahsan43@gmail.com</p>
  </li>
</ul>
          <ul className="mt-[5px] flex  gap-4 text list-disc">
          <li className="flex items-center space-x-2 relative">
          <span className="absolute -left-5 list-disc text-2xl">•</span>
                      <p className="font-bold text-md">Phone:</p>
            <p>+923342987718</p>
            </li>
          </ul>
          <ul className="mt-[5px] gap-4 text list-disc">
          <li className="flex items-center space-x-2 relative">
          <span className="absolute -left-5 list-disc text-2xl">•</span>            <p className="font-bold text-md">Github:</p>
            <Link href="https://github.com/waleed0260" target="blank">github.com/waleed0260</Link>
            </li>
          </ul>
          <ul className="mt-[5px] gap-4 text list-disc">
          <li className="flex items-center space-x-2 relative">
          <span className="absolute -left-5 list-disc text-2xl">•</span>            <p className="font-bold text-md">Address:</p>
            <p>Multan, Pakistan</p>
            </li>
          </ul>
          <ul className="mt-[5px] gap-4 text list-disc">
          <li className="flex items-center space-x-2 relative">
          <span className="absolute -left-5 list-disc text-2xl">•</span>            <p className="font-bold text-md">Location:</p>
            <p>Freelance, InHouse</p>
            </li>
          </ul>
          <Button variant={"outline"} className="bg-white hover:bg-[#FEC544] w-[200px] hover:text-black transition-all mt-4 border-none rounded-3xl">Start a Conversation</Button>
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
        <Image src={about} alt="about image" className="sm:w-[450px] w-[80vw] h-[400px] rounded-lg" />
        <div>
          {" "}
        </div>
      </div>
    </Element>
  );
};

export default About;
