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
      </div> 
    </>
  )
}

export default DetailPage
