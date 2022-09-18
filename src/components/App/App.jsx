import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Main from '../Main/main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageWrapper from '../PageWrapper/PageWrapper';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/preloader" element={<Preloader />} />
    </Routes>
  );
}

export default App;
