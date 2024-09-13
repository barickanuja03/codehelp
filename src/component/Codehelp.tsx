import React,{useState} from 'react'
import { ImHome } from "react-icons/im";
function Codehelp() {
  return (
    <>
      <div className='w-screen lg:w[auto] flex flex-row justify-center bg-white text-black overflow-hidden'>
       <div className='sm:container lg:container md-container xl:container'>
         <div className='flex flex-col justify-center flex-wrap w-full'>
            <div className='text-center text-2xl font-semibold'>
               Kickstart Your Coding Expedition with CodeHelp
            </div>
            <div className='w-full lg:w-[50%] text-center text-base ml-0 lg:ml-72 pt-2'>
            Set sail on your coding voyage with CodeHelp—a platform that guides you through the fundamentals, sparking curiosity and laying the foundation for a successful coding journey.
            </div>
         </div>

<div className='flex flex-col-reverse flex-wrap lg:flex-row justify-center'>
         <div className='w-[90vw] lg:w-[50%] flex flex-col  flex-wrap gap-y-5 justify-center ml-11  border-2 border-gray-400 py-7 pl-4 pr-28 my-24 rounded-2xl relative  text-gray-400'>
              <div>
               <div>
                  <ImHome className='circle border-gray-300 border-2 text-pink-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold text-pink-700'>apply: build, create</div>
               <div className='text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
              </div>
              <div>
               <div>
                  <ImHome className='circle border-gray-300 border-2 text-green-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold text-green-700'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
              </div>
              <div>
               <div>
                  <ImHome className='circle border-gray-300 border-2 text-blue-700 mb-3'/>
                </div>
               <div className='text-xl font-semibold text-blue-700'>apply: build, create</div>
               <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ratione, cupiditate voluptatibus nisi odit quidem quam pariatur 
               </div>
              </div>
            </div>
            <div className='absolute right-32 text-gray-400 bg-white m-28 lg:my-18 lg:my-0'>
                <div className='border-2 border-green-100 w-[25rem] aspect-video shadow-md mt-[-30rem lg:mt-[10rem] shadow-green-200 flex flex-col justify-center gap-y-3'>
                    <h1 className='text-center w-full'>Register/Login with E-mail</h1>
                    <input type='text' placeholder='Enter You mail' className=' rounded-xl ml-11 w-[20rem] py-2 text-center bg-green-50 shadow-sm border-2 border-black/20'/>
                    <button className='bg-blue-400 hover:bg-blue-200 w-[10rem] text-center ml-28 mt-4 py-2 text-white hover:text-black rounded-xl'>Login</button>
                </div>
                </div>
        </div>
         </div>
       </div>
    </>
  )
}

export default Codehelp
