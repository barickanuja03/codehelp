import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6"
import { FaArrowRightFromBracket } from "react-icons/fa6";
function Codingfamily() {
  return (
    <>
        <div className="bg-white text-black">
        <div className='main-container'>
           <div className='flex flex-col justify-center w-full '>
             <div>
                <h1 className='text-center text-2xl font-semibold'>Welcome to Our Coding Family</h1>
                <p className='w-full lg:w-[50%] text-center text-base ml-0 lg:ml-72 pt-2'>
                    Join a supportive community of passionate coders, where learning, collaboration, and innovation come together. Embark on your coding journey with us.
                </p>
             </div>
           </div>
            <div className='flex flex-row flex-wrap justify-center items-center gap-x-28 w-full h-[25rem]'>
                <div >
                  <div className='circle text-red-800 shadow-xl shadow-black/5 hover:shadow-2xl hover:scale-110 flex flex-col items-center justify-center p-5'>
                  <FaYoutube className='text-4xl text-center'/>
                  </div>
                  <div className='py-5'>
                     <FaArrowRightFromBracket className='text-base inline-block gap-4 text-center text-red-800 mr-3'/><span className='inline-block text-sm text-red-800'>Youtube</span>
                  </div>
                </div>
                <div >
                  <div className='circle text-blue-800 shadow-xl shadow-black/5 hover:shadow-2xl hover:scale-110 flex flex-col items-center justify-center p-5'>
                  <FaLinkedin className='text-4xl text-center'/>
                  </div>
                  <div className='py-5'>
                     <FaArrowRightFromBracket className='text-base inline-block gap-4 text-center text-blue-800 mr-3'/><span className='inline-block text-sm text-blue-800'>Linkedin</span>
                  </div>
                </div>
                <div >
                  <div className='circle text-violet-800 shadow-xl shadow-black/5 hover:shadow-2xl hover:scale-110 flex flex-col items-center justify-center p-5'>
                  <FaDiscord className='text-4xl text-center'/>
                  </div>
                  <div className='py-5'>
                     <FaArrowRightFromBracket className='text-base inline-block gap-4 text-center text-violet-800 mr-3'/><span className='inline-block text-sm text-violet-800'>Discord</span>
                  </div>
                </div>
                <div >
                  <div className='circle text-blue-400 shadow-xl shadow-black/5 hover:shadow-2xl hover:scale-110 flex flex-col items-center justify-center p-5'>
                  <FaTelegram className='text-4xl text-center'/>
                  </div>
                  <div className='py-5'>
                     <FaArrowRightFromBracket className='text-base inline-block gap-4 text-center text-blue-400 mr-3'/><span className='inline-block text-sm text-blue-400'>Telegram</span>
                  </div>
                </div>
            </div>          
         </div>
       </div>
    </>
  )
}

export default Codingfamily
