import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies({
  savedMovies, onDelete, onSearchSubmit, shortChecked, onHandleCheck, notFound,
}) {
  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        shortChecked={shortChecked}
        onHandleCheck={onHandleCheck}
      />
      <MoviesCardList
        movies={savedMovies}
        onDelete={onDelete}
        notFound={notFound}
      />
    </>
  );
}

export default SavedMovies;
