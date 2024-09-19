 "use client"
 import React, { useState } from 'react'
 import { CiMenuFries } from "react-icons/ci";
 function Header() {
const [isClick,setisclick] = useState(false);
const toggleNavbar = () :void =>
{
  setisclick(!isClick)
}
   return (
     <>
     <div className='bg-black fixed z-50 top-0 w-full'>
        <div className="main-container">
          <header>
           <nav className='bg-black flex justify-between items-center  h-auto'>
            <div className='flex-shrink-0'>
                 <img 
                 src='	https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=256&q=75' 
                 className='object-cover w-52 h-11 aspect-square'
                 />
              </div>
             <div className='hidden md:block'>
                 <ul className='flex items-center gap-[2vw] text-lg'>
                     <li className='text-blue-600'>Home</li>
                     <li className='hover:text-blue-600'>Course</li>
                     <li className='hover:text-blue-600'>Explore</li>
                     <li className='hover:text-blue-600'>Contact</li>
                     <li className='hover:text-blue-600'>Articles</li>
                     <li className='hover:text-blue-600'>Tutorial</li>
                 </ul>
             </div>
             <div className='md:hidden flex items-center'>
              <button className='inline-flex items-center justify-center p-2 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
              ' onClick={toggleNavbar}>
                {isClick ? (
                 <svg
                 className='h-6 w-6'
                 xmlns='https://www.w3.org/2000/svg'
                 fill='none'
                 viewBox='0 0 24 24'
                 stroke='currentcolor' 
                 >
                  <path 
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6L12 12'
                  />
                 </svg>
                ) : (
                  <svg
                  className='h-6 w-6'
                  xmlns='https://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentcolor'
                  >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6H16M4 12H16m-7 6H7'
                    />
                  </svg>
                )}
              </button>
             </div>
            
           </nav>
           {isClick && (
              <div className='md:hidden bg-black/30'>
               <div className='w-[100%] h-auto'>
               <ul className='flex flex-col items-center pt-7 text-lg'>
                     <li className='text-blue-600 text-center w-full pt-9'>Home</li>
                     <li className='hover:text-blue-600 text-center w-full'>Course</li>
                     <li className='hover:text-blue-600'>Explore</li>
                     <li className='hover:text-blue-600'>Contact</li>
                     <li className='hover:text-blue-600'>Articles</li>
                     <li className='hover:text-blue-600'>Tutorial</li>
                 </ul>
               </div>
               </div>
             )}
          </header>
       </div> 
       </div>
     </>
   )
 }

 export default Header
