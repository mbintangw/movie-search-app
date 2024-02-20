import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="551d04de72eb98704ee7b6173ee40394";
const movieByGenreBaseURL ="https://api.themoviedb.org/3/discover/movie?api_key=551d04de72eb98704ee7b6173ee40394"
const seriesByGenreBaseURL ="https://api.themoviedb.org/3/discover/tv?api_key=551d04de72eb98704ee7b6173ee40394"


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
