import React from 'react'

function Login() {
  return (
    <>
       <div className='text-gray-400 bg-white lg:-ml-11 z-50'>
          <div className='border-2 border-green-100 w-[25rem] aspect-video shadow-lg  shadow-green-200 flex flex-col justify-center gap-y-3'>
              <h1 className='text-center w-full'>Register/Login with E-mail</h1>
              <input type='text' placeholder='Enter You mail' className=' rounded-xl ml-11 w-[20rem] py-2 text-center bg-green-50 shadow-sm border-2 border-black/20'/>
              <button className='bg-blue-400 hover:bg-blue-200 w-[10rem] text-center ml-28 mt-4 py-2 text-white hover:text-black rounded-xl'>Login</button>
          </div>
        </div>
    </>
  )
}

export default Login
