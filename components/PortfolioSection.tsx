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
const PortfolioSection = () => {

  const portfolio = [
    {
      id: 1,
      href: "https://ict-next-demo.vercel.app/",
      img: portfolio1,
      heading: "ICT (International Capital Trading)",
      text: "Built a responsive Finding Home project using Next.js and Tailwind CSS. Leveraged server-side APIs for dynamic data integration.",
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
      href: "https://furns-ecommerce.vercel.app/",
      img: portfolio4,
      heading: "Furns Ecommerce",
      text: "This is a Full Stack application made using Next Js page router, Zustand for State Management and React tools"
    },
    {
      id: 5,
      href: "https://property.realcube.estate/",
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
    <div className={`flex flex-col p-9 items-center justify-center`}>
      <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex flex-col justify-center items-center gap-9 mt-2'>
        {portfolio.map((item:any)=>{
          const communitySlug = item.heading
          .toLowerCase()
          .replace(/\s+/g, "-");
          return(
            <div key={item.id} className={`flex flex-col rounded-md shadow-lg lg:w-[24vw] sm:w-[35vw] w-[85vw]  bg-[#101624]`}>
          <Image src={item.img} alt="" height={300} width={700} className="h-[200px] w-[100%] rounded-t-md"/>
          <div className='p-3 flex flex-col'>

          <b className='font-bold heading'>{item.heading} </b>
          <p className=' text'>{item.text}</p>
          <Link href={item.href} target='blank' className='underline heading mt-2'>View Full Project</Link>
          </div>
        </div>
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