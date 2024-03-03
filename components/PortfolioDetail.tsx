"use client"
import React from 'react'
import { useTheme } from './ThemeContext';
import Link from "next/link";
import { Button } from './ui/button'
const PortfolioDetail = (heading:any) => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-col p-8 text-black ${darkMode ? "bg-black text-white": null}`}>
        <h1 className='font-bold text-3xl'>  {heading.heading === "1" ? "International Capital Trading" : 
    heading.heading === "2" ? "RealCube Job Portal" : 
    heading.heading === "3" ? "Felix Hawk" :
    heading.heading === "4" ? "Zaman Marketer" :
    null
  }</h1>
        <div className="flex flex-col gap-4 mt-6">
          <div>

          <span className="flex flex-row gap-1"><b>Portfolio Details:</b>
          <p>Finding Homes</p>
          </span>
          <b className="mt-3">
          Project Overview:
          </b>
          <p>
          The &quot;Finding Homes&quot; project epitomizes simplicity and functionality. As a part of my portfolio website, it serves as a showcase of my skills in web development, particularly in creating intuitive and user-friendly interfaces for real-world applications.
          </p>
          </div>
          <div>
            <b>Technologies used</b>
            <ul className='mt-2'>
              <li className="list-disc"><b>Framework:</b> Next Js</li>
              <li className="list-disc"><b>Styling:</b> Tailwind css</li>
              <li className="list-disc"><b>API Integration:</b> Server-side APIs for dynamic data retrieval</li>
              <li className="list-disc"><b>Deployment:</b> Hosted on Vercel for seamless deployment and scalability</li>
            </ul>
          </div>
          <div>
            <b>Implementation Details</b>
            <ul className='mt-2'>
            <li className="list-disc"><b>Frontend Development:</b> Leveraged Next.js for server-side rendering and optimized performance. Utilized Tailwind CSS for rapid UI prototyping and clean, responsive design.</li>
            <li className="list-disc"><b>API integration:</b> Integrated server-side APIs to fetch and display real-time property listings, ensuring up-to-date information for users.</li>
            <li className="list-disc"><b>Responsive Design:</b> Implemented responsive design principles to ensure seamless usability across various devices and screen sizes.</li>
            <li className="list-disc"><b>User Experience Focus:</b> Prioritized intuitive navigation and straightforward search functionalities to enhance the user experience.</li>
            </ul>
          </div>
          <div>

          <b>Outcome:</b>
          <p>The &quot;Finding Homes&quot; portfolio project stands as a testament to my ability to create elegant and functional web applications. By combining modern technologies with a user-centric approach, I&apos;ve crafted a platform that simplifies the process of finding the perfect home for users while showcasing my skills as a frontend developer.</p>
          </div>
          <Link href={"https://ict-next-demo.vercel.app/"} target="blank">
        <Button variant={"outline"} className="rounded-3xl bg-black text-white">Check Original Site</Button>
          </Link>
        </div>
    </div>
  )
}

export default PortfolioDetail