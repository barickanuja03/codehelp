import React from 'react'

function Counting() {
  return (
    <>
      <div className='w-screen h-auto flex flex-row justify-center overflow-x-hidden'>
        <div className='lg:container md-container xl:container'>
          <div className='flex flex-row justify-center lg:justify-evenly flex-wrap md:gap-x-3 lg:gap-x-9 m-5 lg:px-10 object-cover md:py-4 md:px-5 lg:py-10 overflow-hidden text-nowrap hover:border-2 hover:border-blue-800 rounded-2xl gap-5
          hover:shadow-xl hover:shadow-slate-700'>
            <div>
                <div className='coutning rounded-2xl px-10 py-5 lg:px-5 border-2 border-stone-100'>
                    <h1 className='text-2xl font-bold text-center'>1M +</h1>
                    <h1 className='text-lg font-normal hover:underline md:text-base'>Subscribe on channel</h1>
                </div>
            </div>
            <div >
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5 border-2 border-stone-100'>
                    <h1 className='text-2xl font-bold text-center'>6K +</h1>
                    <h1 className='text-lg font-normal hover:underline'>Follow on Twitter</h1>
                </div>
            </div>
            <div>
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5 border-2 border-stone-100'>
                    <h1 className='text-2xl font-bold text-center'>135K +</h1>
                    <h1 className='text-lg font-normal hover:underline'>Follow On Instagram</h1>
                </div>
            </div>
            <div>
            <div className='coutning rounded-2xl px-10 py-5  lg:px-5 border-2 border-stone-100'>
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
