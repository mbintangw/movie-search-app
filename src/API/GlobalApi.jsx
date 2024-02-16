import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="551d04de72eb98704ee7b6173ee40394";
const movieByGenreBaseURL ="https://api.themoviedb.org/3/discover/movie?api_key=551d04de72eb98704ee7b6173ee40394"
const getTrandingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId=(id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)
export default {
  getTrandingVideos,
  getMovieByGenreId
}