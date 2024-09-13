import React from 'react'

function Counting() {
  return (
    <>
      <div className='w-screen h-auto flex flex-row justify-center bg-black'>
        <div className='lg:container md-container xl:container sm-container'>
          <div className='flex flex-row justify-center lg:justify-evenly sm:ml-11 lg:ml-0 flex-wrap md:gap-x-3 lg:gap-x-9 m-5 lg:px-10 object-cover md:py-4 md:px-5 lg:py-10 overflow-hidden hover:border-2 hover:border-blue-800 rounded-2xl gap-5
          hover:shadow-xl hover:shadow-slate-700 w-full'>
            <div>
                <div className='rounded-2xl px-10 py-5 lg:px-5'>
                    <h1 className='text-lg lg:text-2xl font-bold text-center'>1M +</h1>
                    <h1 className='text-base lg:text-lg font-normal hover:underline md:text-base'>Subscribe on channel</h1>
                </div>
            </div>
            <div >
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5'>
                    <h1 className='text-lg lg:text-2xl font-bold text-center'>6K +</h1>
                    <h1 className='text-base lg:text-lg font-normal hover:underline'>Follow on Twitter</h1>
                </div>
            </div>
            <div>
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5'>
                    <h1 className='text-lg lg:text-2xl font-bold text-center'>135K +</h1>
                    <h1 className='text-base lg:text-lg font-normal hover:underline'>Follow On Instagram</h1>
                </div>
            </div>
            <div>
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5'>
                    <h1 className='text-lg lg:text-2xl font-bold text-center'>522K +</h1>
                    <h1 className='text-base lg:text-lg font-normal hover:underline'>Follow on Likedin</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counting
