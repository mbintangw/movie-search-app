import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import GenreMovieList from '../Components/GenreMovieList'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GenreMovieList/>
    </div>
    
  )
}

export default HomePage
