import React from 'react';

function Main() {
  return (
    <main className="main">
      <section className="promo">
        <div className="promo__wrapper">
          <div className="promo__content">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a href="/" className="promo__button">Узнать больше</a>
          </div>
          <img className="promo__image" src="../../images/web-globe.svg" alt="Планета Земля из надписей «Web»" />
        </div>
      </section>
    </main>
  );
}

export default Main;
