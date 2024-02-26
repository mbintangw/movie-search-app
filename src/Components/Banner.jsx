import React, { useEffect, useRef, useState } from 'react'
import { getTrandingMovie } from '../API/GlobalApi';
import { HiChevronLeft, HiChevronRight  } from "react-icons/hi";
import Slider from 'react-slick';
import '../index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "30px"}}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "30px"}}
      onClick={onClick}
    />
  );
}

const Banner = () => {

   const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrandingMovie().then((result) => {
      setMovieList(result)
    });
  },[]);

  return (
    <div className='pt-1'>
      <Slider {...settings}>
        {movieList.map((movie,index) => (
        <div key={index} className='relative min-w-full md:h-[700px] '>
          <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className='w-full h-full object-cover rounded-md'/>
          <div className='absolute -bottom-[1px] text-white bg-gradient-to-t  from-black from-15% pt-20 w-full px-5 md:pb-52 '>
            <h1 className='font-bold md:text-3xl mb-2 '>{movie.title?movie.title:movie.name}</h1>
            <p className='md:text-xl line-clamp-2 mr-40 '>{movie.overview}</p>
          </div>
        </div>
        ))}
      </Slider>

    </div>
  )

}

export default Banner

// const Banner = () => {
//   const elementRef = useRef()
//   const [movieList, setMovieList] = useState([]);

//   useEffect(() => {
//     getTrandingMovie().then((result) => {
//       setMovieList(result)
//     });
//   },[]);

//   const TrandingMovieList = () => {
//     return movieList.map((movie, index) => {
//       return (
//           <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} key={index} className='min-w-full md:h-[720px] object-cover mr-5 rounded-md transition-all duration-100 ease-in pt-1'/>
//       )
//     })
//   }


//   const sliderRight =(element) => {
//     element.scrollLeft += screenWidth-95
//   }
//   const sliderLeft =(element) => {
//     element.scrollLeft -= screenWidth-95
//   }

//  useEffect(() => {
//    //call slider right every 5 seconds
//    const interval = setInterval(() => {
//      sliderRight(elementRef.current)
   
//     },5000)
    
//   return () => {
//     clearInterval(interval);
//   };
//   }, []);
  
//   return (
//     <div>
//         <HiChevronLeft className='hidden md:block text-6xl text-white absolute mx-8 top-[450px] -left-4 cursor-pointer' onClick={() => sliderLeft(elementRef.current)}/>
//         <HiChevronRight className='hidden md:block text-6xl text-white absolute mx-8 top-[450px]  -right-3 cursor-pointer' onClick={() => sliderRight(elementRef.current)}/>
        
//         <div className='flex overflow-x-auto scrollbar-none scroll-smooth w-full h-full cursor-pointer' ref={elementRef}>
//           {movieList.length>0?<TrandingMovieList/>:(<div className='min-w-full md:h-[600px] rounded-md bg-gray-500 animate-pulse'></div>)}
//         </div>
//     </div>
//   )
