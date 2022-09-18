import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  moviesApi.getMovies().then(console.log);

  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default Movies;
