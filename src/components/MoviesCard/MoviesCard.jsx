import React from 'react';
import validator from 'validator';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  name,
  duration,
  images,
  trailerLink,
  movie,
  onSave,
  onDelete,
  savedMovies,
}) {
  const handleSaved = () => {
    onSave(movie);
  };

  const handleDelete = () => {
    onDelete(movie);
  };

  const convertDuration = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = duration % 60;
    return hours !== 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  };

  const checkedLike = (movies) => movies.some((item) => item.movieId === movie.id);

  return (
    <li className="movies-list__item">
      <div className="movies-content__content">
        <h2 className="movies-list__name"><a className="movies-list__link" href={validator.isURL(trailerLink) ? trailerLink : 'https://www.youtube.com/'} target="_blank" rel="noreferrer">{name}</a></h2>
        <p className="movies-list__duration">{convertDuration(duration)}</p>
        {
          useLocation().pathname === '/movies'
          && (
          <button
            onClick={handleSaved}
            type="button"
            className={`movies-list__save ${checkedLike(savedMovies) ? 'movies-list__save_active' : ''}`}
            aria-label="save-film"
          />
          )
        }
        {useLocation().pathname === '/saved-movies'
          && (
          <button
            onClick={handleDelete}
            type="button"
            className="movies-list__delete"
            aria-label="save-film"
          />
          )}
      </div>
      <div className="movies__image-container">
        <img className="movies__image" src={images} alt={`Изображение фильма – ${name}`} />
      </div>
    </li>
  );
}

export default MoviesCard;
