import React from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import { useState, useRef, useEffect } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const toggleSearch = () => setIsSearchVisible(prevState => !prevState)

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(prevState => !prevState)

  const [click, setClick] = useState(false)
  const handleclick = () => setClick(!click)

  const [isScrolling, setIsScrolling] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchOnClick = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      searchQuary.current.value = ''; 
    }
  };
  
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
    searchQuary.current.value = '';
    setShowSearch(false);

    
    if (q.length > 2) {
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
    <div className='lg:hidden block absolute top-[70px] mx-auto w-1/2  bg-black/80 transition  '>
      <ul className='justify-center text-center space-y-4 md:hidden border'>
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
    <nav className={`w-full sticky top-0 z-50 ${isScrolling ? 'bg-black/70  ' : 'bg-transparent'}`} >
      <div className='h-10vh w-full flex items-center justify-between sm:px-10 px-5 py-4' >
        <div className='flex items-center text-white'>
        <button onClick={handleClickHome} className='font-protest text-4xl cursor-pointer '>MoxVie.</button>
          <button className='flex justify-center items-center px-4 font-lato font-bold cursor-pointer transition duration-300   md:hidden ml-4' onClick={toggleDropdown}>
            More <RiArrowDownSFill className='text-2xl'/>
          {isDropdownVisible && content}
          </button>
          <div className='hidden md:flex'>
            <ul className='flex justify-center items-center ml-8'>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
              <button onClick={handleClickSeries} className='cursor-pointer'>Series</button>
              </li>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
              <button onClick={handleClickMovie} className='cursor-pointer'>Movie</button>
              </li>
            </ul>
          </div>
        </div>
        <div className='mr-10 flex flex-row items-center gap-2'>
            <button onClick={handleSearchOnClick}>
              <HiMagnifyingGlass className='text-white text-3xl border rounded-full p-1'/>
            </button>
            {showSearch && (
              <form onSubmit={handleSearchOnSubmit} className='flex flex-col items-center md:flex-row md:items-center'>
                <input 
                  type="text" 
                  placeholder='Search...' 
                  id="search"
                  ref={searchQuary}
                  className='bg-transparent border-b-2 placeholder:text-white text-white focus:outline-none w-full md:w-28'
                />  
              </form>
            )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

