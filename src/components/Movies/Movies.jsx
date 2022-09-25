import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';
import moviesApi from '../../utils/MoviesApi';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Movies() {
  const [loading, setLoading] = useState(true);
  const [noSearch, setNoSearch] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const [limit, setLimit] = useState(0);
  const [shortChecked, setShortChecked] = useState(false);

  const getShortMovies = (movies) => movies.filter((movie) => movie.duration <= 40);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    console.log(savedMovies);
    if (savedMovies.length !== 0) {
      setNoSearch(false);
      setSearchResult(savedMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(searchResult));
  }, [searchResult]);

  useEffect(() => {
    console.log(searchResult.length);
    if (searchResult.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
    }
  }, [searchResult]);

  useEffect(() => {
    setNotFound(false);
    if (shortChecked) {
      setSearchResult(getShortMovies(foundMovies));
    } else {
      setSearchResult(foundMovies);
    }
  }, [shortChecked]);

  const handleShortFilter = () => {
    setShortChecked(!shortChecked);
    localStorage.setItem('savedChecked', shortChecked);
  };

  const checkShortFilter = (movies) => {
    if (shortChecked) {
      return getShortMovies(movies);
    }
    return movies;
  };

  const getFoundMovies = (preparedFilms, query) => preparedFilms.filter((item) => {
    const value = query.toLowerCase().trim();
    const movieRu = item.nameRU.toLowerCase().trim();
    const movieEn = item.nameEN.toLowerCase().trim();
    return (movieRu.includes(value) || movieEn.includes(value)) && item;
  });

  const handleSortedMovies = (movies, query) => {
    const foundMovies = getFoundMovies(movies, query);
    setFoundMovies(foundMovies);
    const checkedMovies = checkShortFilter(foundMovies);
    setSearchResult(checkedMovies);
  };

  // Поиск фильмов
  const handleSearchSubmit = (query) => {
    setNoSearch(false);
    setNotFound(false);
    if (allMovies.length === 0) {
      setLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setAllMovies(movies);
          handleSortedMovies(movies, query);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => setLoading(false));
    } else {
      handleSortedMovies(allMovies, query);
    }
  };

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

  /*  useEffect(() => {
      if (localStorage.getItem('savedChecked') === 'true') {
        setShortChecked(true);
      } else {
        setShortChecked(false);
      }
    }, []);*/

  return (
    <>
      <HeadMain titleName="Фильмы" />
      <SearchForm
        onSearchSubmit={handleSearchSubmit}
        onHandleCheck={handleShortFilter}
      />
      {!noSearch && (
        <MoviesCardList
          movies={searchResult}
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
