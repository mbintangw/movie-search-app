import React, { useEffect, useState } from 'react'
import { getDetailMovie } from '../API/GlobalApi';
import { useParams } from 'react-router-dom'


const MovieDetail = ({id}) => {
  const [detailMovie, setDetailMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDetailMovie(id);
        setDetailMovie(result);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {detailMovie && (
        <div>
          <div className='relative bg-gradient-to-t from-black to-white h-96 w-full z-0'>
            <img src={`https://image.tmdb.org/t/p/original`+ detailMovie.backdrop_path} className='w-full h-full object-cover absolute mix-blend-multiply'/>
          </div>
          <div className='grid  mx-6 lg:mx-14 gap-3 md:gap-10 text-white z-10'>
              <img src={`https://image.tmdb.org/t/p/original`+ detailMovie.poster_path} 
                alt={detailMovie.title} 
                className='row-span-2 lg:row-span-4 w-full  md:w-80 rounded-lg  '/>
              <h1 className='text-xl md:text-4xl font-bold lg:mt-10'>{detailMovie.title?detailMovie.title:detailMovie.name}</h1>
              <ul className='flex flex-col gap-3 lg:flex-row text-center lg:items-center md:-mt-10 lg:-mt-0 ml-2'>
                {detailMovie.genres.map(genre => (
                    <li key={genre.id} className='border bg-white text-black rounded-lg px-2 w-2/3 py-1 lg:py-2'>{genre.name}</li>
                  ))}
              </ul>
              <p className='col-span-2 lg:col-span-1 lg:col-start-2 lg:w-3/4 text-lg md:text-2xl'>{detailMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetail

{/* <div className='relative text-white font-lato'>
<img src={`https://image.tmdb.org/t/p/original`+ detailMovie.backdrop_path} alt={detailMovie.title} className='w-full h-full object-cover '/>
<div className='absolute h-full w-full bg-gradient-to-t from-black from-50%  -bottom-[1px]'>
  <div className='grid absolute top-[50%] lg:top-[40%] mx-6 lg:mx-14 gap-3 md:gap-10'>
      <img src={`https://image.tmdb.org/t/p/original`+ detailMovie.poster_path} 
        alt={detailMovie.title} 
        className='row-span-2 lg:row-span-4 w-full  md:w-80 rounded-lg  '/>
      <h1 className='text-xl md:text-4xl font-bold lg:mt-10'>{detailMovie.title?detailMovie.title:detailMovie.name}</h1>
      <ul className='flex flex-col gap-3 lg:flex-row text-center lg:items-center md:-mt-10 lg:-mt-0 ml-2'>
        {detailMovie.genres.map(genre => (
            <li key={genre.id} className='border bg-white text-black rounded-lg px-2 w-2/3 py-1 lg:py-2'>{genre.name}</li>
          ))}
      </ul>
      <p className='col-span-2 lg:col-span-1 lg:col-start-2 lg:w-3/4 text-lg md:text-2xl'>{detailMovie.overview}</p>
  </div>
</div>
</div> */}