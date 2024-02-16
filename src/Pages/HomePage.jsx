import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import GenreMovieList from '../Components/GenreMovieList'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <GenreMovieList/>
    </div>
  )
}

export default HomePage
