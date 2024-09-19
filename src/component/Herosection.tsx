"use client";
import React from 'react'
import { Tooltip } from 'react-tooltip'
import { FaArrowRightLong } from "react-icons/fa6";
function Herosection() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <>
  <section className='main-container'>
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
                   <div>
                   <div className='flex flex-row justify-center mt-20'>
                    
                   <a className="my-anchor-element">
                    <img src='https://tse1.mm.bing.net/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&pid=Api&P=0&h=180' className='w-11 aspect-square object-cover rounded-full'/>
                   </a>
                   <Tooltip anchorSelect=".my-anchor-element" place="top">
                   <h1>Smith</h1>
                   <h1>Web Developer</h1>
                    </Tooltip>
                 
                   <a className="my-anchor-element">
                   <img src='https://tse4.mm.bing.net/th?id=OIP.LtLk-vQkLJGggWTN032pPwHaLH&pid=Api&P=0&h=180' className='w-11 aspect-square object-cover rounded-full pl-[-10px]'/>
                   </a>
                   <Tooltip anchorSelect=".my-anchor-element" place="top">
                   <h1>John</h1>
                   <h1>Web Designer</h1>
                    </Tooltip>
                    
                    <a className="my-anchor-element">
                   <img src='https://tse4.mm.bing.net/th?id=OIP.z0qimXIUizMAO-BiXc6RmAHaIk&pid=Api&P=0&h=180'className='w-11 aspect-square object-cover rounded-full'/>
                   </a>
                   <Tooltip anchorSelect=".my-anchor-element" place="top">
                   <h1>Dev</h1>
                   <h1>Web Designer</h1>
                    </Tooltip>
                   
                   <a className="my-anchor-element">
                    <img src='https://tse1.mm.bing.net/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&pid=Api&P=0&h=180' className='w-11 aspect-square object-cover rounded-full'/>
                   </a>
                   <Tooltip anchorSelect=".my-anchor-element" place="top">
                   <h1>Smith</h1>
                   <h1>Web Developer</h1>
                    </Tooltip>
                   
                   <a className="my-anchor-element">
                    <img src='https://tse1.mm.bing.net/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&pid=Api&P=0&h=180' className='w-11 aspect-square object-cover rounded-full'/>
                   </a>
                   <Tooltip anchorSelect=".my-anchor-element" place="top">
                   <h1>Smith</h1>
                   <h1>Web Developer</h1>
                    </Tooltip>
                   
                  </div>
                   </div>
                   </div>
                <div className='grid sm:grid-cols-4 md:grid-cols-2 text-center gap-x-3 gap-y-3 w-[90vw] md:w-[50%] lg:flex-1 overflow-x-hidden'>
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
      </section>
    </>
  )
}

export default Herosection
