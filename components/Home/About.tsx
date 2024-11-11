"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import about from "@/images/about.webp";
import { Element } from "react-scroll";
import Link from "next/link";

const About = () => {
  const [rightOffset, setRightOffset] = useState(1200);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position from the top of the page
      const scrollPosition = window.scrollY;

      // Adjust the offset based on the scroll position
      if (scrollPosition < 300) {
        // Range from 1200 to 600
        setRightOffset(1200 - (scrollPosition * 600) / 300);
      } else if (scrollPosition < 600) {
        // Range from 600 to 0
        setRightOffset(600 - ((scrollPosition - 300) * 600) / 300);
      } else {
        // Below 600, the offset is 0
        setRightOffset(0);
      }

      // When scrolling back up, reset accordingly
      if (scrollPosition < 300) {
        setRightOffset(1200);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Element name="about" className=" w-[90%] m-10 overflow-hidden">
      <div
        className="w-full bg-white h-[1px] relative transition-all duration-300"
        style={{ right: `${rightOffset}px` }}
      ></div>{" "}
      <div className="flex md:flex-row flex-col items-center justify-between mt-4 ">
        <div
          className="flex flex-col sm:items-start items-center"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-bold heading">ABOUT ME</h1>
          <b className="mt-5 text sm:text-left text-center">
            Hi, I&apos;m Muhammad Waleed Ahsan
          </b>
          <p
            className="md:w-[40vw] w-[80vw] text-black text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            With over 2 years of hands-on experience, I&apos;m a seasoned expert
            in MERN stack development. As a dedicated Computer Science student
            and passionate tech enthusiast, I specialize in crafting efficient,
            user-friendly interfaces using React and Next.js. My robust
            JavaScript skills ensure seamless integration across these
            technologies.
            <br />
            {/* I excel in building secure, scalable backend systems using Node.js, MongoDB, and PostgreSQL. Currently, I&apos;m pursuing a degree in Information Technology from BZU Multan, Pakistan, while continuously honing my skills in this dynamic field.
<br /> */}
          </p>
          <p
            className="font-bold text mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let&apos;s build the future together!
          </p>

          <div className="flex flex-col">
            <ul className="mt-[5px] gap-4 text list-disc">
              <li className="flex items-center space-x-2 relative">
                <span className="absolute -left-5 list-disc text-2xl">•</span>
                <p className="font-bold text-md">Email:</p>
                <p className="break-all overflow-wrap-break-word text-sm">
                  muhamamdwaleedahsan43@gmail.com
                </p>
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
                <span className="absolute -left-5 list-disc text-2xl">•</span>{" "}
                <p className="font-bold text-md">Github:</p>
                <Link href="https://github.com/waleed0260" target="blank">
                  github.com/waleed0260
                </Link>
              </li>
            </ul>
            <ul className="mt-[5px] gap-4 text list-disc">
              <li className="flex items-center space-x-2 relative">
                <span className="absolute -left-5 list-disc text-2xl">•</span>{" "}
                <p className="font-bold text-md">Address:</p>
                <p>Multan, Pakistan</p>
              </li>
            </ul>
            <ul className="mt-[5px] gap-4 text list-disc">
              <li className="flex items-center space-x-2 relative">
                <span className="absolute -left-5 list-disc text-2xl">•</span>{" "}
                <p className="font-bold text-md">Location:</p>
                <p>Freelance, InHouse</p>
              </li>
            </ul>
            <Button
              variant={"outline"}
              className="bg-white hover:bg-[#FEC544] w-[200px] hover:text-black transition-all mt-4 border-none rounded-3xl"
            >
              Start a Conversation
            </Button>
          </div>
        </div>

        <div className="mt-4 sm:mt-0" data-aos="fade-left">
          <Image
            src={about}
            alt="about image"
            className="sm:w-[450px] w-[80vw] h-[400px] rounded-lg"
          />
          <div> </div>
        </div>
      </div>

      <h1 className="text-8xl font-bold text-[#FEC544] name">M.WALEED AHSAN</h1>
    </Element>
  );
};

export default About;
