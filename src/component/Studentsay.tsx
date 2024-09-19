import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import Studentmsg from './Studentmsg'
function Studentsay() {

  return (
    <>
    <div className='bg-white text-black'>
      <div className='main-container'>
         <div className='mt-20'>
           <h1 className='capitalize text-xl font-bold text-center w-full'>What our Student Says </h1>
           <p className='text-center'>
              Discover inspiration and insights through recent reviews from our students. Their success   stories reflect the transformative journey of learning and growth with CodeHelp.
           </p>
         </div>
         <div className='flex flex-row justify-center gap-y-7 mt-11'>
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
