import React from 'react'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus} from 'react-icons/hi2'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button, Link } from 'react-scroll'
import { useState, useRef, useEffect } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate, useSearchParams } from 'react-router-dom'
import { searchMovie } from '../API/GlobalApi'

const Navbar = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const toggleSearch = () => setIsSearchVisible(prevState => !prevState)

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(prevState => !prevState)

  const [click, setClick] = useState(false)
  const handleclick = () => setClick(!click)

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);


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

  const searchQuary = useRef();

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
    const q = searchQuary.current.value;
    if (q.length > 3) {
      navigate({
        pathname: '/search',
        search: `?q=${q}`,
      })
    } else {
      alert('Please enter at least 3 characters')
    }
  }

  const content = 
  <>
    <div className='lg:hidden block absolute top-[70px] mx-auto w-1/2  bg-black/80 backdrop-blur-3xl transition  '>
      <ul className='justify-center text-center space-y-4 md:hidden border'>
        <button onClick={handleClickHome} className='cursor-pointer w-full '>
          <li className=' py-3 hover:bg-white/20 w-full'>Home</li>
        </button>
        <button onClick={handleClickSeries}
          className='cursor-pointer  w-full'>
            <li className=' py-3 hover:bg-white/20'>Series</li>
        </button>
        <button onClick={handleClickMovie}
          className='cursor-pointer  w-full'>
            <li className=' py-3 hover:bg-white/20'>Movie</li>
        </button>
      </ul>
    </div>
  </>

  return (
    <nav className={`w-full sticky top-0 z-50 ${isScrolling ? 'bg-slate-900' : 'md:bg-transparent'}`} >
      <div className='h-10vh w-full flex items-center justify-between sm:px-10 px-5 py-4 text-white' >
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
            <div>
              <form onSubmit={handleSearchOnSubmit} className='md:relative absolute inset-y-0 right-16 mr-14 md:right-0 '>
                <input 
                  type="text" 
                  placeholder='Search...' 
                  id="search"
                  ref={searchQuary}
                  className='peer cursor-pointer md:relative absolute z-10 w-12 h-12 rounded-full border bg-transparent outline-none text-transparent placeholder-transparent
                  focus:top-[65px] focus:placeholder:text-white focus:pl-4 focus:w-60 focus:-right-24 focus:cursor-text focus:border-gray-300 focus:text-white focus:bg-black/70 focus:md:w-full focus:md:top-0 focus:md:right-0 focus:md:pl-14 focus:md:bg-transparent '/>
                  <HiMagnifyingGlass className='absolute inset-y-0 px-3.5 my-auto h-12 w-12 border-r border rounded-full stroke-gray-500 peer-focus:border-gray-300 peer-focus:stroke-gray-500 peer-focus:z-20 peer-focus:border-t-transparent peer-focus:border-l-transparent peer-focus:border-b-transparent peer-focus:rounded-none'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

