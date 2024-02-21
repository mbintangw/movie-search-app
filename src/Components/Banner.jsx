import React, { useEffect, useRef, useState } from 'react'
import { getTrandingMovie } from '../API/GlobalApi';
import { HiChevronLeft,HiChevronRight  } from "react-icons/hi";


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth

const Banner = () => {
  const elementRef = useRef()
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    getTrandingMovie().then((result) => {
      setMovieList(result)
    })
  },[])

  const TrandingMovieList = () => {
    return movieList.map((movie, index) => {
      return (
          <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} key={index} className='min-w-full md:h-[600px] object-cover object-left-top mr-5 rounded-md transition-all duration-100 ease-in' />
      )
    })

  }
  
  const sliderRight =(element) => {
    element.scrollLeft += screenWidth-110
  }
  const sliderLeft =(element) => {
    element.scrollLeft -= screenWidth-110
  }

 
  return (
    <div id='Banner'>
      
      <HiChevronLeft className='hidden md:block text-6xl text-white absolute mx-8 top-[450px] -left-4 cursor-pointer' onClick={() => sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-6xl text-white absolute mx-8 top-[450px]  -right-3 cursor-pointer' onClick={() => sliderRight(elementRef.current)}/>
      <div className='md:py-16'>
        <div className='flex overflow-x-auto scrollbar-none scroll-smooth w-full px-16 py-4  cursor-pointer' ref={elementRef}>
          {movieList.length>0?<TrandingMovieList/>:(<div className='min-w-full md:h-[600px] rounded-md bg-gray-500 animate-pulse'>
        </div>)}
          
        </div>

      </div>


    </div>
  )
}

export default Banner
