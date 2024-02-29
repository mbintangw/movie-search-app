import React, { useEffect, useRef, useState } from 'react'
import { getTrandingMovie } from '../API/GlobalApi';
import { FaRegStar } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "30px",top: "40%" }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "30px",top: "40%" }}
      onClick={onClick}
    />
  );
}

const Banner = () => {

   const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrandingMovie().then((result) => {
      setMovieList(result)
    });
  },[]);

  return (
    <div className='md:-mt-20 '>
      <Slider {...settings}>
        {movieList.map((movie,index,id) => (
        <Link to={`/Detail/${movie.media_type}/${movie.id}`} key={index}>
          <div key={id} className='relative min-w-full h-full cursor-pointer'>
          <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className='w-full h-full object-cover '/>
          <div className='absolute -bottom-[1px] text-white bg-gradient-to-t  from-black from-20% lg:from-50% pt-20 w-full pl-16 lg:px-10 lg:pb-72 pb-10' key={index}>
            <h1 className='font-bold md:text-3xl mb-2 text-xl '>{movie.title?movie.title:movie.name}</h1>
            <p className='md:text-xl line-clamp-2 mr-32 mb-2 md:mb-3'>{movie.overview}</p>
            <div className='flex items-center gap-5  md:gap-10 absolute lg:bottom-[240px] '>
              <button className='bg-white text-black px-4 py-2 rounded '>Watch</button>
              <p className='border px-4 py-2 rounded bg-white text-black flex items-center gap-2'><FaRegStar />{movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
        </div>
        </Link>
        ))}
      </Slider>
    </div>
    
  )

}

export default Banner

