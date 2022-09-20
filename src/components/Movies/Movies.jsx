import React, { useEffect, useState } from 'react';
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
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLimit(7);
  }, []);

  const addMovies = () => setLimit(limit * 2);

  // Фильтр фильмов по поиску
  const handleSearchSubmit = (query) => {
    setNoSearch(false);
    const sortedMovie = movies.filter((item) => {
      const value = query.toLowerCase().trim();
      const movieRu = item.nameRU.toLowerCase().trim();
      const movieEn = item.nameEN.toLowerCase().trim();
      return (movieRu.includes(value) || movieEn.includes(value)) && item;
    });

    if (sortedMovie.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
      return;
    }
    setNotFound(false);
    setFoundMovie(sortedMovie);
  };

  useEffect(() => {
    setLoading(true);
    moviesApi.getMovies()
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm
        onSearchSubmit={handleSearchSubmit}
      />
      {!noSearch && (
        <MoviesCardList
          movies={foundMovie}
          loading={loading}
          notFound={notFound}
          errorText={errorText}
          limit={limit}
          onAddFilms={addMovies}
        />
      )}
    </>
  );
}

export default Movies;
