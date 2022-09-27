import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../infoTooltip/infoTooltip';

function MoviesCardList({
  movies,
  loading,
  notFound,
  isError,
  errorText,
  limit,
  onAddFilms,
  onSave,
}) {
  if (loading) {
    return <Preloader />;
  }

  if (notFound) {
    return <InfoTooltip errorText={errorText} isError={isError} />;
  }

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          {movies.slice(0, limit).map((movie) => (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              images={`https://api.nomoreparties.co${movie.image.url}`}
              trailerLink={movie.trailerLink}
              movie={movie}
              onSave={onSave}
            />
          ))}
        </ul>
        {limit < movies.length && <button onClick={onAddFilms} type="button" className="movies__button">Ещё</button>}
      </div>
    </section>
  );
}

export default MoviesCardList;
