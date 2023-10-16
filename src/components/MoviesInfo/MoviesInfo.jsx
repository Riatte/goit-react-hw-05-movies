import css from './MoviesInfo.module.css';

import { IMAGE_BASE_URL } from 'Services/Api';

const MoviesInfo = ({ movie }) => {
  const { title, overview, genres = [], poster_path, vote_average } = movie;
  const imgUrl = poster_path
    ? IMAGE_BASE_URL + poster_path
    : 'https://img.myloview.ru/posters/play-button-icon-media-player-sign-400-172071437.jpg';
  const score = Math.floor(vote_average * 10);
  return (
    <div className={css.MoviesInfo}>
      <img src={imgUrl} alt="" className={css.MoviesInfoImg} />
      <div>
        <h1>{title}</h1>
        <p>User score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};
export default MoviesInfo;
