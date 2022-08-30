import React from 'react';


const MoviesCard = ({ name, duration, images }) => {
  return (
    <li className="movies-list__item">
      <div className="movies-content__content">
        <h2 className="movies-list__name">{ name }</h2>
        <p className="movies-list__duration">{ duration }</p>
        <button type="button" className="movies-list__save" aria-label="save-film"/>
      </div>
      <img className="movies__image" src={ images } alt="Lorem alt"/>
    </li>
  );
}

export default MoviesCard;
