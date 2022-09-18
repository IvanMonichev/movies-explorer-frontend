import React from 'react';
import { Link } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';

function NotFound() {
  return (
    <>
      <HeadMain titleName="Страница не найдена" />
      <main className="not-found">
        <div className="not-found_wrapper">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">Страница не найдена</p>
          <Link to="/" className="navigation-link not-found__link">Назад</Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
