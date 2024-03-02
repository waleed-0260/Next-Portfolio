import React from 'react'

const PortfolioDetail = (heading:any) => {
  return (
    <div className='flex flex-col p-12'>
        <h1 className='font-bold text-3xl'>{heading.heading}</h1>
        <p>
        The Finding Home project encapsulates my expertise in Next.js, Tailwind CSS, and server-side API integration, serving as a testament to my proficiency in modern web development. By harnessing the power of Next.js, I engineered a robust frontend solution that prioritizes performance and scalability while ensuring a seamless user experience across devices.
            <br/>
            <br/>
            With Tailwind CSS, I streamlined the UI development process, enabling rapid prototyping and precise design implementation. This approach not only facilitated the creation of a visually appealing interface but also ensured flexibility and maintainability, essential for long-term project success.
            <br/>
            Central to the project's functionality was the integration of server-side APIs, enabling dynamic data retrieval and real-time updates. This allowed users to effortlessly explore a diverse range of properties tailored to their preferences, enhancing their ability to find the perfect home.
            <br/>I meticulously ensured responsiveness across all devices, prioritizing accessibility and usability through extensive testing and optimization. This commitment to user-centric design principles ensures that every user enjoys a consistent and intuitive browsing experience, regardless of their device or screen size.
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam minima, nemo vel, quo dolorum officia ratione nostrum excepturi quibusdam ea suscipit magni, accusamus voluptatum facilis sit placeat cumque laudantium voluptate nihil quas in vitae iste distinctio delectus? Cupiditate excepturi quam iste, fuga quaerat sequi atque dignissimos, ratione repellat quis aut, optio non fugit odit. A totam veniam sequi magni eaque.
        </p>
    </div>
  )
}

export default PortfolioDetail