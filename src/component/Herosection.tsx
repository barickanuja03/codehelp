import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Herosection() {
  return (
    <>
  <section className='w-screen h-auto flex flex-row justify-around'>
      <div className='lg:container md:container sm:container'>
         <div className=' h-fit py-5 px-16  '>
           <div className='flex justify-around items-center flex-col lg:flex-row gap-x-5 w-full min-h-screen gap-y-12'>
                <div className='flex flex-col justify-center lg:flex-col  md:w-[50%] lg:w-[50%]'>
                    <h1 className='text-4xl font-bold py-3 text-wrap'>Crack the Code to Success with CodeHelp</h1>
                    <p className='text-base font-medium py-3'>
                    Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
                    </p>
                    <div className='flex flex-row'>
                       <button className='mr-7 mt-7 text-xl px-7 py-2 border-2 border-blue-600  bg-blue-600 rounded-3xl shadow-lg text-nowrap lg:text-lg'>View Courses</button>
                       <button className='text-nowrap mt-7 lg:text-xl md:text-base border-2 border-red-600 px-7 md:px-4 py-2 rounded-3xl hover:bg-white hover:text-black object-cover'>Watch Video<span className='text-red-600 pl-2'>Live <FaArrowRightLong className='inline'/></span></button>
                </div>
                </div>
            <div className='grid grid-cols-2 gap-5 w-[50%] flex-1'>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>core cs subject</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>mock test</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>Interview</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>Dev challenges</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>Articles</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>Tutorial</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>quick compiler</h1>
             <h1 className='w-[100%] py-3 px-2 border-2 border-pink-700 object-cover rounded-md sm:text-lg lg:text-xl capitalize text-center'>Fruitbox flex</h1>
            </div>
           </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Herosection
