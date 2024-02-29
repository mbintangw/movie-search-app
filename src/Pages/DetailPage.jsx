import React, { useEffect, useRef, useState } from 'react'
import { getDetailMovie} from '../API/GlobalApi';
import { useParams, useSearchParams } from 'react-router-dom';
import Detail from '../Components/Detail';



const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

const DetailPage = () => {
  const {id} =useParams();

  return (
    <>
      <div className='relative w-full h-full'>
        <Detail id={id}/>
        <div>
        </div>
      </div> 
      <div className='bg-blue-900 mt-20'>
        <h1>Trailer</h1>
      </div>
      <div className='bg-yellow-900'>
        <h1>Series</h1>
      </div>
    </>
  )
}

export default DetailPage
