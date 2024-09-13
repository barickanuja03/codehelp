import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Herosection() {
  const coursename = [
    {
      id: 1,
      name: 'Core cs subject',
    },
    {
      id: 2,
      name:'mock tests'
    },
    {
      id: 3,
     name:'interview'
    },
    {
      id: 4,
     name:'Dev challenges'
    },
    {
      id: 5,
     name:'Articles'
    },
    {
      id: 6,
     name:'Tutorials'
    },
  ];
  return (
    <>
  <section className='w-full h-auto flex flex-row justify-center bg-black'>
      <div className='lg:container md:container sm:container xl-container'>
         <div className='mx-1 md:mx-7 object-cover'>
           <div className='flex justify-between items-center flex-col lg:flex-row lg:flex-1 gap-x-5 w-[100%] h-auto lg:h-screen gap-y-12 lg:w-auto px-5 text-center lg:ml-0'>
                <div className='flex flex-col justify-center lg:flex-col w-[100%]  md:w-[50%] mt-12 lg:mt-0'>
                    <h1 className='text-4xl font-bold py-3 text-wrap'>Crack the Code to Success with CodeHelp</h1>
                    <p className='text-base font-medium py-3'>
                    Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
                    </p>
                    <div className='flex flex-row flex-wrap justify-center'>
                       <button className='mr-7 mt-7 text-xl px-7 py-2 border-2 border-blue-600  bg-blue-600 rounded-3xl shadow-lg text-nowrap lg:text-lg'>View Courses</button>
                       <button className='text-nowrap mt-7 lg:text-xl md:text-base border-2 border-red-600 px-7 md:px-4 py-2 rounded-3xl hover:bg-white hover:text-black object-cover'>Watch Video<span className='text-red-600 pl-2'>Live <FaArrowRightLong className='inline'/></span></button>
                </div>
                </div>
                <div className='grid sm:grid-cols-4 md:grid-cols-2 text-center gap-x-3 gap-y-3 w-[90vw] md:w-[50%] ml-5 lg:ml-0 lg:flex-1 overflow-x-hidden'>
             <h1 className=' py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>core cs subject</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>mock test</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>Interview</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>Dev challenges</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>Articles</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>Tutorial</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>quick compiler</h1>
             <h1 className='py-3 px-auto border-2 border-pink-700 object-cover rounded-md text-lg lg:text-xl capitalize text-center'>Fruitbox flex</h1>
            </div>

           </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Herosection
