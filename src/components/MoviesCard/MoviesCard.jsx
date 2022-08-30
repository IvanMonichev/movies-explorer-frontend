import React from 'react';
import PropTypes from 'prop-types';

function MoviesCard({ name, duration, images }) {
  return (
    <li className="movies-list__item">
      <div className="movies-content__content">
        <h2 className="movies-list__name">{name}</h2>
        <p className="movies-list__duration">{duration}</p>
        <button type="button" className="movies-list__save" aria-label="save-film" />
        <button type="button" className="movies-list__delete" aria-label="save-film" />
      </div>
      <img className="movies__image" src={images} alt="Lorem alt" />
    </li>
  );
}

MoviesCard.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default MoviesCard;
