import React, { useEffect, useState, useRef } from 'react'
import { getMovieByGenreId } from '../../API/GlobalApi';
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const MovieList = ({genreId,index}) => {
  
  const [movieList,setMovieList]= useState([])
  const elementRef=useRef();

  useEffect(()=>{
      getMovieByGenreId(genreId).then((result) => {
        setMovieList(result)
      });
  },[])

  const GenreMovieList = () => {
    return movieList.map((moviegenre, index, id) => {
      return (
        <div className='md:min-h-72 md:min-w-52 text-black group relative cursor-pointer' key={index}>
          <div className='min-h-72 min-w-52'>
            <MovieCard movie={moviegenre} key={index}/>
          </div>
          <Link to={`/Detail/movie/${moviegenre.id}`} >
            <div className="flex justify-center items-center absolute top-0  w-full h-full  bg-black-50 text-white opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 text-wrap">
                <h1 className='text-white font-bold font-lato text-xl text-wrap text-center p-5 '>
                {moviegenre.title}</h1>
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
    <div className='relative' key={genreId}>
      <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
      className='text-[50px] text-white
        p-2 z-10 cursor-pointer 
        hidden md:block absolute
        mt-[150px]'/>

      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 ' key={index}>
        {movieList.length>0?
        <GenreMovieList/>
        :(
        <>
        <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
        <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
        <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
        <div className='min-h-72 min-w-52 rounded-lg bg-gray-500 animate-pulse'></div>
        </>
        )}
      </div>

      <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
      className='text-[50px] text-white hidden md:block
      p-2 cursor-pointer z-10 top-0 absolute right-0 mt-[150px]'/> 
    </div>
  )
}

export default MovieList
