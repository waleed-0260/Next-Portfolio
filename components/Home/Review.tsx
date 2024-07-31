import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Review = () => {
    const services = [
        {
          id: 1,
            heading: "Digital Marketing",
            text: " we are digital marketing experts. We are here to optimize your vision and showing the world who you are. We specialize in creating marketing campaigns that make your business at a better place.",
            href:"Digital Marketing"
        },
        {
          id: 2,
            heading: "Web development",
            text: " We build web marketing sites that work for your business. Our web solutions function smoothly and deliver a consistent experience to users across all platforms. and deliver a consistent experience to users  ",
                        href:"Website Development"

        },
        {
          id:3,
            heading: "Graphic Design",
            text: " Felix Hawk is an independent branding agency with a non-traditional perspective. We provide all the services that graphic designing, logo designing, and branding agency deliver under one roof - without silos or handoffs. ",
                        href:"Graphic Design"

        },
        {
          id:4,
            heading: "SEO",
            text: "our agency sparks the digital journey for brands. We craft impactful marketing campaigns that elevate your business to new heights, exponential growth, empowering businesses to conquer the digital landscape.",
            href:"Search Engine Optimization"

        },
    ]
  return (
    <div className='flex flex-row items-center'>
        <p className='font-bold text-2xl'>REVIEW</p>
        <Swiper
      // navigation={true}
        modules={[Pagination, Navigation]}
        // slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          480:{
            slidesPerView: 1,
          },
          768:{
            slidesPerView: 2,
          },
          980:{
            slidesPerView: 3,
          }
        }}
        className="w-[80%] "
        >
            {services.map((item)=>{
                return(
                    <SwiperSlide className="w-[20%] h-[150px]" key={item.id}>
                      {/* <Link to={`/portfoliopage/${item.href}`}> */}
                        {/* <div className={styles.servicebox}> */}
                            {/* <span>{item.icon}</span> */}
                            <h2>{item.heading}</h2>
                            <p>{item.text}</p>
                        {/* </div> */}
                      {/* </Link> */}
                    </SwiperSlide>
                )
            })}
        </Swiper>
        </div>
  )
}

export default Review