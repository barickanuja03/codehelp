import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Instructor() {
  
  return (
    <>
      <div className='w-screen lg:w[auto] flex flex-row justify-center bg-black'>
        <div className='lg:container md-container xl:container'>
             <h1 className='text-4xl font-bold capitalize break-all pl-5 lg:pl-0 bg-black'>
               Our Instuctor
             </h1>
             <p className='text-base w-full lg:w-[50%] text-center'>
                 Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at CodeHelp.
             </p>
             
             
        </div>
      </div>
    </>
  )
}

export default Instructor
