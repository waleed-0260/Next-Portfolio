"use client"
import Image from 'next/image'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import introvert from "@/images/introvert.png"
import { BsToggleOff, BsToggleOn  } from "react-icons/bs";
import Link from 'next/link';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  console.log(darkMode)
  return (
    <div className={`flex flex-row items-center justify-around p-2 w-full shadow-md ${darkMode ? "bg-black": "bg-white"} transition-all`}>
        <div>
            <Link href={'/'}>
            <Image src={introvert} alt='' height={100} width={100}/>
            </Link>
        </div>
        <div>
            <ul className={`flex flex-row items-center gap-5 ${darkMode ? "text-white": "text-black"}`}>
                <li className='list-none'> <Link href={'/'}>Home</Link></li>
                <li className='list-none'> <Link href={'/about'}>About</Link></li>
                <li className='list-none'> <Link href={'/portfolio'}>Portfolio</Link></li>
                <li className='list-none'> <Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
        <div>
        {darkMode ? (
          <BsToggleOn className={`text-[30px] ${darkMode ? "text-white": "text-black"} cursor-pointer`} onClick={toggleTheme}/>
          ): (
          <BsToggleOff  className='text-[30px] cursor-pointer' onClick={toggleTheme}/>
        )}
        </div>
    </div>
  )
}

export default Header 