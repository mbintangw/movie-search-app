import React from 'react'
import Banner from '../Components/Banner'
import GenreMovieList from '../Components/movie/GenreMovieList'

const HomePage = () => {
  return (
    <div id='Home'>
      <Banner />
      <GenreMovieList/>
    </div>
  )
}

export default HomePage
