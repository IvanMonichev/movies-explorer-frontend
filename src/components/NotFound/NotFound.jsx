import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <HeadMain titleName="Страница не найдена" />
      <main className="not-found">
        <div className="not-found_wrapper">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">Страница не найдена</p>
          <button type="button" onClick={goBack} to="/" className="navigation-link not-found__link">Назад</button>
        </div>
      </main>
    </>
  );
}

export default NotFound;
