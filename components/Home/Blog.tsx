import React from 'react'
import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.webp"
import blog3 from "../../images/blog3.webp"
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[90%] m-[30px]'>
        <p className='font-bold text-2xl heading'>BLOGS</p>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 mt-3 items-center justify-center w-[80vw]'>
            <div className='flex flex-col h-[420px] w-[100%] border-[1px] border-[#232935] bg-[#101624]'>
                <div className='w-full h-[57%]'>
                    <Image src={blog1} alt="" className='w-full h-full overflow-hidden'/>
                </div>
                <div className='p-4'>
                    
                    <p className='heading font-bold'>Architecture of NODE JS</p>
                    <p  className='text'> Node. js provides a runtime environment outside of the browser. It&apos;s also built on top of JavaScript...</p>
                    <Link href={"https://www.linkedin.com/posts/waleed0260_architecture-of-node-js-activity-7212033896958332930-UgF2?utm_source=share&utm_medium=member_desktop"} target='blank' className='underline heading'>View more</Link>
                </div>
            </div>

            <div className='flex flex-col h-[420px] w-[100%] border-[1px] border-[#232935] bg-[#101624]'>
                <div className='w-full h-[55%]'>
                    <Image src={blog2} alt="" className='w-full h-full overflow-hidden'/>
                </div>
                <div className='p-4'>
                    
                    <p className='heading font-bold'>Next JS</p>
                    <p  className='text'> Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications</p>
                    <Link href={"https://www.linkedin.com/posts/waleed0260_architecture-of-node-js-activity-7212033896958332930-UgF2?utm_source=share&utm_medium=member_desktop"} target='blank' className='underline heading'>View more</Link>
                </div>
            </div>

            <div className='flex flex-col h-[420px] w-[100%] border-[1px] border-[#232935] bg-[#101624]'>
                <div className='w-full h-[55%]'>
                    <Image src={blog3} alt="" className='w-full h-full overflow-hidden'/>
                </div>
                <div className='p-4'>
                    
                    <p className='heading font-bold'>React Js</p>
                    <p  className='text'> React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta </p>
                    <Link href={"https://www.linkedin.com/posts/waleed0260_architecture-of-node-js-activity-7212033896958332930-UgF2?utm_source=share&utm_medium=member_desktop"} target='blank' className='underline heading'>View more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog