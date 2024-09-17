"use client";
import React from 'react'
import { Tooltip } from 'react-tooltip'
function Logohover() {
  const logoes = [
    {
      id: 1,
      image:'https://tse2.mm.bing.net/th?id=OIP.EWG1Kxa1B-TULKh1cyxDCwHaHa&pid=Api&P=0&h=180',
      name: 'VUE',
    },
    {
      id: 2,
      image:'https://tse1.mm.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=180',
      name: 'REACT',
    },
    {
      id: 3,
      image:'https://tse1.mm.bing.net/th?id=OIP.PtkUJ4KMeyguSSbaJCO41gHaH0&pid=Api&P=0&h=180',
      name: 'ANGULAR',
    },
  ];
  return (
    <>
      <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11 bg-black'>
          <div className='lg:container md-container xl:container'>
             <div className='w-full flex justify-center'>
                <h1 className='text-2xl text-center text-slate-500 font-semibold mt-8 mx-5'>50+ POWERFUL IN-BROWSER IDE TEMPLATES TO PRACTICE ON</h1>
             </div>
             <div>
              <div>
              {
          <div className="flex flex-row justify-center items-center flex-wrap mt-10">
          {
           logoes.map((logo) =>{
              return(
                 <div key={logo.id}>
                  <div className="bg-black rounded-xl w-auto">
                    <h2 className="text-lg font-semibold text-wrap pl-2 opacity-0 hover:opacity-50">{logo.name}</h2>
                    <img src={logo.image} className='object-cover w-11 aspect-square rounded-3xl mt-3 text-center'/>
                  </div>
                 </div>
              );
            })
          }
        </div>
        }
              </div>
             </div>
          </div>
      </div>
    </>
  )
}

export default Logohover
