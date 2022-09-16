import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies() {
  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default SavedMovies;
