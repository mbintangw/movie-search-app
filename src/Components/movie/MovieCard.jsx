import React from 'react'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const MovieCard = ({movie}) => {
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} alt="Movie Poster" 
      className='
      w-28 
      md:w-52 
      rounded-lg 
      hover:border-[3px]
      border-grey-400 
      hover:scale-110 
      transition-all 
      duration-150 
      ease-in 
      cursor-pointer'
      />
      
    </>
  )
}

export default MovieCard
