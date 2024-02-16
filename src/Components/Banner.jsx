import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../API/GlobalApi'
import { HiChevronLeft,HiChevronRight  } from "react-icons/hi";


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth

const Banner = () => {

  const [movieList, setMovieList] = useState([])
  const elementRef = useRef()
  useEffect(() => {
    getTrandingMovies()
  },[])

  const getTrandingMovies = () => {
    GlobalApi.getTrandingVideos.then(resp=>{
      console.log(resp.data.results)
      setMovieList(resp.data.results)
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
      
      <HiChevronLeft className='hidden md:block text-6xl text-white absolute mx-8 top-[350px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-6xl text-white absolute mx-8 top-[350px]  -right-2 cursor-pointer' onClick={() => sliderRight(elementRef.current)}/>
      <div className='pt-20'>
        <div className='flex overflow-x-auto scrollbar-none scroll-smooth w-full px-16 py-4  cursor-pointer' ref={elementRef}>
          {movieList.map((item) => (
            <img key={item.id} src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[600px] object-cover object-left-top mr-5 rounded-md transition-all duration-100 ease-in'/>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Banner
