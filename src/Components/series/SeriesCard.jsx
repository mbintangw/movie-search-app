import React from 'react'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const SeriesCard = ({series}) => {
  return (
    <>
      <img src={IMAGE_BASE_URL+series.poster_path}
      alt="Series Poster"
      className='
      w-full
      h-full
      object-cover
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

export default SeriesCard
