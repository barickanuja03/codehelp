import React from 'react'

function Fruitbox() {
  return (
    <>
      <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11'>
        <div className='lg:container md-container xl:container'>
            <div className='flex justify-center flex-col lg:flex-row lg:px-4 lg:py-4 '>
              <div className='w-[100%] lg:w-[50%] my-5 mx-5 px-5 py-5  hover:border-2 hover:border-blue-800
                hover:shadow-md hover:shadow-blue-200 rounded-xl overflow-hidden md:m-5'>
                  <div className='text-xl text-blue-800 font-semibold max-w-full'>FruitBox Flex</div>
                  <div className='text-3xl font-bold '>Explore Innovative Projects with FruitboxFlex</div>
                  <p className='text-base pt-3'>
                     From interactive web applications to cutting-edge software solutions, FruitboxFlex is the space where ideas flourish and collaborations thrive.
                  </p>
                  <button className='mt-16 ml-2 rounded-3xl text-xl bg-blue-800 px-4 py-2'>Try It Yourself</button>
                  <div className='mt-8 flex justify-end'>
                    <img src='https://www.codehelp.in/_next/image?url=%2Fassets%2FHome%2Ffruitboxflex.svg&w=640&q=100' />
                  </div>
               </div>
               
               {/* Right side */}
               <div className='w-[100%] lg:w-[50%] my-5 mx-5 px-5 py-5  hover:border-2 hover:border-blue-800
                hover:shadow-md hover:shadow-blue-200 rounded-xl overflow-hidden md:m-5'>
                  <div className='text-xl text-blue-800 font-semibold'>Quick Compiler</div>
                  <div className='text-3xl font-bold '>Hands-on practice</div>
                  <p className='text-base pt-3'>
                     At codehelp, you get to learn by doing. Escape tutorial hell by solving real-world challenges in our interactive labs, all within your browser.
                  </p>
                  <button className='mt-16 ml-2 rounded-3xl text-xl bg-blue-800 px-4 py-2'>Try It Yourself</button>
                  <div className='mt-8 flex justify-end'>
                    <img src='https://www.codehelp.in/_next/image?url=%2Fassets%2FHome%2FquickCompiler.svg&w=640&q=100' />
                  </div>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Fruitbox
