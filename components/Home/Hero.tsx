"use client"
import React, {useEffect} from "react";
import Home from "@/images/Home.jpg";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import AOS from "aos"
import 'aos/dist/aos.css';
// import resume from "@/images/resume.pdf"

const Hero = () => {
  const links = [
    {
      text: <FaLinkedinIn className={`"text-black" text-md`} />,
      href: "https://www.linkedin.com/in/waleed0260/",
    },
    {
      text: <FaInstagram className={`"text-black" text-md`} />,
      href: "https://github.com/Waleed0260",
    },
    {
      text: <FaFacebook className={`"text-black" text-md`} />,
      href: "https://www.facebook.com/",
    },
    {
      text: <FaGithub className={`"text-black" text-md`} />,
      href: "https://github.com/Waleed0260",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="flex items-center justify-center p-3 flex-col gap-8 m-10" data-aos="fade-up">
      <div>
        <Image src={Home} alt=""  className="rounded-[200px] w-[200px] h-[200px]"/>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[#7E7E7E] font-semibold font-poppins">Hello, I&apos;m Waleed Ahsan</p>
        <h2 className="text-5xl font-bold">Developer</h2>
        <p className="md:w-[60%] w-[80vw] mt-3 text-[#7E7E7E]">
          I&apos;m a Front End Developer Expert in React and Next Js. I have 2 years of professional experience in this field. I use tailwind css and ShadCN to make user interfaces interactive and easy to use.
        </p>
        <div className="flex flex-row gap-3 mt-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="p-2 rounded-full border border-black shadow-2xl"
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* <a href={resume} download> */}
        <Button variant={"outline"} className="bg-white hover:bg-black hover:text-white mt-4 rounded-3xl">Download CV</Button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Hero;
