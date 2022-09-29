import React from 'react';
import { useLocation } from 'react-router-dom';
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
  onDelete,
  savedMovies,
}) {
  if (loading) {
    return <Preloader />;
  }

  if (notFound) {
    console.log('work');
    return <InfoTooltip errorText={errorText} isError={isError} />;
  }

  const handleImages = (movie) => {
    if (useLocation().pathname === '/movies') {
      return `https://api.nomoreparties.co${movie.image.url}`;
    }
    return movie.image;
  };

  const handleId = (movie) => {
    if (useLocation().pathname === '/movies') {
      return movie.id;
    }
    return movie._id;
  };

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          {movies.slice(0, limit).map((movie) => (
            <MoviesCard
              key={handleId(movie)}
              name={movie.nameRU}
              duration={movie.duration}
              images={handleImages(movie)}
              trailerLink={movie.trailerLink}
              movie={movie}
              onSave={onSave}
              onDelete={onDelete}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
        {limit < movies.length && <button onClick={onAddFilms} type="button" className="movies__button">Ещё</button>}
      </div>
    </section>
  );
}

export default MoviesCardList;
