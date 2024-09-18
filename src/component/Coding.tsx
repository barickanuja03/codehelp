import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import { ImHome } from "react-icons/im";
function Coding() {
    const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            arrows:false,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            vertical: true,
            verticalSwiping: true,      
         }
  return (
    <>
      <div className='flex flex-col justify-center gap-y-7'>
      <div className="slider-container">
      <Slider {...settings}>
           <div>
               <div>
                  <ImHome className='circle border-gray-300 border-2 text-pink-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
          </div>
          <div>
               <div>
                  <ImHome className='circle border-gray-300 border-2 text-pink-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
          </div>
          <div>
               <div>
                  <ImHome className='circle border-gray-300 border-2 text-pink-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
          </div>
      </Slider>
    </div>
      </div>
    </>
  )
}

export default Coding
