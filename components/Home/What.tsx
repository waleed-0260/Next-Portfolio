"use client"
import React, {useEffect} from "react";
import { Tilt } from "react-tilt";
import { HiCode } from "react-icons/hi";
import { FiPenTool } from "react-icons/fi";
import { TfiServer } from "react-icons/tfi";
import { FaBug } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import dev from "@/images/dev.jpg";
import ui from "@/images/ui.png";
import collab from "@/images/collab.jpg";
import Image from "next/image";
import AOS from "aos"
import 'aos/dist/aos.css';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition duration-700 cursor-pointer
  transition: true, // Set a transition duration-700 cursor-pointer on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const What = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className=" flex flex-col  gap-5 m-10 "  data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center sm:text-left heading">What I DO</h2>
      <p className="md:w-[60%] w-[80vw] text-center sm:text-left text">
        A frontend developer builds interactive user interfaces using React,
        Next.js, and Tailwind CSS, ensuring responsive design and seamless user
        experiences.
      </p>

      <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 flex flex-col justify-center items-center">
        <Dialog>
          <DialogTrigger>
            <Tilt options={defaultOptions} className="sm:w-[250px] w-[70vw] bg-[#101624] h-[250px] mt-2">
              <div className="sm:w-[250px] w-[70vw] h-[250px] rounded-md  text-white border-[1px] border-[#232935] transition duration-700 cursor-pointer flex flex-col items-center justify-center text-center">
                <HiCode className="text-4xl" />
                <b className="text-2xl font-bold">Front End Development</b>
                <p className="mt-3 flex flex-row  items-center gap-3">
                  Learn More <GoArrowRight />
                </p>
              </div>
            </Tilt>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3"></DialogTitle>
              <DialogDescription>
                <Image src={dev} alt="hello" />
                <b className="text-black font-bold text-xl mt-3">
                  Front End Developer
                </b>
                <p className="text-black">
                  A frontend developer specializing in React and Next.js focuses
                  on creating dynamic and responsive user interfaces that
                  deliver exceptional user experiences. They leverage React for
                  building reusable components and manage the application&apos;s
                  state effectively. With Next.js, they implement server-side
                  rendering (SSR) and static site generation (SSG) to enhance
                  performance and SEO. Efficient API fetching and data handling
                  are crucial to ensure smooth, real-time updates and
                  interactions within the application. Moreover, they optimize
                  performance by implementing lazy loading, code splitting, and
                  other techniques, ensuring fast load times and a seamless
                  experience across different devices and network conditions.
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <Tilt options={defaultOptions} className="sm:w-[250px] w-[70vw] bg-[#101624] h-[250px] mt-2">
              <div className="sm:w-[250px] w-[70vw] h-[250px] rounded-md  text-white border-[1px] border-[#232935] transition duration-700 cursor-pointer flex flex-col items-center justify-center text-center">
                <FiPenTool className="text-4xl" />
                <b className="text-2xl font-bold">UI/UX</b>
                <p className="mt-3 flex flex-row  items-center gap-3">
                  Learn More <GoArrowRight />
                </p>
              </div>
            </Tilt>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3"></DialogTitle>
              <DialogDescription>
                <Image src={ui} alt="hello" />
                <b className="text-black font-bold text-xl mt-3">
                  UI/UX Designer
                </b>
                <p className="text-black">
                As a frontend developer focused on the UI aspect of websites, I dedicate my time to crafting visually appealing and user-friendly interfaces that enhance the overall user experience. My role involves translating design mockups into responsive and interactive web pages using HTML, CSS, and JavaScript. I collaborate closely with designers to ensure that the visual aesthetics are accurately implemented while maintaining functionality and performance. Additionally, I prioritize accessibility and cross-browser compatibility to ensure that our websites are usable by a diverse audience. Staying updated with the latest frontend technologies and trends is crucial to continuously improving the user interface and keeping our projects at the forefront of innovation.
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger>
            <Tilt options={defaultOptions} className="sm:w-[250px] w-[70vw] bg-[#101624] h-[250px] mt-2">
              <div className="sm:w-[250px] w-[70vw] h-[250px] rounded-md  text-white border-[1px] border-[#232935] transition duration-700 cursor-pointer flex flex-col items-center justify-center text-center">
                <TfiServer className="text-4xl" />
                <b className="text-2xl font-bold">Back End Team</b>
                <p className="mt-3 flex flex-row  items-center gap-3">
                  Learn More <GoArrowRight />
                </p>
              </div>
            </Tilt>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3"></DialogTitle>
              <DialogDescription>
                <Image src={collab} alt="hello" />
                <b className="text-black font-bold text-xl mt-3">
                  Back End Team Collaboration
                </b>
                <p className="text-black">
                As a frontend developer collaborating with the backend team, my role involves seamlessly integrating the user interface with server-side logic through well-defined APIs. I work closely with backend developers to ensure that the data flow between the client and server is smooth and efficient. This includes defining API endpoints, handling data fetching and submission, and troubleshooting any issues that arise during integration. I regularly test APIs to verify their functionality and ensure they meet the requirements of the frontend components.
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
        <Tilt options={defaultOptions} className="sm:w-[250px] w-[70vw] bg-[#101624] h-[250px] mt-2">
          <div className="sm:w-[250px] w-[70vw] h-[250px] rounded-md  text-white border-[1px] border-[#232935] transition duration-700 cursor-pointer flex flex-col items-center justify-center text-center ">
            <FaBug className="text-4xl" />
            <b className="text-2xl font-bold">Code Quality Assurance</b>
            <p className="mt-3 flex flex-row  items-center gap-3">
              Learn More <GoArrowRight />
            </p>
          </div>
        </Tilt>
        </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-3"></DialogTitle>
              <DialogDescription>
                <Image src={collab} alt="hello" />
                <b className="text-black font-bold text-xl mt-3">
                  Code Quality Assurance
                </b>
                <p className="text-black">
                As a frontend developer focused on code quality assurance, I prioritize writing clean, maintainable, and efficient code that adheres to industry standards and best practices. I utilize various tools and techniques, such as linters, code reviews, and automated testing, to ensure that the codebase remains robust and free of bugs. By implementing version control systems and maintaining detailed documentation, I facilitate collaboration and knowledge sharing among the team. Continuous integration and deployment practices help in catching issues early and ensuring that new features do not introduce regressions. Ultimately, my commitment to code quality assurance ensures that our projects are reliable, scalable, and easy to maintain over time.</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default What;
