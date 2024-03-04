"use client"
import React from 'react'
import home from "@/images/home.jpg"
import Image from 'next/image'
import portfolio1 from "@/images/portfolio1.png"
import portfolio2 from "@/images/portfolio2.png"
import portfolio3 from "@/images/portfolio3.png"
import portfolio4 from "@/images/portfolio4.png"
import portfolio5 from "@/images/portfolio5.png"
import Link from 'next/link'
import { useTheme } from './ThemeContext';

const PortfolioSection = () => {
  const { darkMode } = useTheme();

  const portfolio = [
    {
      id: 1,
      href: "https://ict-next-demo.vercel.app/",
      img: portfolio1,
      heading: "ICT (International Capital Trading)",
      text: "Built a responsive Finding Home project using Next.js and Tailwind CSS. Leveraged server-side APIs for dynamic data integration."
    },
    {
      id: 2,
      href: "https://jobhunt.realcube.estate",
      img: portfolio2,
      heading: "Real Cube Job Portal",
      text: "This is a JobHunt Application made with React.js. In this project, I have implemented all the APIs and made sure that the full website is dynamic."
    },
    {
      id: 3,
      href: "https://felixhawk.com/",
      img: portfolio3,
      heading: "Felix Hawk",
      text: "In the development of Felix Hawk, a digital marketing agency website, I leveraged React.js and custom CSS to create a dynamic and visually appealing online presence."
    },
    {
      id: 4,
      href: "https://zaman-marketer.vercel.app/",
      img: portfolio4,
      heading: "Zaman Marketer",
      text: "For my friend, a talented digital marketer, I had the privilege of developing a captivating portfolio website using React.js."
    },
    {
      id: 5,
      href: "https://jobhunt.realcube.estate",
      img: portfolio5,
      heading: "Real Cube Property Portal",
      text: "Real Cube Property Portal Worked on implementing the Chatbot it is actually a Q/A "

    },
    {
      id: 6,
      href: "https://felixhawk.com/",
      img: portfolio3,
      heading: "Felix Hawk",
      text: "This is a JobHunt Application made with React.js. In this project, I have implemented all the APIs and made sure that the full website is dynamic."
    }
  ]
  return (
    <div className={`flex flex-col p-9 items-center justify-center ${darkMode ? "bg-black text-white": ""}`}>
      <h1 className='text-2xl font-bold '>Portfolio</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:w-[85%] w-[100%] gap-5 mt-2'>
        {portfolio.map((item:any)=>{
          const communitySlug = item.heading
          .toLowerCase()
          .replace(/\s+/g, "-");
          return(
            <Link href={`/portfolioDetail/${item.id}`} key={item.id} className={`flex flex-col rounded-md shadow-lg md:w-[26vw] sm:w-[43vw] ${darkMode ? " text-black bg-red-600 bg-opacity-80": ""}`}>
          <Image src={item.img} alt="" height={300} width={700} className="h-[200px] w-[100%] rounded-t-md"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'>{item.heading} </b>
          <p className=''>{item.text}</p>
          <p className='underline'>View More</p>
          </div>
        </Link>
          )
        })}
        {/* <Link href={'https://ict-next-demo.vercel.app/'} target='blank' className='flex flex-col shadow-md w-[400px]'>
          <Image src={portfolio1} alt="" height={300} width={700} className="h-[200px] w-[100%]"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'> </b>
          <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </Link>
        <Link href={'https://jobhunt.realcube.estate/'} target='blank' className='flex flex-col shadow-md w-[400px]'>
          <Image src={portfolio2} alt="" height={300} width={700} className="h-[200px] w-[100%]"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'> Lorem ipsum</b>
          <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </Link>
        <Link href={'https://felixhawk.com/'} target='blank' className='flex flex-col shadow-md w-[400px]'>
          <Image src={portfolio3} alt="" height={300} width={700} className="h-[200px] w-[100%]"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'> Lorem ipsum</b>
          <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </Link>
        <Link href={'https://zaman-marketer.vercel.app/'} target='blank' className='flex flex-col shadow-md w-[400px]'>
          <Image src={portfolio4} alt="" height={300} width={700} className="h-[200px] w-[100%]"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'> Lorem ipsum</b>
          <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </Link>
        <Link href={'/https://ict-next-demo.vercel.app/'} target='blank' className='flex flex-col shadow-md w-[400px]'>
          <Image src={home} alt="" height={300} width={700} className="h-[200px] w-[100%]"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'> Lorem ipsum</b>
          <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </Link>
        <Link href={'/https://ict-next-demo.vercel.app/'} target='blank' className='flex flex-col shadow-md w-[400px]'>
          <Image src={home} alt="" height={300} width={700} className="h-[200px] w-[100%]"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold'> Lorem ipsum</b>
          <p className=''> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </Link> */}

      </div>
    </div>
  )
}

export default PortfolioSection