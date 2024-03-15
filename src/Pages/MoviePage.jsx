import React, {useState} from 'react'
import MovieList from '../Components/movie/MovieList'
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";


const MoviePage = () => {
  const [visible, setVisible] = useState(3)
  const [showLess, setShowLess] = useState(false);

  const genre= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  const showMoreGenre = () => {
    setVisible((prevValue) => prevValue + 3);
    if (visible + 3 >= genre.length) {
      setShowLess(true);
    } 
  }

  const showLessGenre = () => {
    setVisible(3);
    setShowLess(false);
  };

return (
    <div key={genre}>
      {genre.slice(0,visible).map((item,index,id) =>(
          <div className='p-8 px-8 md:px-16 text-white' key={index}>
              <h2 className='text-white text-2xl font-bold font-lato' >{item.name}</h2>
              <MovieList genreId={item.id} key={id}/>
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

export default MoviePage
