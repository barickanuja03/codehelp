import React from 'react'

function Header() {
  return (
    <>
       <div className="flex justify-center border-b-1 shadow-lg shadow-gray-600 bg-black">
       <div className="lg:container md:container sm:container fixed top-0 z-50">
         <header className='bg-black'>
          <nav className='flex justify-around items-center  h-20'>
                <img 
                src='	https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=256&q=75' 
                className='object-cover w-52 h-11 aspect-square'
                />
            <div>
                <ul className='flex items-center gap-[2vw] text-lg'>
                    <li className='text-blue-600'>Home</li>
                    <li className='hover:text-blue-600'>Course</li>
                    <li className='hover:text-blue-600'>Explore</li>
                    <li className='hover:text-blue-600'>Contact</li>
                    <li className='hover:text-blue-600'>Articles</li>
                    <li className='hover:text-blue-600'>Tutorial</li>
                </ul>
            </div>
            <div>
                <button className='mt-2 text-xl px-7 py-1 border-2 border-blue-600  bg-blue-600 rounded-3xl shadow-lg hover:bg-blue-500'>Login</button>
            </div>
          </nav>
         </header>
        </div>  
      </div> 
    </>
  )
}

export default Header
