import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { getSeriesByGenreId } from '../../API/GlobalApi';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import SeriesCard from './SeriesCard';

const SeriesList = ({genreseriesId}) => {
  const [seriesList,setSeriesList]=useState([])
  const elementRef=useRef();

  useEffect(()=>{
    getSeriesByGenreId(genreseriesId).then((result) => {
      setSeriesList(result)
    });
  },[])

  const SeriesList = () => {
    return seriesList.map((series,index) => {
      return (
        <SeriesCard series={series} key={index}/>
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

      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
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
