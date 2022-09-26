import React, { useState } from 'react';
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
import PrivateRoutes from '../../utils/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<Main />} />
        <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<Login onLoggedIn={setLoggedIn} />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
