import React from 'react'
import Coding from './Coding'
import Login from './Login'
function Kickstart() {
  return (
    <>
      <div className='w-screen lg:w[auto] h-auto flex flex-row justify-center bg-white text-black overflow-hidden'>
       <div className='sm:container lg:container md-container xl:container'>
         <div className='flex flex-col justify-center flex-wrap w-full '>
            <div className='text-center text-2xl font-semibold'>
               Kickstart Your Coding Expedition with CodeHelp
            </div>
            <div className='w-full lg:w-[50%] text-center text-base ml-0 lg:ml-72 pt-2'>
            Set sail on your coding voyage with CodeHelp—a platform that guides you through the fundamentals, sparking curiosity and laying the foundation for a successful coding journey.
            </div>
         </div>
         <div className='flex flex-col-reverse md:flex-row justify-center items-center my-24'>
            <div className='hover:border-2 hover:border-green-200 px-10 py-10 w-[90vw] mx-5 md:mx-0 md:w-[50%] '>
                <Coding/>
            </div>
            <div>
            <Login />
            </div>
         </div>
       </div> 
      </div>
    </>
  )
}

export default Kickstart
