"use client"
import Image from 'next/image'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import introvert from "@/images/introvert.png"
import { BsToggleOff, BsToggleOn  } from "react-icons/bs";
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <>
    <div className={`sm:flex hidden flex-row items-center justify-around p-2 w-full shadow-md ${darkMode ? "bg-black": "bg-white"} transition-all`}>
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
    <div className={`flex sm:hidden flex-row items-center justify-between p-2 w-full shadow-md ${darkMode ? "bg-black": "bg-white"} transition-all`}>
        <Sheet>
          <SheetTrigger>
            <AiOutlineMenu className={`mr-3 ${darkMode ? "text-white": "text-black"}`}/>
          </SheetTrigger>
          <SheetContent className="flex flex-start items-start">
            <SheetHeader className="mt-8">
              <SheetDescription className="mt-5 flex flex-col gap-3 items-start">
                <p className="cursor-pointer text-black mt-6">Home </p>
                <Link href={"/about"} className="cursor-pointer text-black decoration-none">About</Link>
                <Link href={"/portfolio"} className="cursor-pointer text-black decoration-none">Portfolio</Link>
                <Link href={"/contact"} className="cursor-pointer text-black decoration-none">Contact</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div>
        {darkMode ? (
          <BsToggleOn className={`text-[30px] ${darkMode ? "text-white": "text-black"} cursor-pointer`} onClick={toggleTheme}/>
          ): (
          <BsToggleOff  className='text-[30px] cursor-pointer' onClick={toggleTheme}/>
        )}
        </div>
      </div>
          </>
  )
}

export default Header 