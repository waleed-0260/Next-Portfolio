import React from 'react'
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebook,
    FaGithub,
  } from "react-icons/fa";
  import Link from "next/link";
const Footer = () => {
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
    <div className='w-full flex md:flex-row flex-col items-center justify-around text-black shadow-md bg-[#0A101E] text'>
        <div>
            <p className='font-bold text-md'>Muhammad Waleed Ahsan</p>
        </div>
        <div className="flex flex-row gap-3">
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
    </div>
  )
}

export default Footer