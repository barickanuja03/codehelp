import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import Studentmsg from './Studentmsg'
function Studentsay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
   
}
  return (
    <>
      <div className='w-screen h-auto lg:w[15rem] flex flex-row justify-around bg-white text-black'>
       <div className='lg:container md-container xl:container'>
         <div className='mt-20'>
           <h1 className='capitalize text-xl font-bold text-center w-full'>What our Student Says </h1>
           <p className='text-center'>
              Discover inspiration and insights through recent reviews from our students. Their success   stories reflect the transformative journey of learning and growth with CodeHelp.
           </p>
         </div>
         <div className='flex flex-row justify-center gap-y-7 my-11'>
        <Studentmsg />
        <Studentmsg />
        <Studentmsg />
      </div>
        </div>
      </div> 
    </>
  )
}

export default Studentsay
