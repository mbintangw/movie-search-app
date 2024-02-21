import React from 'react'
import Banner from '../Components/Banner'
import GenreMovieList from '../Components/movie/GenreMovieList'
import Loading from '../Components/Loading'

const HomePage = () => {
  return (
    <div id='Home'>
      <Banner />
      <GenreMovieList/>
      <Loading/>
    </div>
  )
}

export default HomePage
