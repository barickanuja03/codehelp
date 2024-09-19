import React from 'react'
import { ImHome } from "react-icons/im";
import Coding from './Coding';
function Whoweare() {
  return (
    <>
     <div className='main-container'>
        <div className='flex flex-col md:flex-row justify-center gap-x-2  items-center my-4 hover:border-2 hover:border-green-500 
        rounded-xl md:m-5 overflow-hidden py-2 mb-3 md:py-20'>
            <div className='w-[90vw] md:w-[50%] md:my-5 flex flex-col flex-wrap gap-y-5 justify-center ml-3'>
                <div className='text-lg text-green-500 font-semibold uppercase'>Who we are</div>
                <div className='text-3xl font-bold '>Empowering Coders, Enabling Dreams</div>
                <p className='text-base pt-3 text-wrap'>Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
                </p>
              </div>
              <div className='py-2 px-2 md:px-10 md:py-5 w-[90vw] mx-5 md:mx-0 md:w-[50%]'>
               <Coding />
               </div>
        </div>
        </div> 
    </>
  )
}

export default Whoweare