"use client";
import React from "react";
import { useTheme } from "./ThemeContext";
import Link from "next/link";
import { Button } from "./ui/button";
import PreviewModal from "./PreviewModal";
const PortfolioDetail = (heading: any) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col p-8 text-black ${
        darkMode ? "bg-black text-white" : null
      }`}
    >
      <h1 className="font-bold text-3xl">
        {" "}
        {heading.heading === "1"
          ? "International Capital Trading"
          : heading.heading === "2"
          ? "RealCube Job Portal"
          : heading.heading === "3"
          ? "Felix Hawk"
          : heading.heading === "4"
          ? "Zaman Marketer"
          : heading.heading === "5" ? "Real Cube Property Portal":null}
      </h1>
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <b className="mt-3">Project Overview:</b>
          {heading.heading === "1" ? (
            <p>
              The &quot;Finding Homes&quot; project epitomizes simplicity and
              functionality. As a part of my portfolio website, it serves as a
              showcase of my skills in web development, particularly in creating
              intuitive and user-friendly interfaces for real-world
              applications.
            </p>
          ) : heading.heading === "2" ? (
            <p>
              The JobHunt web application is a modern job search platform
              developed using React.js, designed to streamline the job hunting
              process for users. The application offers a user-friendly
              interface and a variety of features to enhance the job search
              experience.
            </p>
          ) : heading.heading === "3" ? (
            <p>
              The Marketing Agency Website project aims to create a dynamic and
              visually appealing online platform for a marketing agency using
              React.js. This website serves as a digital showcase for the
              agency&apos;s services, portfolio, and client testimonials, with a
              focus on engaging potential clients and fostering trust in the
              agency&apos;s expertise.
            </p>
          ) : heading.heading === "4" ? (
            <p>
              The Digital Marketing Portfolio Website project is aimed at
              creating a sophisticated and interactive online platform using
              React.js to showcase the skills, achievements, and projects of a
              digital marketing professional. This website serves as a
              comprehensive portfolio that highlights the individual&apos;s
              expertise, experience, and successful campaigns, with the goal of
              attracting potential clients or employers.
            </p>
          ) : heading.heading === "5" ? (
            <p>
              The RealCube Property Portal Chatbot, built using React.js, serves as an intelligent virtual assistant designed to enhance user experience and streamline interactions for visitors exploring properties on the RealCube property portal.
            </p>
          ):null}
        </div>
        <div>
          <b>Technologies used</b>
          <ul className="mt-2 ml-4">
            <li className="list-disc">
              <b>Functionality:</b>{" "}
              {heading.heading === "1"
                ? "Next Js, Axios, Next Auth, Zod, React Hook Form"
                : heading.heading === "2"
                ? "React.JS, Axios, Formik, Yup, React Multi Carousel"
                : heading.heading === "3"
                ? "React.Js, React Router DOM"
                : heading.heading === "4"
                ? "React.Js, React Calendly, React Floating Whatsapp"
                : " React.Js"}
            </li>
            <li className="list-disc">
              <b>Styling:</b>{" "}
              {heading.heading === "1"
                ? " Tailwind css, ShadCN, React Slick"
                : heading.heading === "2"
                ? "Tailwind css, Bootstrap, Wowjs"
                : heading.heading === "3"
                ? "CSS, Swiper"
                : heading.heading === "4"
                ? "CSS"
                : "Tailwind css"}
            </li>
            <li className="list-disc">
              <b>API Integration:</b> Server-side APIs for dynamic data
              retrieval
            </li>
            {/* <li className="list-disc"><b>Deployment:</b> Hosted on Vercel for seamless deployment and scalability</li> */}
          </ul>
        </div>
        <div className="flex sm:flex-row flex-col">
          <span>
            <PreviewModal
              link={
                heading.heading === "1"
                  ? "https://ict-next-demo.vercel.app/"
                  : heading.heading === "2"
                  ? "https://jobhunt.realcube.estate/"
                  : heading.heading === "3"
                  ? "https://felixhawk.com/"
                  : heading.heading === "4"
                  ? "https://zaman-marketer.vercel.app/"
                  : heading.heading === "5"
                  ? "https://property.realcube.estate/"
                  : null
              }
            />
          </span>
          <Link
            href={
              heading.heading === "1"
                ? "https://ict-next-demo.vercel.app/"
                : heading.heading === "2"
                ? "https://jobhunt.realcube.estate/"
                : heading.heading === "3"
                ? "https://felixhawk.com/"
                : heading.heading === "4"
                ? "https://zaman-marketer.vercel.app/"
                : heading.heading === "5"
                ? "https://property.realcube.estate/"
                : "https://ict-next-demo.vercel.app/"
            }
            target="blank"
          >
            <Button
              variant={"outline"}
              className=" sm:ml-3 sm:mt-0 mt-3 rounded-3xl bg-black text-white"
            >
              View Original Site
            </Button>
          </Link>
        </div>
        <div>
          <b>Implementation Details</b>
          <ul className="mt-2 ml-4">
            <li className="list-disc">
              <b>Frontend Development:</b> {heading.heading === "1" ? (
                <>
                Leveraged Next.js for server-side
                rendering and optimized performance. Utilized Tailwind CSS for
                rapid UI prototyping and clean, responsive design.
                </>
                ): heading.heading === "2" ? (
                  <>
                   Leveraged React.js for client-side rendering, ensuring dynamic and fast-loading user experiences.
                  </>
                ): heading.heading === "3" ? (
                  <>
                   Leveraged React.js for client-side rendering, ensuring dynamic and fast-loading user experiences.
                  </>
                ): heading.heading === "4" ? (
                  <>
                   Leveraged React.js for client-side rendering, ensuring dynamic and fast-loading user experiences.
                  </>
                ):null}
            </li>
            <li className="list-disc">
              <b>API integration:</b> {heading.heading === "1" ? (<>
               Integrated server-side APIs to fetch and
              display real-time property listings, ensuring up-to-date
              information for users.
              </>): (
                <>
Implemented API requests directly from the frontend to ensure real-time property listings are fetched accurately. 
                </>
              )}
            </li>
            <li className="list-disc">
              <b>Responsive Design:</b> Implemented responsive design principles
              to ensure seamless usability across various devices and screen
              sizes.
            </li>
            <li className="list-disc">
              <b>User Experience Focus:</b> Prioritized intuitive navigation and
              straightforward search functionalities to enhance the user
              experience.
            </li>
          </ul>
        </div>
        <div>
          <b>Outcome:</b>
          {heading.heading === "1" ? (
            <p>
              The &quot;Finding Homes&quot; portfolio project stands as a
              testament to my ability to create elegant and functional web
              applications. By combining modern technologies with a user-centric
              approach, I&apos;ve crafted a platform that simplifies the process
              of finding the perfect home for users while showcasing my skills
              as a frontend developer.
            </p>
          ) : heading.heading === "2" ? (
            <p>
              Real Cube Job Hunt offers a polished portfolio website showcasing
              proficiency in ReactJS development and API integration. Users
              experience seamless navigation and enhanced job hunting
              capabilities.
            </p>
          ) : heading.heading === "3" ? (
            <p>
              The Marketing Agency Website built on React.js has successfully
              achieved its objectives of establishing a dynamic and captivating
              online presence for the agency. The implementation of React.js has
              resulted in a highly responsive and interactive website, providing
              visitors with a seamless browsing experience across various
              devices and screen sizes.
            </p>
          ) : heading.heading === "4" ? (
            <p>
              The Digital Marketing Portfolio Website developed on React.js has
              successfully achieved its goal of providing a comprehensive
              showcase of the digital marketer&apos;s skills, expertise, and past
              achievements. Leveraging the capabilities of React.js, the website
              offers a seamless and visually appealing user experience across
              various devices, enhancing its accessibility and engagement.
            </p>
          ) : heading.heading === "5" ? (
            <p>
              The RealCube Property Portal Chatbot, built using React.js, serves
              as an intelligent virtual assistant designed to enhance user
              experience and streamline interactions for visitors exploring
              properties on the RealCube property portal.
            </p>
          ) : null}
        </div>
        {/* <Link href={"https://ict-next-demo.vercel.app/"} target="blank">
        <Button variant={"outline"} className="rounded-3xl bg-black text-white">Check Original Site</Button>
          </Link> */}
      </div>
    </div>
  );
};

export default PortfolioDetail;
