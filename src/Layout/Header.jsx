import React from 'react'
import Navbar from '../Components/Navbar'

const Header = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Header
