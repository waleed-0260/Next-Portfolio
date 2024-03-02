"use client"
import React from 'react'
import about from "@/images/about.jpg"
import Image from 'next/image'
import { motion } from "framer-motion";
import { useTheme } from './ThemeContext';
import { Button } from './ui/button'

const AboutSection = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-row items-center justify-around p-6 ${darkMode ? "bg-black text-white": ""}`}>

    <motion.div className=' w-[100%] flex flex-col gap-2' initial={{ x: -100, opacity: 0 }} // Initial position and opacity for the first div
        animate={{ x: 0, opacity: 1 }} // Animation for the first div when it appears
        transition={{ type: "spring", stiffness: 100 }}>
        <h1 className='text-2xl font-bold'>About Me</h1>
        <p>I'm a passionate front-end developer with a keen focus on React.js and UI/UX design. With three years of hands-on experience in the field, I bring a wealth of knowledge and expertise to every project I undertake.
            <br/>
            My journey in the world of technology began with a pursuit of a Bachelor's degree in Information Technology, which has provided me with a solid foundation in understanding the underlying principles of software development. Throughout my studies, I've delved deep into the intricacies of front-end development, honing my skills in React.js to build dynamic and responsive user interfaces that captivate and engage audiences.
            <br/>
            One of my strengths lies in my comprehensive understanding of APIs from a user's perspective. I recognize the pivotal role APIs play in facilitating seamless communication between different software systems, and I leverage this understanding to craft intuitive and user-friendly experiences for end-users.
            <br/>
            Throughout my career, I've had the opportunity to work on a diverse range of projects, from e-commerce platforms to web applications, each presenting its own unique set of challenges and opportunities for growth. With every project, my goal is to push the boundaries of what's possible, delivering solutions that not only meet but exceed expectations.
            <br/>
            I'm excited to embark on new challenges, collaborate with like-minded individuals, and continue pushing the boundaries of what's possible in the world of front-end development.
        </p>
        <div>
        <Button variant={'outline'} className="rounded-3xl bg-black text-white">Portfolio</Button>
        </div>

    </motion.div>
    <motion.div className='w-[100%] flex items-center justify-center' initial={{ x: 100, opacity: 0 }} // Initial position and opacity for the second div
        animate={{ x: 0, opacity: 1 }} // Animation for the second div when it appears
        transition={{ type: "spring", stiffness: 100 }}>
      <Image src={about} alt="" height={400} width={500}/>
    </motion.div>
    </div>
  )
}

export default AboutSection