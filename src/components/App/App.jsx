import React, { useEffect, useState } from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(true);
  const [submitError, setSubmitError] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [noSearch, setNoSearch] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [searchSavedResult, setSearchSavedResult] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const [limit, setLimit] = useState(0);
  const [shortChecked, setShortChecked] = useState(false);
  const [savedMovieCheck, setSavedMovieCheck] = useState(false);
  const [inactiveForm, setInactiveForm] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const pathName = useLocation().pathname;

  // === ПОЛЬЗОВАТЕЛЬ ===

  const handleLogout = () => {
    mainApi.logoutUser()
      .then()
      .catch((error) => console.log(error));
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser([]);
    setSearchResult([]);
    setSearchValue('');
    setShortChecked(false);
    setSavedMovies([]);
    setFoundSavedMovies([]);
    setSearchSavedResult([]);
  };

  // Получение доступа
  const getAccess = () => {
    mainApi.getUserInfo()
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((error) => {
        setLoggedIn(false);
        handleLogout();
        if (error === 400) {
          console.log('400 - токен не передан или передан не в том формате');
        } else if (error === 401) {
          console.log('401 - переданный токен некорректен');
        } else {
          console.log(`${error.status} – ${error.statusText}`);
        }
      });
  };

  useEffect(getAccess, []);

  const handleLoginSubmit = ({ email, password }) => {
    setInactiveForm(true);
    mainApi.loginUser(email, password)
      .then(() => {
        setLoggedIn(true);
        getAccess();
        setSubmitError('');
        navigate('/movies');
      })
      .catch((error) => {
        console.log(error.status);
        if (error.status === 401 || 404) {
          setSubmitError('Вы ввели неправильный логин или пароль.');
        } else {
          setSubmitError('На сервере произошла ошибка.');
        }
      })
      .finally(() => setInactiveForm(false));
  };

  const handleRegisterSubmit = ({ name, email, password }) => {
    setInactiveForm(true);
    mainApi.createUser(name, email, password)
      .then(() => {
        setSubmitError('');
        handleLoginSubmit({ email, password });
      })
      .catch((error) => {
        console.log(error.status);
        if (error.status === 409) {
          setSubmitError('Пользователь с таким email уже существует.');
          return;
        }
        setSubmitError('На сервере произошла ошибка.');
      })
      .finally(() => setInactiveForm(false));
  };

  // === ПАГИНАЦИЯ ===

  const addMovies = () => setLimit(limit * 2);

  // Адаптация количества карточек в зависимости от ширины экрана
  const getLimit = () => {
    if (width <= 800 && width > 400) {
      setLimit(3);
    } else if (width <= 400) {
      setLimit(5);
    } else {
      setLimit(7);
    }
  };

  useEffect(getLimit, [width]);

  // === ФИЛЬМЫ ===

  // Фильтрация по чекбокусу фильмов
  const getShortMovies = (movies) => movies.filter((movie) => movie.duration <= 40);

  // Установка фильтра
  const handleShortFilter = () => {
    setShortChecked(!shortChecked);
    localStorage.setItem('savedChecked', !shortChecked);
  };

  // Проверка списка фильма по чекбоксу
  const checkShortFilter = (movies) => {
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

  // Получение результата по заданным параметрам
  const handleSortedMovies = (movies, query) => {
    const foundMovies = getFoundMovies(movies, query);
    const checkedMovies = checkShortFilter(foundMovies);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    localStorage.setItem('savedChecked', shortChecked);
    setSearchResult(checkedMovies);
  };

  // Поиск фильмов
  const handleSearchSubmit = (query) => {
    localStorage.setItem('searchValue', query);
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));
    setNoSearch(false);
    getLimit();
    if (!allMovies) {
      setLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
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

  // Отрисовка отрицательного результата при поиске фильмов
  useEffect(() => {
    if (pathName === '/movies' && searchResult) {
      if (searchResult.length === 0) {
        setNotFound(true);
        setErrorText('Ничего не найдено');
      } else {
        setNotFound(false);
      }
    }
  }, [searchResult, navigate]);

  // Рендеринг после обновления.
  useEffect(() => {
    if (pathName === '/movies') {
      const searchLocalResult = JSON.parse(localStorage.getItem('searchResult'));
      setSearchResult(searchLocalResult);
      setSearchValue(localStorage.getItem('searchValue'));
      if (localStorage.getItem('savedChecked') === 'true') {
        setShortChecked(true);
      } else {
        setShortChecked(false);
      }
    }
  }, [navigate]);

  // Рендеринг фильмов после чекбоксов
  useEffect(() => {
    const foundLocalMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundLocalMovies) {
      setNotFound(false);
      setNoSearch(false);
      if (shortChecked) {
        setSearchResult(getShortMovies(foundLocalMovies));
      } else {
        setSearchResult(foundLocalMovies);
      }
    }
  }, [shortChecked]);

  // Сохранение результата в локальное хранилище
  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('searchResult', JSON.stringify(searchResult));
    }
  }, [searchResult]);

  // === СОХРАНЁННЫЕ ФИЛЬМЫ ===
  const checkShortSavedFilter = (movies) => {
    if (savedMovieCheck) {
      return getShortMovies(movies);
    }
    return movies;
  };

  const handleSavedSearchSubmit = (query) => {
    setNotFound(false);
    getLimit();
    const foundSavedMovies = getFoundMovies(savedMovies, query);
    const checkedSavedMovies = checkShortSavedFilter(foundSavedMovies);
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

  const handleSavedMovieCheck = () => {
    setSavedMovieCheck(!savedMovieCheck);
  };

  // Отрисовка сохранённых фильмов
  useEffect(() => {
    if ((pathName === '/movies') || (pathName === '/saved-movies')) {
      setLoading(true);
      setNotFound(false);
      setSavedMovieCheck(false);
      mainApi.getMovies()
        .then((response) => {
          const userSavedMovies = response.filter((item) => item.owner === currentUser._id);
          setSavedMovies(userSavedMovies);
          setSearchSavedResult(userSavedMovies);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [currentUser]);

  useEffect(() => {
    if (pathName === '/saved-movies') {
      if (searchSavedResult.length === 0) {
        setNotFound(true);
        setErrorText('Ничего не найдено');
      } else {
        setNotFound(false);
      }
    }
  }, [searchSavedResult]);

  useEffect(() => {
    if (savedMovieCheck) {
      setSearchSavedResult(getShortMovies(searchSavedResult));
    } else if (foundSavedMovies.length === 0) {
      setSearchSavedResult(savedMovies);
    } else {
      setSearchSavedResult(foundSavedMovies);
    }
  }, [savedMovieCheck]);

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
                  onHandleSavedMovieCheck={handleSavedMovieCheck}
                  savedMovies={searchSavedResult}
                  onDelete={handleDeleteMovie}
                  notFound={notFound}
                  errorText={errorText}
                />
              )}
            />
            <Route path="/profile" element={<Profile onCurrentUser={setCurrentUser} onLoggedIn={setLoggedIn} onLogout={handleLogout} inactiveForm={inactiveForm} onSetInactiveForm={setInactiveForm} />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<Login onLoginSubmit={handleLoginSubmit} submitError={submitError} inactiveForm={inactiveForm} />} />
        <Route path="/sign-up" element={<Register onRegisterSubmit={handleRegisterSubmit} submitError={submitError} inactiveForm={inactiveForm} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
