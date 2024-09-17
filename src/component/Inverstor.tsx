import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Inverstor() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };
  return (
    <>
     <section className='w-full h-auto flex flex-row justify-center  text-white'>
     <div className='lg:container md:container sm:container xl-container '>
        <div className='my-7'>
            <h1 className='text-4xl font-bold'>
                Our Instructor
            </h1>
            <p className='w-[60%] text-base'>
            Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at CodeHelp.
            </p>
        </div>
        <div className="slider-container">
        <Slider {...settings}>
        <div>
            <div className='flex flex-col md:flex-row justify-around  items-center gap-16 py-11 rounded-2xl  h-auto md:h-[25rem]'>
             <div>
                 <img src='https://yt3.googleusercontent.com/r5RS47fkYuPkjajACQyu1mb5j20WIX3VG5qSAzerzaYiD7f6O46GqtH8IZuBbfrjY4fSfj6CkA=s900-c-k-c0x00ffffff-no-rj'
                 className='object-fit  aspect-video lg:aspect-square mx-7 overflow-hidden'  />
              </div>
         <div>
             <h1 className='text-2xl font-semibold'>Love Babber</h1>
             <h3>Founder - Code-Help, Ex-Amazon, Ex-Microsoft </h3>
             <p className='py-7 px-7 text-wrap'>
                Love Babbar is a Software Engineer and a Youtuber, primarily known for his Coding and Software Engineering skills. He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost 1M subscribers. He's also mentored 500k+ students so far. He has done his B.Tech (IT) from the Netaji Subhash Institute of Technology (NSIT), Delhi, and worked in Amazon and Microsoft.
             </p>
         </div> 
        </div>
        </div>
        <div>
            <div className='flex flex-col md:flex-row justify-around  items-center gap-16 py-11 rounded-2xl  h-auto md:h-[20rem] overflow-x-hidden'>
             <div>
                 <img src='https://yt3.googleusercontent.com/r5RS47fkYuPkjajACQyu1mb5j20WIX3VG5qSAzerzaYiD7f6O46GqtH8IZuBbfrjY4fSfj6CkA=s900-c-k-c0x00ffffff-no-rj'
                 className='object-fit  aspect-video lg:aspect-square mx-7 overflow-hidden'  />
              </div>
         <div>
             <h1 className='text-2xl font-semibold'>Love Babber</h1>
             <h3>Founder - Code-Help, Ex-Amazon, Ex-Microsoft </h3>
             <p className='py-7  px-7 text-wrap'>
                Love Babbar is a Software Engineer and a Youtuber, primarily known for his Coding and Software Engineering skills. He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost 1M subscribers. He's also mentored 500k+ students so far. He has done his B.Tech (IT) from the Netaji Subhash Institute of Technology (NSIT), Delhi, and worked in Amazon and Microsoft.
             </p>
         </div> 
        </div>
        </div>
      </Slider>
    </div>
       
     </div>
    </section> 
    </>
  )
}

export default Inverstor
