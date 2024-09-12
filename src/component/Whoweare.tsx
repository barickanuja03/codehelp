import React from 'react'
import { ImHome } from "react-icons/im";
function Whoweare() {
  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around lg:mt-11 mt-5'>
      <div className='lg:container md-container xl:container'>
        <div className='flex flex-col md:flex-row justify-between  ml-3 items-center my-4 hover:border-2 hover:border-green-500 
        rounded-xl md:m-5 overflow-hidden py-20'>
            <div className='w-[90vw] md:w-[50%] my-5 flex flex-col flex-wrap gap-y-5 justify-center ml-11'>
                <div className='text-lg text-green-500 font-semibold uppercase'>Who we are</div>
                <div className='text-3xl font-bold '>Empowering Coders, Enabling Dreams</div>
                <p className='text-base pt-3'>Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
                </p>
              </div>
            <div className='w-[90vw] lg:w-[50%] my-5 flex flex-col flex-wrap gap-y-5 justify-center ml-11'>
              <div>
               <div>
                  <ImHome className='circle text-pink-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
              </div>
              <div>
               <div>
                  <ImHome className='circle text-pink-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
            </div>
            </div>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Whoweare