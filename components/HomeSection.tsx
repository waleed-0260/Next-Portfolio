"use client"
import React from "react";
import Hero from "./Home/Hero";
import About from "./Home/About";
import Portfolio from "./Home/Portfolio";
import What from "./Home/What";
import Skills from "./Home/Skills";
import Review from "./Home/Review";
import Blog from "./Home/Blog";
import Contact from "./Home/Contact";
import Resume from "./Home/Resume";

const HomeSection = () => {

  // const links = [
  //   { text: <FaLinkedinIn className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "https://www.linkedin.com/in/waleed0260/" },
  //   { text:  <FaInstagram className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "https://github.com/Waleed0260" },
  //   { text: <FaFacebook className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "https://www.facebook.com/" },
  //   { text: <FaGithub className={`${darkMode ? "text-red-700": "text-black"} text-md`} />, href: "https://github.com/Waleed0260" }
  // ];

  return (
    <div className="flex flex-col justify-center items-center md:w-[100%] w-[100%] bg-[#0A101E]">
    <Hero/>
    <About/>
    <Skills/>
    <What/>
    <Portfolio/>
    <Review/>
    <Resume/>
    <Blog/>
    <Contact/>
    </div>
//     <div
//     className={`flex sm:flex-row flex-col items-center justify-between p-6 gap-2 ${darkMode ? "bg-black text-white": ""} transition-all`}
// >
//       <motion.div
//         className="w-[100%] flex items-center justify-center"
//         initial={{ x: -100, opacity: 0 }} // Initial position and opacity for the first div
//         animate={{ x: 0, opacity: 1 }} // Animation for the first div when it appears
//         transition={{ type: "spring", stiffness: 100 }}>
//         <Image src={Home} alt="" height={400} width={500}  className="shadow-lg"/>
//       </motion.div>
//       <motion.div
//         className="w-[100%] flex flex-col gap-2"
//         initial={{ x: 100, opacity: 0 }} // Initial position and opacity for the second div
//         animate={{ x: 0, opacity: 1 }} // Animation for the second div when it appears
//         transition={{ type: "spring", stiffness: 100 }}>
//         <p className="text-sm ">Hi, I&apos;m</p>
//         <p className="text-4xl font-bold text-red-800">Muhammad Waleed Ahsan</p>
//         <p className="text-md">
//         Dedicated to crafting captivating digital experiences. With expertise in React.js and a passion for intuitive design, I strive to create seamless solutions that inspire and engage. Let&apos;s innovate together and bring your vision to life.
//         </p>


//         <div className="flex flex-row gap-3 mt-2">
//         {links.map((link, index) => (
//         <Link 
//           key={index} 
//           href={link.href} 
//           className="p-2 rounded-full border border-black shadow-2xl" 
//           style={{
//             boxShadow: hoveredLink === index ? "0 5px 15px 5px rgba(212, 0, 0, 0.8)" : "none"
//           }}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           {link.text}
//         </Link>
//       ))}
//         </div>
//         <div>
//           <Link href={"/portfolio"}>
//         <Button variant={"outline"} className="rounded-3xl bg-black text-white">Check Out Portfolio</Button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
  );
};

export default HomeSection;
