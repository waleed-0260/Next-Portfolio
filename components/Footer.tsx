"use client"
import React, { useState } from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebook, FaGithub  } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from './ThemeContext';

const Footer = () => {
    // const { darkMode } = useTheme();

    // const [hoveredLink, setHoveredLink] = useState(null);

    // const handleMouseEnter = (index:any) => {
    //   setHoveredLink(index);
    // };
  
    // const handleMouseLeave = () => {
    //   setHoveredLink(null);
    // };
  
    // const links = [
    //   { text: <FaLinkedinIn className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "#" },
    //   { text:  <FaInstagram className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "#" },
    //   { text: <FaFacebook className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "#" },
    //   { text: <FaGithub className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "#" }
    // ];
  return (
    <div className={`flex sm:flex-row flex-col justify-around sm:items-center p-4 w-full shadow-md text-white`}>
       <div className="flex flex-row gap-3 mt-2">
       {/* {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.href} 
          className="p-2 rounded-full border border-black shadow-2xl" 
          style={{
            boxShadow: hoveredLink === index ? "0 5px 15px 5px rgba(212, 0, 0, 0.8)" : "none"
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {link.text}
        </Link>
      ))} */}
        {/* <Link href="#" className="p-2 rounded-full border border-black hover:border-red-600 shadow-2xl"   style={{
    boxShadow: "0 5px 15px 5px rgba(212, 0, 0, 0.8)", // Adjust the spread value to increase the shadow
  }}>
    <FaLinkedinIn className={`${darkMode ? "text-red-700": "text-black"} text-md`} />
  </Link>
  <Link href="#" className="p-2 rounded-full border border-black hover:border-red-600 shadow-2xl">
    <FaInstagram className={`${darkMode ? "text-red-700": "text-black"} text-md`} />
  </Link>
  <Link href="#" className="p-2 rounded-full border border-black hover:border-red-600 shadow-2xl">
    <FaFacebook className={`${darkMode ? "text-red-700": "text-black"} text-md`} />
  </Link>
  <Link href="#" className="p-2 rounded-full border border-black hover:border-red-600 shadow-2xl">
    <FaGithub className={`${darkMode ? "text-red-700": "text-black"} text-md`} />
  </Link> */}
        </div>
        <div>
            <em>Design and Developed by &copy; Muhammad Waleed Ahsan</em>
        </div>
        </div>
  )
}

export default Footer