import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies() {
  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
