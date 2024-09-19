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
    arrows:false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
         speed: 3000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    <div className='main-container'>
        <div>
            <h1 className='text-center w-full text-4xl font-bold break-words mb-7'>Recorded <span className='text-blue-800 '>Courses</span></h1>
        </div>
        <div className="slider-container">
      <Slider {...settings}> 
        <div>
          <div className="mx-3 md:ml-7 md:mr-7 flex justify-center flex-col">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-lg md:text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
              <div className='flex flex-row flex-wrap gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800  text-sm md:text-base">&#8377;&nbsp;3499</p>
                <p className="line-through  text-sm md:text-base">&#8377;&nbsp;7000 </p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl text-sm md:text-base">60% off</p>
            </div>
         </div>
        </div>
        <div>
          <div className="mx-3 md:ml-7 md:mr-7 flex justify-center flex-col">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-lg md:text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
              <div className='flex flex-row flex-wrap gap-x-3 mt-5 justify-start'>
                <p className="text-blue-800  text-sm md:text-base">&#8377;&nbsp;3499</p>
                <p className="line-through  text-sm md:text-base">&#8377;&nbsp;7000 </p>
                <p className="bg-green-300 px-1 py-0 text-white rounded-3xl  text-sm md:text-base">60% off</p>
            </div>
         </div>
        </div>
        <div>
          <div className="mx-3 md:ml-7 md:mr-7 flex justify-center flex-col">
             <img src="https://tse3.mm.bing.net/th?id=OIP.jyoQ0LCAqcMWfVausxnxJwHaEK&pid=Api&P=0&h=180" />
              <h2 className="text-lg md:text-xl text-wrap font-bold ">Low Level Design BootCamp</h2>
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
    </>
  );
}

export default AutoPlay;
