import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import loremData from '../../utils/lorem-data.json';

function MoviesCardList() {
  const isLimit = 7;
  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          {loremData.slice(isLimit - 7, isLimit).map(({
            id, name, duration, images,
          }) => (
            <MoviesCard
              key={id}
              name={name}
              duration={duration}
              images={images}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
