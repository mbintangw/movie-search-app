import React, {useState} from 'react'
import SeriesList from '../Components/series/SeriesList'
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const SeriesPage = () => {
  const [visible, setVisible] = useState(3)
  const [showLess, setShowLess] = useState(false);

  const genreseries = [
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Komödie"
    },
    {
      "id": 80,
      "name": "Krimi"
    },
    {
      "id": 99,
      "name": "Dokumentarfilm"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familie"
    },
    {
      "id": 10762,
      "name": "Kids"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10763,
      "name": "News"
    },
    {
      "id": 10764,
      "name": "Reality"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10766,
      "name": "Soap"
    },
    {
      "id": 10767,
      "name": "Talk"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  const showMoreGenre = () => {
    setVisible((prevValue) => prevValue + 3);
    if (visible + 3 >= genreseries.length) {
      setShowLess(true);
    } 
  }

  const showLessGenre = () => {
    setVisible(3);
    setShowLess(false);
  };


  return (
    <div id='SeriesPage'>
      {genreseries.slice(0,visible).map((item,index,id) => (
        <div className='p-8 px-8 md:px-16 text-white' key={index}>
          <h2 className='text-white text-xl font-bold font-lato' >{item.name}</h2>
          <SeriesList genreseriesId={item.id} key={id} />
        </div>
      ))}
      {showLess ? (
          <button
            onClick={showLessGenre}
            className='text-white text-xl md:text-2xl font-bold font-lato flex justify-center items-center mx-auto gap-5 mb-5 hover:scale-105 transition-all ease-in-out duration-300'>
            Show Less <MdKeyboardDoubleArrowUp />
          </button>
        ) : (
          <button
            onClick={showMoreGenre}
            className='text-white text-xl md:text-2xl font-bold font-lato flex justify-center items-center mx-auto gap-5 mb-5 hover:scale-105 transition-all ease-in-out duration-300'>
            Show More <MdKeyboardDoubleArrowDown />
          </button>
        )}
    </div>
  )
}

export default SeriesPage
