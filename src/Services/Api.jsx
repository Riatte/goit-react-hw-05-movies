//6a7dd35a324e76db8ea2fe5f3d280867

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '948e549260c255039d2eaf2f177abd8e',
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const URLSearchParams = {
  trending: 'trending/all/day',
  search: 'search/movie',
  movie: 'movie/',
};
export const getTrendingMovies = async () => {
  const response = await axios.get(URLSearchParams.trending);
  return response.data.results;
};

export const getSearchingMovies = async searchFilm => {
  const options = {
    params: { query: searchFilm },
  };
  const response = await axios.get(URLSearchParams.search, options);
  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(URLSearchParams.movie + id);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(URLSearchParams.movie + id + '/reviews');
  return response.data.results;
};

export const getMovieCast = async id => {
  const response = await axios.get(URLSearchParams.movie + id + '/credits');
  return response.data.cast;
};
