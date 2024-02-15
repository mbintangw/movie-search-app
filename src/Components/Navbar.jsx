import React from 'react'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus} from 'react-icons/hi2'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useState, useRef, useEffect } from 'react'
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const toggleSearch = () => setIsSearchVisible(prevState => !prevState)

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => setIsDropdownVisible(prevState => !prevState)

  const [click, setClick] = useState(false)
  const handleclick = () => setClick(!click)

  const searchRef = useRef(null)
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const content = 
  <>
    <div className='lg:hidden block absolute top-20 mx-auto w-1/2 transition bg-transparent'>
      <ul className='justify-center text-center space-y-4 md:hidden border'>
        <li className=' py-3 hover:bg-slate-600'>
          <Link to='home'
          spy={true} smooth={true}
          className='cursor-pointer '>Home</Link>
        </li>
        <li className=' py-3 hover:bg-slate-600'>
          <Link to='home'
          spy={true} smooth={true}
          className='cursor-pointer'>Series</Link>
        </li>
        <li className=' py-3 hover:bg-slate-600'>
          <Link to='home'
          spy={true} smooth={true}
          className='cursor-pointer'>Movie</Link>
        </li>
        <li className=' py-3 hover:bg-slate-600'>
          <Link to='home'
          spy={true} smooth={true}
          className='cursor-pointer'>Kids</Link>
        </li>
      </ul>
    </div>
    
  </>
  // ${click ? 'bg-secondary' : 'bg-transparent'}

  return (
    <nav className={` w-full fixed backdrop-blur-sm z-10 bg-blue-300`} >
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
                <Link to='home'
                spy={true} smooth={true}
                className='cursor-pointer'>Home</Link>
              </li>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
                <Link to='home'
                spy={true} smooth={true}
                className='cursor-pointer'>Series</Link>
              </li>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
                <Link to='home'
                spy={true} smooth={true}
                className='cursor-pointer'>Movie</Link>
              </li>
              <li className='px-4 font-lato font-bold cursor-pointer hover:text-white/25 hover:scale-90 transition duration-300'>
                <Link to='home'
                spy={true} smooth={true}
                className='cursor-pointer'>Kids</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center relative' ref={searchRef}>
            <HiMagnifyingGlass className=' mr-2 text-2xl cursor-pointer' onClick={toggleSearch}/>
            <input type="text" placeholder='Search...' id="seacrh" className={`px-3 py-1 rounded-3xl bg-slate-500/30  text-white outline-none placeholder:text-white/70 transition ease-out  ${isSearchVisible ? '' : 'hidden'}`}></input>
            <img src='https://source.unsplash.com/150x150?face' className='w-8 h-8 rounded-md ml-3'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
