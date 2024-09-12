import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Instructor() {
  
  return (
    <>
      <div className='w-screen lg:w[auto] flex flex-row justify-around '>
        <div className='lg:container md-container xl:container'>
             <h1 className='text-4xl font-bold capitalize break-all bg-black'>
               Our Instuctor
             </h1>
             <p className='text-base lg:w-[50%]'>
                 Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at CodeHelp.
             </p>
             
        </div>
      </div>
    </>
  )
}

export default Instructor
