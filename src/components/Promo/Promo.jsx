import React from 'react';
import webGlobe from '../../images/web-globe.svg';

function Promo() {
  const handleAnchorScroll = (event) => {
    event.preventDefault();
    document.querySelector('#about-project').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a onClick={handleAnchorScroll} href="/#about-project" className="button-light promo__button">Узнать больше</a>
        </div>
        <img className="promo__image" src={webGlobe} alt="Планета Земля из надписей «Web»" />
      </div>
    </section>
  );
}

export default Promo;
