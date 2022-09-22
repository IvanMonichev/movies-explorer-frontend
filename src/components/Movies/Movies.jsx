import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';
import moviesApi from '../../utils/MoviesApi';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Movies() {
  const [loading, setLoading] = useState(true);
  const [noSearch, setNoSearch] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [foundMovie, setFoundMovie] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const [limit, setLimit] = useState(0);
  const [shortChecked, setShortChecked] = useState(false);

  const { width } = useWindowDimensions();

  // Адаптация количества карточек в зависимости от ширины экрана
  useEffect(() => {
    if (width <= 800 && width > 400) {
      setLimit(3);
    } else if (width <= 400) {
      setLimit(5);
    } else {
      setLimit(7);
    }
  }, [width]);

  // Пагинация
  const addMovies = () => setLimit(limit * 2);

  const checkedForFilter = () => {
    if (shortChecked) {
      const shortMovies = movies.filter((movie) => movie.duration <= 40);
      setFilteredMovies(shortMovies);
      return;
    }
    setFilteredMovies(movies);
  };
  console.log(shortChecked);
  useEffect(() => {
    if (localStorage.getItem('savedChecked') === 'true') {
      setShortChecked(true);
      return;
    }
    checkedForFilter();
  }, []);

  const handleShortFilter = (event) => {
    setShortChecked(event.target.checked);
    console.log(event.target.checked);
    localStorage.setItem('savedChecked', event.target.checked);
    checkedForFilter();
  };

  // Поиск фильмов
  const handleSearchSubmit = (query) => {
    setNoSearch(false);

    const sortedMovie = filteredMovies.filter((item) => {
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

    localStorage.setItem('savedMovies', JSON.stringify(sortedMovie));
    setNotFound(false);
    setFoundMovie(sortedMovie);
  };

  useEffect(() => {
    setLoading(true);
    moviesApi.getMovies()
      .then((response) => {
        setMovies(response);
        setFilteredMovies(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMovies) {
      setNoSearch(false);
      setFoundMovie(savedMovies);
    }
  }, []);

  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm
        onSearchSubmit={handleSearchSubmit}
        onHandleCheck={handleShortFilter}
        shortChecked={shortChecked}
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
