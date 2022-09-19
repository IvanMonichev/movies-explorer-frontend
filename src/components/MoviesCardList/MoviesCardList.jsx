import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../infoTooltip/infoTooltip';

function MoviesCardList({
  movies,
  loading,
  isLimit,
  notFound,
}) {
  if (loading) {
    return <Preloader />;
  }

  if (notFound) {
    return <InfoTooltip errorText="Ничего не найдено" />;
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
