import React from 'react'
import { Component } from "react";
import Slider from "react-slick";

function Studentsay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    arrows:false,
    vertical: true,
    verticalSwiping: true,
   
}
  return (
    <>
    <div className='w-[30%] text-gray-500 gap-y-2 mx-2 bg-white'>
      <div className="slider-container">
      <Slider {...settings}>
      <div className='border-b-2 border-gray-400 rounded-xl' >
        <div>
           <h1 className='text-xl font-semibold text-black/30'>John Doe</h1>
         </div>
        <div className='text-lg font-semibold'>MCA</div>
        <div>
        Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education
        </div>
      </div>
      <div className='border-b-2 border-gray-400 rounded-xl'>
        <div>
           <h1 className='text-xl font-semibold text-black/30'>John Doe</h1>
         </div>
        <div className='text-lg font-semibold'>MCA</div>
        <div>
        Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education
        </div>
      </div>
      <div className='border-b-2 border-gray-400 rounded-xl'>
        <div>
           <h1 className='text-xl font-semibold text-black/30'>John Doe</h1>
         </div>
        <div className='text-lg font-semibold'>MCA</div>
        <div>
        Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education
        </div>
      </div>
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Studentsay
