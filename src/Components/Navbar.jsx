import React from 'react'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus} from 'react-icons/hi2'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useState } from 'react'

const Navbar = () => {
  // const [click, setClick] = useState(false)
  // const handleclick = () => setClick(!click)

  // const content = 
  // <>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link><HiHome/>Home</Link>
  //       </li>
  //       <li>
  //         <Link><HiMagnifyingGlass/>Seacrh</Link>
  //       </li>
  //       <li>
  //         <Link><HiPlus/>WatchList</Link>
  //       </li>
  //       <li>
  //         <Link><HiStar/>Originals</Link>
  //       </li>
  //       <li>
  //         <Link><HiPlayCircle/>Movies</Link>
  //       </li>
  //       <li>
  //         <Link><HiTv/>Series</Link>
  //       </li>
  //     </ul>
  //   </div>
  // </>
  // ${click ? 'bg-secondary' : 'bg-transparent'}

  return (
    <nav className={` w-full fixed backdrop-blur-sm z-10 bg-blue-300`} >
      <div className='h-10vh flex items-center justify-between px-5 py-4 text-white'>
        <div className='flex items-center'>
          <h1 className='font-protest text-4xl'>MoxVie</h1>
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
        <div>
          <div className='flex items-center justify-center relative'>
            <HiMagnifyingGlass className='mr-2 text-xl'/>
            <input type="text" placeholder='Search...' id="seacrh" className='px-3 py-1 rounded-3xl bg-slate-500/30  text-white'></input>
            <img src='https://source.unsplash.com/150x150?face' className='w-8 h-8 rounded-md ml-3'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
