import React, { useEffect, useState } from 'react'
import { getDetailMedia, getCastsMedia } from '../API/GlobalApi';
import { useParams } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const Detail = () => {
  const { id, media_type } = useParams();
  const [detailMedia, setDetailMedia] = useState(null);
  const [casts, setCasts] = useState();

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 9 ,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ],
    afterChange: function(index) {
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    }
  };

  useEffect(() => {
    const fetchDataMedia = async () => {
      try {
        const result = await getDetailMedia(id, media_type); // Gunakan getDetailMedia
        setDetailMedia(result);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchDataMedia();
  }, [id, media_type]);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const result = await getCastsMedia(id, media_type); // Gunakan getCastsMedia
        setCasts(result);
      } catch (error) {
        console.error("Error Fetching Casts Data", error);
      }
    };
    fetchCasts();
  }, [id, media_type]);

  return (
    <div>
      {detailMedia && (
        <div className='text-white'>
          <div className='relative bg-gradient-to-t from-black to-white h-96 w-full z-0'>
            <img src={`https://image.tmdb.org/t/p/original`+ detailMedia.backdrop_path} className='w-full h-full object-cover absolute mix-blend-multiply'/>
          </div>
          <div className='grid  mx-6 lg:mx-14 gap-3 md:gap-10 text-white z-10'>
              <img src={`https://image.tmdb.org/t/p/original`+ detailMedia.poster_path} 
                alt={detailMedia.title} 
                className='row-span-2 lg:row-span-4 w-full  md:w-80 rounded-lg  '/>
              <h1 className='text-xl md:text-4xl font-bold lg:mt-10'>{detailMedia.title?detailMedia.title:detailMedia.name}</h1>
              <ul className='flex flex-col gap-3 lg:flex-row text-center lg:items-center md:-mt-10 lg:-mt-0 ml-2 md:w-2/3'>
                {detailMedia.genres.map(genre => (
                    <li key={genre.id} className='border bg-white text-black font-bold rounded-lg px-2 w-2/3 py-1 lg:py-2'>{genre.name}</li>
                  ))}
              </ul>
              <p className='col-span-2 lg:col-span-1 lg:col-start-2 lg:w-3/4 text-lg md:text-2xl'>{detailMedia.overview}</p>
          </div>

          <div className='mt-10'>
            <h1 className='text-2xl md:text-4xl font-bold border-b-2 w-24 mx-6 my-6'>Casts</h1>
            <Slider {...settings} >
              {casts.cast.map((cast,index) => (
                  <div key={index} className='mx-6 md:mx-10 w-48 h-72 text-black group relative cursor-pointer'>
                    <div className='h-72 w-40 md:h-72 md:w-48'>
                      <img src={`https://image.tmdb.org/t/p/original`+ cast.profile_path} 
                      alt={cast.name}
                      className='w-full h-full object-cover rounded-lg cursor-pointer'
                      />
                    </div>
                    <h1 className='text-white my-2 font-lato text-lg font-bold'>{cast.name}</h1>
                      <h2 className='text-gray-500'>{cast.character}</h2>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
