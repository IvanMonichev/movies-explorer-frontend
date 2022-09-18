import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesApi from '../../utils/MoviesApi';

function MoviesCardList() {
  const [movies, setMovies] = useState([]);

  const isLimit = useLocation().pathname === '/movies' ? 7 : 3;

  const handleSearchSubmit = () => {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch(() => {
        console.log('Ошибка');
      });
  };

  handleSearchSubmit();

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          {movies.slice(0, isLimit).map((movie) => (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              images={`https://api.nomoreparties.co${movie.image.url}`}
            />
          ))}
        </ul>
        <button type="button" className="movies__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
