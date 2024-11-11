"use client"
import React, {useEffect, useState} from "react";
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
import { FaLongArrowAltDown } from "react-icons/fa";

// import resume from "@/images/resume.pdf"
import { Element } from 'react-scroll';

const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPos(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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


  return (
    <Element name="home" className="flex items-center justify-center p-3 flex-col gap-8 m-10" data-aos="fade-up">
      <div>
        <Image src={Home} alt=""  className="rounded-[200px] w-[140px] h-[140px]"/>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[#7E7E7E] font-semibold font-poppins">Hello, I&apos;m Waleed Ahsan</p>
        <h2 className="sm:text-5xl text-2xl font-bold heading" data-aos="fade-down" data-aos-delay="200">Full Stack Developer</h2>
        {/* <p className="md:w-[100%] w-[80vw] mt-3 text text-center">
        As a Full Stack Developer with 2+ years of experience, I specialize in building secure, fast, and scalable web apps with MERN stack and Next.js. My expertise shines in frontend development using React and Next.js, and I create robust backends with Node.js, MongoDB, and PostgreSQL.
</p> */}
<div className="text text-center mt-4" data-aos="fade-up" data-aos-delay="200">

<p
        style={{
          marginRight: `${Math.min(scrollPos * 0.2, 100)}px`, // Adjust speed and max limit
        }}
        className="transition-all duration-300"
      >
        Creative thinking and problem solving and where mind wanders
      </p>
      <p
        style={{
          marginLeft: `${Math.min(scrollPos * 0.2, 100)}px`, // Adjust speed and max limit
        }}
        className="transition-all duration-300"
      >
        using my knowledge and passion to develop as a medium
      </p>
</div>
        {/* <p className="font-bold text-xl text">
*Ready to transform your ideas into reality*
        </p> */}
        <div className="flex flex-row gap-3 mt-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="p-2 rounded-full border border-black shadow-2xl text hover:bg-[#FEC544] hover:text-black transition-all"
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* <Button variant={"outline"} className="bg-white hover:bg-[#FEC544] border-none hover:text-black transition-all mt-4 rounded-3xl">Download CV</Button> */}
        <p className="h-[80px] w-[80px] rounded-full border-[2px] border-[#FEC544] bg-transparent text-[#FEC544] flex items-center justify-center text-2xl arrow hover:bg-[#FEC544] hover:text-black transition duration-300  cursor-pointer">
  <FaLongArrowAltDown />
</p>      

</div>
    </Element>
  );
};

export default Hero;
