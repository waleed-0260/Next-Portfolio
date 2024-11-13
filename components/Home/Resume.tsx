import React from "react";
import { MdOutlineCardTravel } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
const Resume = () => {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center ">
      <p className="text-4xl font-bold heading">RESUME</p>

      <div className="flex md:flex-row flex-col justify-between mt-4">
        <div className="flex flex-col gap-3 p-3 md:w-[50%]">
          <div className="flex flex-row gap-2 items-center">
            <p className="text text-2xl opacity-50"><MdOutlineCardTravel/></p>
          <p className="font-semibold text-2xl text"> Experience</p>
          </div>

          <p className="font-bold heading">FULL STACK DEVELOPER </p>
          <p className="text">July (2023) - Feb (2024)</p>
          <p className="text-white">Exalogic Consulting</p>

          <ul className="list-disc">
            <li className="text-white mt-3">
              <p className="text-white">FRONT END IMPLEMENTATION</p>
              <p className="text">
                Executed front-end development for diverse websites, ensuring
                functionality and user engagement, and collaborated closely with
                design and backend teams to deliver seamless user
                experiences.
              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">COLLABORATIVE API INTEGRATION:</p>
              <p className="text">
                Collaborated closely with the back-end team to seamlessly
                integrate APIs into the frontend, thereby optimizing the
                platform&apos;s performance.
              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">UI/UX INTEGRATION EXCELLENCE:</p>
              <p className="text">
                Ensured seamless integration of UI/UX designs, enhancing
                front-end visuals and interactive user experience with a focus
                on aesthetic refinement and usercentric design principles
              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">CODE QUALITY ASSURANCE: </p>
              <p className="text">
                Conducted regular code reviews, fostering team collaboration to
                ensure code quality and maintainability, thereby contributing to
                a robust and scalable codebase for sustainable project success
              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">TROUBLESHOOTING & DEBUGGING MASTERY:</p>
              <p className="text">
                Participated in troubleshooting and debugging processes, adeptly
                identifying and resolving front-end issues to elevate user
                experience, while proactively implementing preventative measures
                to enhance overall system reliability and performance.
              </p>
            </li>
          </ul>
        </div>
        <hr className="border-t-2 border-gray-400 my-4" />
        <div className="flex flex-col gap-3 p-3 md:w-[50%]">
        <div className="flex flex-row gap-2 items-center">
            <p className="text text-2xl"><LuGraduationCap/></p>
          <p className="font-semibold text-2xl text"> Education</p>
          </div>
          <p className="font-bold heading">INFORMATION TECHNOLOGY</p>
          <p className="text">September 2023 - present</p>
          <p className="text-white">Bahauddin Zakariya University</p>

          <ul className="list-disc">
            <li className="text-white mt-3">
              <p className="text-white">Mastered C++ and Enhanced Problem-Solving Skills              </p>
              <p className="text">
              Focused on mastering C++, which has significantly boosted my ability to tackle and solve complex problems. This experience has sharpened my coding skills and analytical thinking.


              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">Gained Proficiency in MySQL for Data Management
              </p>
              <p className="text">
              Developed strong expertise in MySQL, enabling me to manage and manipulate large data sets efficiently. My skills include designing and maintaining robust database solutions.


              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">Improved Excel Skills for Data Analysis              </p>
              <p className="text">
              Enhanced my proficiency in Excel, allowing for comprehensive data analysis and effective visualization. This has improved my ability to interpret and present data insights clearly.


              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">Designed and Optimized MySQL Queries
              </p>
              <p className="text">
              Created and optimized complex MySQL queries to ensure efficient data retrieval and integrity. My work involved fine-tuning database performance and accuracy.


              </p>
            </li>
            <li className="text-white mt-3">
              <p className="text-white">Bridged the Gap Between Theory and Practice
              </p>
              <p className="text">
              Applied theoretical knowledge to practical scenarios, gaining valuable hands-on experience. This approach has helped me understand real-world applications of IT concepts.
              </p>
            </li>
          </ul>

        </div>
      </div>

      <Link href={"https://linkedin.com/in/waleed0260"} target="blank">
      <Button variant={"outline"} className="bg-white hover:bg-[#FEC544] w-[200px] hover:text-black transition-all mt-4 border-none rounded-3xl">Work With Me</Button>
      </Link>
    </div>
  );
};

export default Resume;
