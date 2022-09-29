import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies(
  {
    savedMovies,
    onDelete,
    onSearchSubmit,
    shortChecked,
    onHandleCheck,
    notFound,
    errorText,
    onSearchValue,
  },
) {
  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        shortChecked={shortChecked}
        onSearchValue={onSearchValue}
        onHandleCheck={onHandleCheck}
      />
      <MoviesCardList
        movies={savedMovies}
        onDelete={onDelete}
        notFound={notFound}
        errorText={errorText}
      />
    </>
  );
}

export default SavedMovies;
