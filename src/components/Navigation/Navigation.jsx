import React from 'react';
import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

function Navigation() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <nav className="menu header__menu-start">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/sign-up" className="menu__button link">Регистрация</Link>
              </li>
              <li className="menu__item">
                <Link to="/sign-in" className="menu__button menu__button_primary">Войти</Link>
              </li>
            </ul>
          </nav>
        )}
      />
      <Route path="/movies" element={<AuthNavigation />} />
      <Route path="/saved-movies" element={<AuthNavigation />} />
    </Routes>
  );
}

export default Navigation;
