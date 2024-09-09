import React from 'react'

function Whoweare() {
  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
      <div className='lg:container md-container xl:container'>
        <div className='flex flex-row justify-between my-8 py-24 hover:border-2 hover:border-green-500 
        rounded-xl'>
            <div className='w-[45%] m-11'>
                <div className='text-lg text-green-500 font-semibold uppercase'>Who we are</div>
                <div className='text-3xl font-bold '>Empowering Coders, Enabling Dreams</div>
                <p className='text-base pt-3'>Unveil the essence of CodeHelp: a community-driven platform         dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
                </p>
                <button className='mt-16 ml-2 rounded-3xl text-xl bg-blue-800 px-4 py-2'>Let's Connect</button>
            </div>
            <div className='bg-transparent w-[50%] mx-5 my-8'>
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

export default Whoweare