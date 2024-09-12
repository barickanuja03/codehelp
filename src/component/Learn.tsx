import React from "react";
function Learn() {
  const courses = [
    {
      id: 1,
      image:'https://tse4.mm.bing.net/th?id=OIP.FPZhFLmRnOSBUTKUNTTWOAAAAA&pid=Api&P=0&h=180',
      name: 'Data Structures & Algorithms @SUPREME 3.0',
      price: 3499,
      originalPrice: 7000,
      discount: 50,
    },
    {
      id: 2,
      image:'https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180',
      name: 'Low Level Design BootCamp',
      price: 2199,
      originalPrice: 4800,
      discount: 57,
    },
    {
      id: 3,
      image:'https://tse2.mm.bing.net/th?id=OIP.gVyoX3gDiVqtx5lPuQGRxAHaEK&pid=Api&P=0&h=180',
      name: 'Web Development Master Course',
      price: 3499,
      originalPrice: 6999,
      discount: 50,
    },
  ];

  return (
    <>
     <div className='w-screen h-auto lg:w[auto] flex flex-row justify-around mt-11 mb-11'>
       <div className='lg:container md-container xl:container'>
         <div className='flex justify-center w-full'>
           <h1 className='capitalize text-3xl font-bold'>Would you like to <span className='text-blue-800'>learn ?</span></h1>
         </div>
      <div>
        {
          <div className="flex flex-row justify-evenly items-center gap-x-7 gap-y-5 flex-wrap mt-10">
          {
            courses.map((course) =>{
              return(
                 <div key={course.id}>
                  <div className="bg-black rounded-xl w-auto mx-20 lg:mx-0">
                    <img src={course.image} className='object-cover p-4'/>
                    <h2 className="text-xl text-wrap font-bold ">{course.name}</h2>
                    <div className='flex flex-row gap-x-3 mt-5 justify-start'>
                    <p className="text-blue-800">&#8377;&nbsp;{course.price}</p>
                    <p className="line-through">&#8377;&nbsp;{course.originalPrice} </p>
                    <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">{course.discount}% off</p>
                    </div>
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
    </>
  );
}

export default Learn