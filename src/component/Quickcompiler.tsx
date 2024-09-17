import React from 'react'
import Head from 'next/head'
function Quickcompiler() {
  return (
    <>
      <div className='w-full h-auto lg:w[100%] flex flex-row justify-around mt-11 bg-black'>
      <div className='lg:container md-container xl:container sm:container'>
        <div className='flex justify-center flex-wrap w-full'>
            <div className='text-xl lg:text-3xl font-semibold w-[80vw] text-center'>
            Explore Innovation FruitboxFlex and Quick Compiler
            </div>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row my-8 hover:border-2 hover:border-pink-700 rounded-xl overflow-x-hidden md:m-5'>
           <div className='w-[90vw] lg:w-[50%] flex flex-col flex-wrap gap-y-5 justify-center ml-3 px-3'>
             <div className='text-xl text-orange-400 font-semibold'>Quick Compiler</div>
                <div className='text-3xl font-bold '>Code On-the-Go with Quick Compiler</div>
                <p className='text-base pt-3'>Whether you're fine-tuning your code or exploring new languages, Quick Compiler simplifies the coding process, making it faster and more accessible for every developer.</p>
           </div>
            <div className='w-[90vw] md:w-[50%] m-5 md:m-11 aspect-square flex items-center '>
              <div>
               <img src="./code.png" className= 'px-3 md:w-full md:object-cover'/>
              </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Quickcompiler
