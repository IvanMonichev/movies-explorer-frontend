import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies(
  {
    savedMovies,
    onDelete,
    onSearchSubmit,
    onHandleSavedMovieCheck,
    notFound,
    errorText,
  },
) {
  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        onHandleSavedMovieCheck={onHandleSavedMovieCheck}
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
