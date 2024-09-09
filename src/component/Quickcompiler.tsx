import React from 'react'
import Head from 'next/head'
function Quickcompiler() {
  return (
    <>
      <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
      <div className='lg:container md-container xl:container'>
        <div className='flex justify-center w-full mb-5'>
            <div className='text-3xl font-semibold text-center'>
            Explore Innovation FruitboxFlex and Quick<br/> Compiler
            </div>
        </div>
        <div className='flex flex-row justify-between my-8 mx-11 py-24 hover:border-2 hover:border-orange-400 
        hover:shadow-md hover:shadow-orange-200 focus:bg-orange-300 rounded-xl'>
            <div className='w-[45%] m-7'>
                <div className='text-xl text-orange-400 font-semibold'>Quick Compiler</div>
                <div className='text-3xl font-bold '>Code On-the-Go with Quick Compiler</div>
                <p className='text-base pt-3'>Whether you're fine-tuning your code or exploring new languages, Quick Compiler simplifies the coding process, making it faster and more accessible for every developer.</p>
                <button className='mt-16 ml-2 rounded-3xl text-xl bg-blue-800 px-4 py-2'>Try It Yourself</button>
            </div>
            <div className='bg-transparent w-[50%]  my-8 mx-5'>
              <div>
               <img src="./code.png" className='text-orange-300 px-3'/>
              </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Quickcompiler
