import React from 'react'
import { ImHome } from "react-icons/im";
import Coding from './Coding';
function Whoweareyour() {
  return (
    <>
     <div className='main-container'>
        <div className='flex flex-col-reverse justify-between items-center md:flex-row mt-2 md:mt-8 py-24 hover:border-2 hover:border-pink-700 
        rounded-xl md:m-5'>
          <div className='py-2 px-2 md:px-10 md:py-5 w-[90vw] mx-5 md:mx-0 md:w-[50%]'>
          <Coding />
          </div>
              <div>
              </div>
            <div className='w-[90vw] lg:w-[50%] m-3  md:m-11'>
                <div className='text-lg text-pink-700 font-semibold uppercase'>Why we are your</div>
                <div className='text-3xl font-bold '>Empowering Coders, Enabling Dreams</div>
                <p className='text-base pt-3 mr-4 lg:mr-0'>Unveil the essence of CodeHelp: a community-driven platform         dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
                </p>
                <button className='mt-16 ml-2 rounded-3xl text-xl bg-blue-800 px-4 py-2'>Let's Connect</button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Whoweareyour