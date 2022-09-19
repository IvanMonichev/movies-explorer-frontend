import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const [loading, setLoading] = useState(true);
  const [noSearch, setNoSearch] = useState(true);
  const [movies, setMovies] = useState([]);
  const [foundMovie, setFoundMovie] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const isLimit = useLocation().pathname === '/movies' ? 7 : 3;

  useEffect(() => {
    setNoSearch(true);
    setMovies([]);
    setLoading(true);
  }, []);

  // Фильтр фильмов по поиску
  const handleSearchSubmit = (query) => {
    setNoSearch(false);
    const sortedMovie = movies.filter((item) => {
      const value = query.toLowerCase().trim();
      const movieRu = item.nameRU.toLowerCase().trim();
      const movieEn = item.nameEN.toLowerCase().trim();
      return (movieRu.includes(value) || movieEn.includes(value)) && item;
    });

    console.log(sortedMovie);
    if (sortedMovie.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
      return;
    }
    setNotFound(false);
    setFoundMovie(sortedMovie);
  };

  // Рендеринг фильмов
  const renderFilms = (value) => {
    setLoading(true);
    moviesApi.getMovies()
      .then((response) => {
        setMovies(response);
        handleSearchSubmit(value);
        console.log(response);
      })
      .catch((error) => {
        setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm
        onSearchSubmit={renderFilms}
      />
      {!noSearch && (
        <MoviesCardList
          movies={foundMovie}
          loading={loading}
          isLimit={isLimit}
          notFound={notFound}
          errorText={errorText}
        />
      )}
    </>
  );
}

export default Movies;
