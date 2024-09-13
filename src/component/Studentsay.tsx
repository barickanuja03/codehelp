import React from 'react'

function Studentsay() {
  const studentsay = [
    {
      id:1,
      name: 'Anuja Barick',
      education:'MCA',
      paragraph:'Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education.',
    },
    {
      id: 2,
      name: 'Bishal Barick',
      education:'MCA',
      paragraph:'Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education.',
    },
    {
      id: 3,
      name: 'Shree Barick',
      education:'MCA',
      paragraph:'Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we are shaping the future of coding education.',
    },
  ];
  return (
    <>
      <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around bg-white text-black'>
       <div className='lg:container md-container xl:container'>
         <div className='mt-20'>
           <h1 className='capitalize text-xl font-bold text-center w-full'>What our Student Says </h1>
           <p className='w-full text-center'>
              Discover inspiration and insights through recent reviews from our students. Their success   stories reflect the transformative journey of learning and growth with CodeHelp.
           </p>
         </div>
         <div className='flex flex-row justify-center gap-x-2 mt-28 mb-16'>
         <div>
        {
          <div className="flex flex-col justify-evenly items-center gap-x-7 gap-y-5 mt-10
         ">
          {
            studentsay.map((data) =>{
              return(
                 <div key={data.id} className='border-2 border-gray-300 p-4 rounded-3xl'>
                  <div className="rounded-xl w-auto mx-20 lg:mx-0">
                    <h2 className="text-lg text-wrap font-medium text-gray-600">{data.name}</h2>
                    <p className="text-gray-400">&nbsp;{data.education}</p>
                    <p>&nbsp;{data.paragraph} </p>
                  </div>
                 </div>
              );
            })
          }
        </div>
        }
      </div>  
            <div>
            <div>
        {
          <div className="flex flex-col justify-evenly items-center gap-x-7 gap-y-5 flex-wrap mt-10">
          {
            studentsay.map((data) =>{
              return(
                 <div key={data.id} className='border-2 border-gray-300 p-4 rounded-3xl'>
                  <div className="rounded-xl w-auto mx-20 lg:mx-0">
                    <h2 className="text-lg text-wrap font-medium text-gray-600">{data.name}</h2>
                    <p className="text-gray-400">&nbsp;{data.education}</p>
                    <p>&nbsp;{data.paragraph} </p>
                  </div>
                 </div>
              );
            })
          }
        </div>
        }
      </div> 
            </div>
            <div>
            <div>
        {
          <div className="flex flex-col justify-evenly items-center gap-x-7 gap-y-5 flex-wrap mt-10
          ">
          {
            studentsay.map((data) =>{
              return(
                 <div key={data.id} className='border-2 border-gray-300 p-4 rounded-3xl'>
                  <div className="rounded-xl w-auto mx-20 lg:mx-0">
                    <h2 className="text-lg text-wrap font-medium text-gray-600">{data.name}</h2>
                    <p className="text-gray-400">&nbsp;{data.education}</p>
                    <p>&nbsp;{data.paragraph} </p>
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
      </div> 
    </>
  )
}

export default Studentsay
