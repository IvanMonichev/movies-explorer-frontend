import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

function SavedMovies() {
  // const [savedMovies, setSavedMovies] = useState([]);

  return (
    <>
      <HeadMain titleName="Сохранённые фильмы" />
      <SearchForm />
      <MoviesCardList
        movies={[]}
      />
    </>
  );
}

export default SavedMovies;
