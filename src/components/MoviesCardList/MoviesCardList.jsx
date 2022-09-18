import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const isLimit = useLocation().pathname === '/movies' ? 7 : 3;

  const handleSearchSubmit = () => {
    setLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch(() => {
        console.log('Ошибка');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearchSubmit();
  }, []);

  if (loading) {
    return <Preloader />;
  }

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
