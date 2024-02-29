import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="551d04de72eb98704ee7b6173ee40394";
const movieByGenreBaseURL ="https://api.themoviedb.org/3/discover/movie?api_key=551d04de72eb98704ee7b6173ee40394"
const seriesByGenreBaseURL ="https://api.themoviedb.org/3/discover/tv?api_key=551d04de72eb98704ee7b6173ee40394"
const detailMovieBaseUrl="https://api.themoviedb.org/3/movie/"

export const getTrandingMovie = async () => {
  const movie = await axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key)
  return movie.data.results
}

export const getMovieByGenreId = async (id) => {
  const moviegenre = await axios.get(movieByGenreBaseURL + "&with_genres=" + id)
  return moviegenre.data.results
}

export const getTrandingSeries = async () => {
  const series = await axios.get(movieBaseUrl + "/trending/tv/day?api_key=" + api_key)
  return series.data.results
}

export const getSeriesByGenreId = async (id) => {
  const seriesgenre = await axios.get(seriesByGenreBaseURL + "&with_genres=" + id)
  return seriesgenre.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(movieBaseUrl+"/search/movie?"+ "query="+q+"&api_key="+api_key)
  return search.data
}

export const getDetailMovie = async (id) => {
  const detail = await axios.get(`${movieBaseUrl}/movie/${id}?api_key=${api_key}`)
  return detail.data
}

export const getDetailSeries = async (id) => {
  const detail = await axios.get(`${movieBaseUrl}/tv/${id}?api_key=${api_key}`)
  return detail.data
}

export const getDetailMedia = async (id, media_type) => {
  if (media_type === 'movie') {
    return await getDetailMovie(id);
  } else if (media_type === 'tv') {
    return await getDetailSeries(id);
  } else {
    throw new Error('Invalid media type');
  }
}

export const getCastsMovie = async (id) => {
  const cast = await axios.get(`${movieBaseUrl}/movie/${id}/credits?api_key=${api_key}`)
  return cast.data
}

export const getCastsSeries = async (id) => {
  const cast = await axios.get(`${movieBaseUrl}/tv/${id}/credits?api_key=${api_key}`)
  return cast.data
}

export const getCastsMedia = async (id, media_type) => {
  let cast;
  
  if (media_type === 'movie') {
    cast = await axios.get(`${movieBaseUrl}/movie/${id}/credits?api_key=${api_key}`);
  } else if (media_type === 'tv') {
    cast = await axios.get(`${movieBaseUrl}/tv/${id}/credits?api_key=${api_key}`);
  } else {
    throw new Error('Invalid media type');
  }

  return cast.data;
};