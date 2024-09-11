import React from 'react'

function Counting() {
  return (
    <>
      <div className='w-screen h-auto flex flex-row justify-around'>
        <div className='lg:container md-container xl:container'>
          <div className='flex flex-row justify-evenly md:gap-x-3 lg:gap-x-9 m-5  px-10 object-cover md:py-4 md:px-5 lg:py-10 overflow-hidden coutning text-nowrap hover:border-2 hover:border-blue-800 rounded-2xl
          hover:shadow-xl hover:shadow-slate-700'>
            <div>
                <div className='coutning rounded-2xl px-10 py-5 lg:px-5 '>
                    <h1 className='text-2xl font-bold text-center'>1M +</h1>
                    <h1 className='text-lg font-normal hover:underline md:text-base'>Subscribe on channel</h1>
                </div>
            </div>
            <div >
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5'>
                    <h1 className='text-2xl font-bold text-center'>6K +</h1>
                    <h1 className='text-lg font-normal hover:underline'>Follow on Twitter</h1>
                </div>
            </div>
            <div>
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5'>
                    <h1 className='text-2xl font-bold text-center'>135K +</h1>
                    <h1 className='text-lg font-normal hover:underline'>Follow On Instagram</h1>
                </div>
            </div>
            <div>
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5'>
                    <h1 className='text-2xl font-bold text-center'>522K +</h1>
                    <h1 className='text-lg font-normal hover:underline'>Follow on Likedin</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counting
