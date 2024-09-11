import React from 'react'

function Footer() {
  return (
    <>
    <section className='w-screen flex flex-row justify-around pb-16'>
      <div className='lg:container md-container xl:container'>
        <div className='flex flex-col gap-y-10 lg:gap-x-10 md:flex-row  md:justify-around md:gap-x-11 mt-11'>
            <div className='mt-16'>
                <img src='	https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=256&q=75' className='w-52'/>
                <h1>The Ultimate Guide To Ace SDE Interviews.</h1>
            </div>
            <div>
                <h1 className='py-3 text-xl font-bold capitalize '>Quick Links</h1>
                 <ul>
                     <li className='hover:text-blue-800'>Home</li>
                     <li className='hover:text-blue-800'>Courses</li>
                     <li className='hover:text-blue-800'>Challenges</li>
                     <li className='hover:text-blue-800'>Labs</li>
                     <li className='hover:text-blue-800'>Contact</li>
                 </ul>
            </div>
            <div>
            <h1 className='py-3 text-xl font-bold capitalize'>Legal</h1>
             <ul>
                 <li className='hover:text-blue-800'>privacy policy</li>
                 <li className='hover:text-blue-800'>Terms of use</li>
                 <li className='hover:text-blue-800'>Refund & cancilation policy</li>
             </ul>
            </div>
            <div>
              <h1 className='py-3 text-xl font-bold capitalize'>Get In touch</h1>
                <div>
                    <a href=''>support@Codehelp.in</a>
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer
