import React from 'react'
import { ImHome } from "react-icons/im";
function Whoweareyour() {
  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
      <div className='container md-container lg:container xl:container'>
        <div className='flex flex-col justify-between md:flex-row ml-3 my-8 py-24 hover:border-2 hover:border-pink-700 
        rounded-xl overflow-hidden md:m-5'>
           <div className='w-[90vw] lg:w-[50%] my-5 flex flex-col flex-wrap gap-y-5 justify-center ml-11'>
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
            </div>
              <div>
              </div>
            <div className='w-[90vw] lg:w-[50%] m-11  md:m-11'>
                <div className='text-lg text-pink-700 font-semibold uppercase'>Who we are your</div>
                <div className='text-3xl font-bold '>Empowering Coders, Enabling Dreams</div>
                <p className='text-base pt-3'>Unveil the essence of CodeHelp: a community-driven platform         dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
                </p>
                <button className='mt-16 ml-2 rounded-3xl text-xl bg-blue-800 px-4 py-2'>Let's Connect</button>
            </div>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Whoweareyour