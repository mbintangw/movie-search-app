import React from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../Components/Detail';

const DetailPage = () => {
  const {id} =useParams();

  return (
    <>
      <div className='relative w-full h-full'>
        <Detail id={id}/>
      </div> 
    </>
  )
}

export default DetailPage
