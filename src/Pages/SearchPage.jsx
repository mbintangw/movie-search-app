import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovie } from '../API/GlobalApi'
import { useState, useEffect } from 'react'

const SearchPage = () => {
  // get q param
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [movieData, setMovieData] = useState();

  useEffect(() => {
    if (q) {
      searchMovie(q).then((result) => {
        setMovieData(result);
      });
    }
  }, [q, setMovieData]);

  return (
    <div className='flex flex-wrap items-center justify-center mt-10 gap-14'>
      {movieData?.results?.map((item,index)=> index <= 20 && (
        <div className='text-black w-[300px] h-[500px] relative group cursor-pointer' key={index}>
          <div className='w-full bg-white rounded-xl overflow-clip group-hover:bg-black'>
            <img src={`https://image.tmdb.org/t/p/original`+ item.poster_path}/>
            <h2 className='text-center p-3 font-bold truncate font-lato text-ellipsis'>{item.original_title}
            </h2>
          </div>
          <div className="absolute top-0 w-full h-full p-5 bg-black/50 text-white opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300">
            <h3 className='text-white font-bold font-lato mb-5 truncate '>{item.original_title}</h3>
            <p className='line-clamp-[10]'>{item.overview}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchPage
