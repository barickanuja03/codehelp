import React from 'react'

function Whoweare() {
  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
      <div className='lg:container md-container xl:container'>
        <div className='flex flex-row justify-between  items-center my-4 hover:border-2 hover:border-green-500 
        rounded-xl md:m-5 overflow-hidden'>
            <div className='w-[100%] md:w-[50%] my-5 flex flex-col gap-y-5 justify-center mx-5'>
                <div className='text-lg text-green-500 font-semibold uppercase'>Who we are</div>
                <div className='text-3xl font-bold '>Empowering Coders, Enabling Dreams</div>
                <p className='text-base pt-3'>Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
                </p>
                <button>Let's Connect</button>
            </div>
            <div className='w-[100%] md:w-[50%] m-11 md:m-11 aspect-square flex items-center'>
              <div>
               <img src="./code.png" className=' px-3 md:w-full md:object-cover'/>
              </div>
            </div>
        </div>
        </div>
        </div> 
    </>
  )
}

export default Whoweare