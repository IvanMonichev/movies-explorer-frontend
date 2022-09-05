import React from 'react';

function Header() {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__body">
          <p className="footer__year">
            {`© ${date.getFullYear()} Ivan Monichev`}
          </p>
          <nav className="menu footer-menu">
            <ul className="menu__list footer-menu__list">
              <li className="footer-menu__item">
                <a href="https://practicum.yandex.ru/" className="footer-menu__link link">Яндекс.Практикум</a>
              </li>
              <li className="menu__item">
                <a rel="noreferrer" target="_blank" href="https://github.com/IvanMonichev" className="footer-menu__link link">Github</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Header;
