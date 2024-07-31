"use client"
import Image from 'next/image'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import introvert from "@/images/introvert.png"
import { BsToggleOff, BsToggleOn  } from "react-icons/bs";
import Link from 'next/link';
// import { useTheme } from './ThemeContext';
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
  // const { darkMode, toggleTheme } = useTheme();
  return (
    <>
    <div className={`sm:flex hidden flex-row items-center justify-around p-2 w-full shadow-md bg-[#0A101E] text-white transition-all`}>
        <div>
            <Link href={'/'}>
            <b className='font-bold text-2xl'>DEVELOPER</b>
            </Link>
        </div>
        <div>
            <ul className={`flex flex-row items-center gap-5 text`}>
                <li className='list-none'> <Link href={'/'}>Home</Link></li>
                <li className='list-none'> <Link href={'/'}>About</Link></li>
                <li className='list-none'> <Link href={'/'}>Portfolio</Link></li>
                <li className='list-none'> <Link href={'/'}>Services</Link></li>
                <li className='list-none'> <Link href={'/'}>Contact</Link></li>
            </ul>
        </div>
    </div>
    <div className={`flex sm:hidden flex-row items-center justify-between p-2 w-full shadow-md bg-[#0A101E] text-white transition-all`}>
        <Sheet>
          <SheetTrigger>
            <AiOutlineMenu className={`mr-3 text`}/>
          </SheetTrigger>
          <SheetContent className="flex flex-start items-start bg-[#0A101E]">
            <SheetHeader className="mt-8">
              <SheetDescription className="mt-5 flex flex-col gap-3 items-start">
                <p className="cursor-pointer text mt-6">Home </p>
                <Link href={"/"} className="cursor-pointer text decoration-none">About</Link>
                <Link href={"/"} className="cursor-pointer text decoration-none">Portfolio</Link>
                <Link href={"/"} className="cursor-pointer text decoration-none">Contact</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
          </>
  )
}

export default Header 