import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { getSeriesByGenreId } from '../../API/GlobalApi';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import SeriesCard from './SeriesCard';
import { Link } from 'react-router-dom';

const SeriesList = ({genreseriesId}) => {
  const [seriesList,setSeriesList]=useState([])
  const elementRef=useRef();

  useEffect(()=>{
    getSeriesByGenreId(genreseriesId).then((result) => {
      setSeriesList(result)
    });
  },[])

  const SeriesList = () => {
    return seriesList.map((series, index, id) => {
      return (
        <div className='md:min-h-72 md:min-w-52 text-black group relative cursor-pointer' key={index}>
          <div className='min-h-72 min-w-52'>
          <SeriesCard series={series} key={index}/>
          </div>
          <Link to={`/Detail/tv/${series.id}`} >
            <div className="flex justify-center items-center absolute top-0  w-full h-full  bg-black-50 text-white opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 text-wrap">
                <h1 className='text-white font-bold font-lato text-xl text-wrap text-center p-5 '>
                {series.original_name}</h1>
            </div>
          </Link>
        </div>
        
      )
    })
  }

  const slideRight=(element)=>{
    element.scrollLeft+=500;
  }
  const slideLeft=(element)=>{
    element.scrollLeft-=500;
  }
  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
      className='text-[50px] text-white
        p-2 z-10 cursor-pointer 
        hidden md:block absolute
        mt-[150px]'/>

      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 '>
        {seriesList.length>0?<SeriesList/>:(
          <>
          <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
          <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
          <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
          <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
          </>)}
        <SeriesList/>
      </div>

      <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
      className='text-[50px] text-white hidden md:block
      p-2 cursor-pointer z-10 top-0 absolute right-0 mt-[150px]'/> 
    </div>
  )
}

export default SeriesList
