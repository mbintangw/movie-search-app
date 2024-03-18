import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovie } from '../API/GlobalApi'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SearchPage = () => {
  // get q param
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [movieData, setMovieData] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (q) {
      setMovieData(null); // Set nilai movieData menjadi null sebelum melakukan pencarian
      searchMovie(q).then((result) => {
        if (result?.results?.length > 0) {
          setMovieData(result);
          setNotFound(false); // Data ditemukan, set NotFound menjadi false
        } else {
          setNotFound(true); // Data tidak ditemukan, set NotFound menjadi true
        }
      });
    }
  }, [q, setMovieData]);

  if (notFound) {
    return (
      <div className="text-center mt-10 text-white">
        <h1 className="text-3xl font-bold mb-4">Not Found <span className='text-red-500'>{q}</span></h1>
        <p className="text-lg">Sorry, currently <span className='text-red-500'>{q}</span> Movie or TV Series is not available.</p>
        <p className="text-lg">please check the word again if it is correct</p>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap items-center justify-center mt-10 gap-14' key={q}>
      {!movieData?.results && <>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      <div className='min-w-[300px] min-h-[500px] rounded-xl bg-gray-500 animate-pulse'></div>
      </>}
      {movieData?.results?.map((item,index)=>(
        <div className='text-black w-[300px] min-h-[500px] relative group cursor-pointer ' key={index}>
          <div className='w-full bg-white rounded-xl overflow-clip group-hover:bg-black'>
            <img src={`https://image.tmdb.org/t/p/original`+ item.poster_path} alt={item.original_title?item.original_title:item.original_name}/>
            <h2 className='text-center p-3 font-bold truncate font-lato text-ellipsis'>{item.original_title?item.original_title:item.original_name}
            </h2>
          </div>
          <Link to={`/Detail/${item.media_type}/${item.id}`} key={index}>
            <div className="absolute top-0 w-full h-full p-5 bg-black/50 text-white opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300">
              <h3 className='text-white font-bold font-lato mb-5 truncate '>{item.original_title?item.original_title:item.original_name}</h3>
              <p className='line-clamp-[10]'>{item.overview}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SearchPage
