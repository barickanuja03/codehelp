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
    speed: 1000,
    autoplaySpeed: 1000,
    vertical: true,
    verticalSwiping: true,
   
}
  return (
    <>
      <div className="slider-container">
      <Slider {...settings}>
      <div>
        <div>
           <h1>John Doe</h1>
         </div>
        <div className='text-xl font-semibold'>MCA</div>
        <div>
        Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education
        </div>
      </div>
      </Slider>
      </div>
    </>
  )
}

export default Studentsay
