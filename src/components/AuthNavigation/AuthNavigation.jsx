import React from 'react';
import { NavLink } from 'react-router-dom';

function AuthNavigation() {
  const setActive = ({ isActive }) => {
    if (isActive) {
      return 'header__button-navigation link link_active';
    }
    return 'header__button-navigation link';
  };
  return (
    <>
      <nav className="menu header__menu-navigation">
        <ul className="menu__list header__list-navigation">
          <li className="menu__item header__item-navigation">
            <NavLink to="/movies" className={setActive}>
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item header__item-navigation">
            <NavLink to="/saved-movies" className={setActive}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="profile header__profile">
        <p className="profile__name">Аккаунт</p>
        <div className="profile__avatar" />
      </div>
      <div className="header__burger burger">
        <span className="burger__middle-line" />
      </div>
    </>
  );
}

export default AuthNavigation;
