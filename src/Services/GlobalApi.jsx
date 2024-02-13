import axios from "axios";

const movieBaseUrl= "https://api.themoviedb.org/3";
const api_key = "ca241bbba4016e2dba27c8e4dc931aef";
const getTrandingVideos = axios.get(this.movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export default {
  getTrandingVideos
}