import React from 'react';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} alt="Логотип" />
        <nav className="menu header__menu-start">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/" className="menu__button">Регистрация</a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__button menu__button_primary">Войти</a>
            </li>
          </ul>
        </nav>

        {/*
        <nav className="menu header__menu-navigation">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/" className="menu__button menu__button_navigation">Фильмы</a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__button menu__button_navigation menu__button_inactive">
                Сохранённые фильмы
              </a>
            </li>
          </ul>
        </nav>
        <div className="profile header__profile">
          <p className="profile__name">Аккаунт</p>
          <div className="profile__avatar" />
        </div>
        <div className="header__burger burger">
          <span className="burger__middle-line burger__middle-line_is-active" />
        </div>
        */}
      </div>
    </header>
  );
}

export default Header;
