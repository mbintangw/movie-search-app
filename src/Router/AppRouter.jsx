import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SeriesPage from '../Pages/SeriesPage'
import HomePage from '../Pages/HomePage'
import MoviePage from '../Pages/MoviePage'
import SearchPage from '../Pages/SearchPage'
import DetailPage from '../Pages/DetailPage'
import Header from '../Layout/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<Header><HomePage/></Header>}/>
        <Route
          path='/Series' element={<Header><SeriesPage/></Header>}/>
        <Route
          path='/Movie' element={<Header><MoviePage/></Header>}/>
        <Route
          path='/Search' element={<Header><SearchPage/></Header>}/>
        <Route
          path='/Detail/:media_type/:id' element={<Header><DetailPage/></Header>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
