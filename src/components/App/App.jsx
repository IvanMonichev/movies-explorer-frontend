import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// Components
import Main from '../Main/main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageWrapper from '../PageWrapper/PageWrapper';
import NotFound from '../NotFound/NotFound';
import PrivateRoutes from '../../utils/PrivateRoutes';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [noSearch, setNoSearch] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [searchSavedResult, setSearchSavedResult] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const [limit, setLimit] = useState(0);
  const [shortChecked, setShortChecked] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue'));
  }, []);

  const handleLoginSubmit = ({ email, password }) => {
    mainApi.loginUser(email, password)
      .then(() => {
        setLoggedIn(true);
        setSubmitError('');
      })
      .catch((error) => {
        console.log(error.status);
        if (error.status === 401 || 404) {
          setSubmitError('Вы ввели неправильный логин или пароль.');
        } else {
          setSubmitError('На сервере произошла ошибка.');
        }
      });
  };

  const handleLogout = () => {
    mainApi.logoutUser();
    setLoggedIn(false);
    setCurrentUser([]);
    setSearchResult([]);
    setSearchValue('');
    setSavedMovies([]);
    setFoundSavedMovies([]);
    setSearchSavedResult([]);
  };

  // Получение информации о пользователе, проверка доступа.
  useEffect(() => {
    mainApi.getUserInfo()
      .then((data) => {
        setLoggedIn(true);
        navigate('/movies');
        setCurrentUser(data);
        console.log(data);
      })
      .catch((error) => {
        if (error === 400) {
          console.log('400 - токен не передан или передан не в том формате');
        } else if (error === 401) {
          console.log('401 - переданный токен некорректен');
        } else {
          console.log(`${error.status} – ${error.statusText}`);
        }
      });
  }, [loggedIn]);

  const getShortMovies = (movies) => movies.filter((movie) => movie.duration <= 40);

  // Установка чекбокса при загрузке страницы
  useEffect(() => {
    if (localStorage.getItem('savedChecked') === 'true') {
      setShortChecked(true);
    } else {
      setShortChecked(false);
    }
  }, []);

  // Отрисовка отрицательного результата при поиске фильмов
  useEffect(() => {
    if (searchResult.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
    }
  }, [searchResult]);

  useEffect(() => {
    if (setSearchSavedResult.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
    }
  }, [searchSavedResult]);

  useEffect(() => {
    setNotFound(false);
  }, [navigate]);

  // Повторный рендеринг
  useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies) {
      setNotFound(false);
      setNoSearch(false);
      if (shortChecked) {
        setSearchResult(getShortMovies(foundMovies));
      } else {
        setSearchResult(foundMovies);
      }
    }
  }, [shortChecked]);

  const handleSavedShortFilter = () => {
    if (!shortChecked) {
      setSearchSavedResult(getShortMovies(searchSavedResult));
    } else if (foundSavedMovies.length === 0) {
      setSearchSavedResult(savedMovies);
    } else {
      setSearchSavedResult(foundSavedMovies);
    }
  };

  // Установка фильтра
  const handleShortFilter = () => {
    setShortChecked(!shortChecked);
    localStorage.setItem('savedChecked', !shortChecked);
    handleSavedShortFilter();
  };

  // Проверка списка фильма по чекбоксу
  const checkShortFilter = (movies) => {
    console.log(shortChecked);
    if (shortChecked) {
      return getShortMovies(movies);
    }
    return movies;
  };

  // Получение списка фильма по запросу поиска
  const getFoundMovies = (preparedFilms, query) => preparedFilms.filter((item) => {
    const value = query.toLowerCase().trim();
    const movieRu = item.nameRU.toLowerCase().trim();
    const movieEn = item.nameEN.toLowerCase().trim();
    return (movieRu.includes(value) || movieEn.includes(value)) && item;
  });

  // Сохранение отфильтрованного списка фильмов
  const handleSortedMovies = (movies, query) => {
    const foundMovies = getFoundMovies(movies, query);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
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

  const handleSavedSearchSubmit = (query) => {
    setNotFound(false);
    const foundSavedMovies = getFoundMovies(savedMovies, query);
    const checkedSavedMovies = checkShortFilter(foundSavedMovies);
    setFoundSavedMovies(foundSavedMovies);
    setSearchSavedResult(checkedSavedMovies);
  };

  // Удаление фильма из списка сохранённых
  const handleDeleteMovie = (dataMovie) => {
    mainApi.deleteMovie(dataMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item.movieId !== dataMovie.movieId));
        setSearchSavedResult(searchSavedResult
          .filter((item) => item.movieId !== dataMovie.movieId));
      })
      .catch((error) => console.log(error));
  };

  // Добавить фильм в список сохранённые или удалить уже сохранённый
  const handleSaveMovie = (dataMovie) => {
    const isSaved = savedMovies.some((item) => item.movieId === dataMovie.id);
    if (isSaved) {
      const savedMovie = savedMovies.find((item) => item.movieId === dataMovie.id);
      handleDeleteMovie(savedMovie);
      return;
    }

    mainApi.createMovie(dataMovie)
      .then((response) => {
        setSavedMovies([...savedMovies, response]);
        setSearchSavedResult([...searchSavedResult, response]);
      })
      .catch((error) => console.log(error));
  };

  // Отрисовка сохранённых фильмов
  useEffect(() => {
    console.log(loggedIn);
    if (loggedIn) {
      setLoading(true);
      mainApi.getMovies()
        .then((response) => {
          console.log(response);
          setSavedMovies(response);
          setSearchSavedResult(response);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, []);

  // Пагинация
  const addMovies = () => setLimit(limit * 2);

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<PageWrapper loggedIn={loggedIn} />}>
          <Route index element={<Main />} />
          <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
            <Route
              path="/movies"
              element={(
                <Movies
                  onSearchSubmit={handleSearchSubmit}
                  onHandleCheck={handleShortFilter}
                  shortChecked={shortChecked}
                  noSearch={noSearch}
                  movies={searchResult}
                  loading={loading}
                  notFound={notFound}
                  errorText={errorText}
                  limit={limit}
                  onAddFilms={addMovies}
                  onSave={handleSaveMovie}
                  savedMovies={savedMovies}
                  onSearchValue={setSearchValue}
                  searchValue={searchValue}
                />
            )}
            />
            <Route
              path="/saved-movies"
              element={(
                <SavedMovies
                  onSearchSubmit={handleSavedSearchSubmit}
                  onHandleCheck={handleShortFilter}
                  savedMovies={searchSavedResult}
                  onDelete={handleDeleteMovie}
                  shortChecked={shortChecked}
                  notFound={notFound}
                  errorText={errorText}
                  onSearchValue={setSearchValue}
                />
              )}
            />
            <Route path="/profile" element={<Profile onCurrentUser={setCurrentUser} onLoggedIn={setLoggedIn} onLogout={handleLogout} />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<Login onLoginSubmit={handleLoginSubmit} submitError={submitError} />} />
        <Route path="/sign-up" element={<Register onLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
