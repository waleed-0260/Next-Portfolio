import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import test from "../../images/test.png";
import test2 from "../../images/test2.png"
import test3 from "../../images/test3.png"
import Image from "next/image";
const Review = () => {
  const services = [
    {
      id: 1,
      name: "Shivaaji Kattimani",
      text: "“Shows strong enthusiasm and a solid grasp of full stack development fundamentals, with a promising potential for growth.”",
      position: "Team Lead at EXALOGIC CONSULTING",
      img: test
    },
    {
      id: 2,
      name: "Nikita Jaiswal",
      text: " “Consistently delivers high-quality work and is always eager to collaborate, making a positive impact on our team’s progress.”",
      position: "Peers at EXALOGIC CONSULTING",
      img: test2
    },
    {
      id: 3,
      name: "Ali Hyder",
      text: " “Exceptional work on our website—demonstrated impressive skill and attention to detail, resulting in a functional product.”",
      position: "CEO Felix Hawk",
      img: test3
    },
    {
      id: 4,
      name: "Nagmani Bhushan",
      text: "“Displays a commendable ability to learn quickly and apply skills effectively, making valuable contributions to our projects.”",
      position: "Manager at EXALOGIC CONSULTING",
      img: test3
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-2xl heading">REVIEWS</p>
      <Swiper
        // navigation={true}
        // modules={[Pagination, Navigation]}
        // slidesPerView={3}
        // pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          980: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        className="w-[80vw] h-[340px]"
      >
        {services.map((item) => {
          return (
<SwiperSlide className='p-[20px]' key={item.id}>
  <div className="flex items-center justify-center flex-col">
  <div className='border-[1px] border-[#232935] bg-[#101624] w-full flex items-center justify-center relative'>
    <p className='p-2 text'>
      {item.text}
    </p>
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#101624]'></div>
  </div>
  <div className='flex items-center justify-center h-[70px] w-[70px] mt-4'>
    <Image src={item.img} alt="" className="h-[70px] w-[70px] object-contain"/>
  </div>
  <p className='font-bold text-white mt-1'>{item.name}</p>
  <p className='text text-center'>{item.position}</p>
  </div>
</SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Review;
