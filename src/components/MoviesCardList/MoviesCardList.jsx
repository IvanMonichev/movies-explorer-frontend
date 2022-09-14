import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import loremData from '../../utils/lorem-data.json';

function MoviesCardList() {
  const isLimit = useLocation().pathname === '/movies' ? 7 : 3;

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          {loremData.slice(0, isLimit).map(({
            _id, name, duration, images,
          }) => (
            <MoviesCard
              key={_id}
              name={name}
              duration={duration}
              images={images}
            />
          ))}
        </ul>
        <button type="button" className="movies__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
