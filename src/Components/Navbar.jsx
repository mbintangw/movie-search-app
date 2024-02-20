import React from 'react'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus} from 'react-icons/hi2'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button, Link } from 'react-scroll'
import { useState, useRef, useEffect } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { searchMovie } from '../API/GlobalApi'

const Navbar = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const toggleSearch = () => setIsSearchVisible(prevState => !prevState)

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(prevState => !prevState)

  const [click, setClick] = useState(false)
  const handleclick = () => setClick(!click)


  const navigate = useNavigate();
  const handleClickSeries = () => {
    navigate('/Series')
  }

  const handleClickMovie = () => {
    navigate('/Movie')
  }
  const handleClickHome = () => {
    navigate('/')
  }

  const content = 
  <>
    <div className='lg:hidden block absolute top-[70px] mx-auto w-1/2  bg-black/80 backdrop-blur-3xl transition '>
      <ul className='justify-center text-center space-y-4 md:hidden border'>
        <li className=' py-3 hover:bg-white/20'>
          <button onClick={handleClickHome} className='cursor-pointer '>Home</button>
        </li>
        <li className=' py-3 hover:bg-white/20'>
          <button onClick={handleClickSeries}
          className='cursor-pointer'>Series</button>
        </li>
        <li className=' py-3 hover:bg-white/20'>
          <button onClick={handleClickMovie}
          className='cursor-pointer'>Movie</button>
        </li>
      </ul>
    </div>
  </>

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      console.log({query: query})
    }
  }

  return (
    <nav className={`w-full fixed backdrop-blur-sm z-50 bg-slate-900 `} >
      <div className='h-10vh w-full flex items-center justify-between px-5 py-4 text-white'>
        <div className='flex items-center '>
          <h1 className='font-protest text-4xl'>MoxVie</h1>
          <button className='flex justify-center items-center px-4 font-lato font-bold cursor-pointer transition duration-300   md:hidden ml-4' onClick={toggleDropdown}>
            More <RiArrowDownSFill className='text-2xl'/>
          {isDropdownVisible && content}
          </button>
          <div className='hidden md:flex'>
            <ul className='flex justify-center items-center ml-8'>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
              <button onClick={handleClickHome} className='cursor-pointer '>Home</button>
              </li>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
              <button onClick={handleClickSeries} className='cursor-pointer'>Series</button>
              </li>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
              <button onClick={handleClickMovie} className='cursor-pointer'>Movie</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center relative'>
            <HiMagnifyingGlass className=' mr-2 text-2xl cursor-pointer'/>
            <input type="text" 
              placeholder='Search...' 
              id="seacrh"
              onChange={({target}) => search(target.value)} 
              className='px-3 py-1 rounded-3xl bg-slate-500/30  text-white outline-none placeholder:text-white/70 transition ease-out'></input>
            <img src='https://source.unsplash.com/150x150?avatar' className='w-8 h-8 rounded-md ml-3'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
