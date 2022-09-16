import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function Movies() {
  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default Movies;
