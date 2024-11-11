"use client"
// import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
// import Image from "next/image";
import React, {useState, useEffect} from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import AOS from "aos"
import 'aos/dist/aos.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {loading ?         <Loader onComplete={() => setLoading(false)} />:
    <>
        <Header/>
      <div className="w-full flex justify-center items-center">
      <HomeSection/>
      </div>
      <Footer/>
    </>
    }
    </>
  );
}
