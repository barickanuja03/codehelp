import React from 'react'

function Advantage() {
  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
        <div className='lg:container md-container xl:container'>
            <div>
                <div className='font-bold text-4xl capitalize'>CodeHelp Advantages: Your Competitive Edge</div>
                <p className='text-base pt-3'>
                    Explore the unique benefits that set CodeHelp apart, giving you the competitive edge in your coding endeavors.
                </p>
            </div>
            <div className='flex flex-row justify-between  items-center my-8 mx-11 hover:border-2 px-8 py-11 hover:border-red-800 hover:shadow-md hover:shadow-red-800 rounded-xl overflow-hidden md:m-5
           mt-7 h-[30rem] '>
               <div className='w-[100%] md:w-[50%] my-5 mx-5'>
                <ul className='text-lg'>
                    <li>Structured + problem solving based&nbsp;&nbsp;&nbsp;&nbsp; </li>
                    <li>Fastest 1:1 doubt support&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li>Integrated prep platform&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li>Profile highlighted on naukri&nbsp;&nbsp;&nbsp;&nbsp;</li>
                </ul>
                </div>
                <div>
                    <img src='https://www.codehelp.in/_next/image?url=%2Fassets%2FHome%2Fgraph.svg&w=640&q=75' />
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Advantage
