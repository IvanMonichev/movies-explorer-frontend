import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import HeadMain from '../HeadMain/HeadMain';

function Movies() {
  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
