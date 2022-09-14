import React from 'react';

function Portfolio() {
  return (
    <div className="about-me__portfolio portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item"><a target="_blank" rel="noreferrer" href="https://ivanmonichev.github.io/how-to-learn/" className="portfolio__link">Статичный сайт</a></li>
        <li className="portfolio__item"><a target="_blank" rel="noreferrer" href="https://ivanmonichev.github.io/russian-travel/" className="portfolio__link">Адаптивный сайт</a></li>
        <li className="portfolio__item"><a target="_blank" rel="noreferrer" href="https://vyacheslav321.github.io/Lubimovka/" className="portfolio__link">Сайт выполнненый в команде</a></li>
        <li className="portfolio__item"><a target="_blank" rel="noreferrer" href="https://monichev.mesto.nomoredomains.sbs/" className="portfolio__link">Одностраничное приложение</a></li>
      </ul>
    </div>
  );
}

export default Portfolio;
