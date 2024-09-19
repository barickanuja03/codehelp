import React from 'react'
import { ImHome } from "react-icons/im";
import Coding from './Coding';
function Achievement() {
  return (
    <>
      <div className='main-container'>
        <div className='flex flex-col-reverse justify-between items-center md:flex-row md:mx-2 md:my-8 py-24 hover:border-2 hover:border-pink-700 
        rounded-xl md:m-5'>
          <div className='py-2 px-2 md:px-10 md:py-5 w-[90vw] mx-5 md:mx-0 md:w-[50%]'>
          <Coding />
          </div>
              <div>
              </div>
            <div className='w-[90vw] lg:w-[50%] m-3  md:m-11'>
                <div className='text-lg text-pink-700 font-semibold uppercase'>Achievements</div>
                <div className='text-3xl font-bold '>CodeHelp Graduates: Powering Top Tech Giants</div>
                <p className='text-base pt-3 mr-4 lg:mr-0'>Meet our proud alumni shaping the future at major tech companies. Discover the impact CodeHelp has had on their careers and the tech landscape.</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Achievement
