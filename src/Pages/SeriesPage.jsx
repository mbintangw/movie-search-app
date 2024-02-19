import React from 'react'
import SeriesList from '../Components/series/SeriesList'


const SeriesPage = () => {
  
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
  return (
    <div id='SeriesPage' className=' pt-14'>
      {genreseries.map((item,index) => index<=4&&(
        <div className='p-8 px-8 md:px-16 text-white' key={index}>
          <h2 className='text-white text-xl font-bold font-lato' >{item.name}</h2>
          <SeriesList genreseriesId={item.id} key={index} />
        </div>
      ))}
    </div>
  )
}

  // const [tvList, setTvList] = useState([])
  // const elementRef = useRef()

  // useEffect(() => {
  //   getTrandingSeries()
  // })

  // const getTrandingSeries = () => {
  //   GlobalApi.getTrandingSeries.then(resp=>{
  //     console.log(resp.data.results)
  //     setTvList(resp.data.results)
  //   })
  // }
  
  // return (
  //   <div id='SeriesPage'>
  //     <div className='
  //     '>
  //       {tvList.map((item) => (
  //         <img key={item.id} 
  //         src={IMAGE_BASE_URL+item.backdrop_path} 
  //         className='
  //         w-28 
  //         md:w-52 
  //         rounded-lg 
  //         hover:border-[3px]
  //         border-grey-400 
  //         hover:scale-110 
  //         transition-all 
  //         duration-150 
  //         ease-in 
  //         cursor-pointer'/>
  //       ))}
  //     </div>
  //   </div>
  // )


export default SeriesPage
