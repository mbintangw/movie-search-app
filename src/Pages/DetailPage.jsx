import React, { useEffect, useRef, useState } from 'react'
import { getDetailMovie} from '../API/GlobalApi';
import { useParams, useSearchParams } from 'react-router-dom';
import MovieDetail from '../Components/MovieDetail';
import SeriesDetail from '../Components/SeriesDetail';


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

const DetailPage = () => {
  const {id} =useParams();

  // const [detailMovie, setDetailMovie] = useState([]);

  // const id = useParams();

  // useEffect(() => {
  //   const getDetailMovie = async () => {
  //     const result = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=551d04de72eb98704ee7b6173ee40394`);
  //     const data = await result.json();

  //     setDetailMovie(data);
  //   }
  //   getDetailMovie();
  // },[]);

  // useEffect(() => {
  //   if (id) {
  //     setDetailMovie();
  //     getDetailMovie(id).then((result) => {
  //       setDetailMovie(result);
  //     })
  //   }
  // },[detail, setDetailMovie]);

  // console.log(detailMovie);

  return (
    <>
      <div className='relative w-full h-full'>
        <MovieDetail id={id}/>
        <SeriesDetail id={id}/>
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

        {/* {detailMovie.map((item,index)=>(
          <div>
            <img src={IMAGE_BASE_URL+item.backdrop_path}/>
            <h1>{item.title}</h1>
          </div>
        ))} */}
        {/* <img src={IMAGE_BASE_URL+detailMovie.backdrop_path}/>
        <h1>{detailMovie.title}</h1> */}