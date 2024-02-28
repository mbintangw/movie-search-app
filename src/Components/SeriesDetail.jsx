import React, { useEffect, useState } from 'react'
import { getDetailSeries } from '../API/GlobalApi';
import { useParams } from 'react-router-dom'


const SeriesDetail = ({id}) => {
  const [detailSeries, setDetailSeries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDetailSeries(id);
        setDetailSeries(result);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {detailSeries && (
        <div className='relative w-full h-full'>
          <div className='absolute -bottom-[1px] text-white bg-gradient-to-t from-black from-40% lg:from-50% h-full w-full px-5 lg:px-10 lg:pb-72'>
            <div className='flex items-center gap-5 absolute top-32 md:bottom-0'>
              <img src={`https://image.tmdb.org/t/p/original`+ detailSeries.poster_path} alt={detailSeries.title} className='w-36 md:w-60 rounded-md lg:rounded-xl'/>
              <div className='flex flex-col pr-6 font-lato'>
                <h1 className='text-white font-bold text-lg mb-4 md:text-3xl'>{detailSeries.title?detailSeries.title:detailSeries.name}</h1>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 w-60 md:w-80">
                  {detailSeries.genres.map(genre => (
                    <li key={genre.id} className='border border-white px-2 py-1 text-base font-bold font-lato text-black bg-white rounded-md text-center'>{genre.name}</li>
                  ))}
                </ul>
                <p className='md:text-xl'>{detailSeries.overview}</p>
              </div>
            </div>
          </div>
          <img src={`https://image.tmdb.org/t/p/original`+ detailSeries.backdrop_path} 
          />
        </div> 
      )}
    </div>
  )
}

export default SeriesDetail
