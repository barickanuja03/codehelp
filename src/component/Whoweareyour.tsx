import React from 'react'
import { ImHome } from "react-icons/im";
function Whoweareyour() {
  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
      <div className='lg:container md-container xl:container'>
        <div className='flex flex-row justify-between my-8 py-24 hover:border-2 hover:border-pink-700 
        rounded-xl'>
           <div className='w-[50%] m-5 flex flex-col overflow-hidden gap-y-5'>
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
              <div>
              </div>
            <div className='w-[45%] m-11'>
                <div className='text-lg text-pink-700 font-semibold uppercase'>Who we are</div>
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