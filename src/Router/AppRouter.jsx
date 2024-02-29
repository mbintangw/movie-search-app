import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SeriesPage from '../Pages/SeriesPage'
import HomePage from '../Pages/HomePage'
import MoviePage from '../Pages/MoviePage'
import MainLayout from '../Layout/MainLayout'
import SearchPage from '../Pages/SearchPage'
import DetailPage from '../Pages/DetailPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<MainLayout><HomePage/></MainLayout>}/>
        <Route
          path='/Series' element={<MainLayout><SeriesPage/></MainLayout>}/>
        <Route
          path='/Movie' element={<MainLayout><MoviePage/></MainLayout>}/>
        <Route
          path='/Search' element={<MainLayout><SearchPage/></MainLayout>}/>
        <Route
          path='/Detail/:media_type/:id' element={<MainLayout><DetailPage/></MainLayout>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router
