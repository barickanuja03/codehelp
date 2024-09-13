import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    <div className='w-screen lg:w[auto] flex flex-row justify-around bg-black'>
      <div className='sm:container lg:container md-container xl:container'>
        <div>
            <h1 className='text-center w-full text-4xl font-bold break-words mb-7'>Recorded <span className='text-blue-800 '>Courses</span></h1>
        </div>
        <div className="slider-container">
      <Slider {...settings}> 
        <div>
          <div className="ml-7 mr-7">
             <img src="https://tse2.mm.bing.net/th?id=OIP.gVyoX3gDiVqtx5lPuQGRxAHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-sm md:text-xl text-wrap font-bold ">Data Structures & Algorithms @SUPREME 3.0</h2>
              <div className='flex flex-row flex-wrap md:gap-32 lg:gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800">&#8377;&nbsp;2199</p>
                <p className="line-through">&#8377;&nbsp;4800</p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">50% off</p>
            </div>
         </div>
        </div>
        <div>
          <div className="ml-7 mr-7">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-sm md:text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
              <div className='flex flex-row flex-wrap gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800">&#8377;&nbsp;3499</p>
                <p className="line-through">&#8377;&nbsp;7000 </p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">60% off</p>
            </div>
         </div>
        </div>
        <div>
          <div className="ml-7 mr-7">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-sm md:text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
              <div className='flex flex-row flex-wrap gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800">&#8377;&nbsp;3499</p>
                <p className="line-through">&#8377;&nbsp;7000 </p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">60% off</p>
            </div>
         </div>
        </div>
        <div className="ml-7 mr-7">
          <div>
             <img src="https://tse2.mm.bing.net/th?id=OIP.gVyoX3gDiVqtx5lPuQGRxAHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-sm md:text-xl text-wrap font-bold ">Data Structures & Algorithms @SUPREME 3.0</h2>
              <div className='flex flex-row flex-wrap gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800">&#8377;&nbsp;2199</p>
                <p className="line-through">&#8377;&nbsp;4800</p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">50% off</p>
            </div>
         </div>
        </div>
        <div>
          <div className="ml-7 mr-7">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-sm md:text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
              <div className='flex flex-row flex-wrap gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800">&#8377;&nbsp;3499</p>
                <p className="line-through">&#8377;&nbsp;7000 </p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">60% off</p>
            </div>
         </div>
        </div>
        <div>
          <div className="ml-7 mr-7">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
              <div className='flex flex-wrap flex-row gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800">&#8377;&nbsp;3499</p>
                <p className="line-through">&#8377;&nbsp;7000 </p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl">60% off</p>
            </div>
         </div>
        </div>
      </Slider>
    </div>
      </div>
    </div>
    </>
  );
}

export default AutoPlay;
