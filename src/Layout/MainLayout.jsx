import React from 'react'
import Navbar from '../Components/Navbar'

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default MainLayout
