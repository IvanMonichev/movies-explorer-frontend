import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import loremData from '../../utils/lorem-data.json'

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          { loremData.map((film, key) => {
            return (
              <MoviesCard
                key={key}
                name={ film.name }
                duration={ film.duration }
                images={ film.images }
              />
            )
          }) }
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
