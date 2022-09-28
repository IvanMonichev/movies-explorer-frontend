import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies({ savedMovies, onDelete }) {
  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        onDelete={onDelete}
      />
    </>
  );
}

export default SavedMovies;
