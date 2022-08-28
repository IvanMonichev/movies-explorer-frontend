import React from 'react';
import ivanMonichevAvatar from '../../images/ivan-monichev-avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__wrapper">
        <h2 className="main__title">Студент</h2>
        <div className="about-me__content content-student">
          <div className="content-student__text">
            <p className="content-student__name">Иван</p>
            <p className="content-student__description">Фронтенд-разработчик, 25 лет</p>
            <p className="content-student__text">
              Я проживаю в солнечном городе-курорте&nbsp;
              <a className="text-link" href="https://yandex.ru/maps/geo/pyatigorsk/53119063/?ll=43.045867%2C44.052268&z=13.18">
                Пятигорск
              </a>
              , закончил направление «Прикладная информатика в менеджменте»
              в Пятигорском государственном университете. У меня есть жена,
              которая всегда меня поддерживает. Я увлекаюсь фотоискусством и
              сильно люблю кофе, особенно с вишнёвым пирогом.
              С программированием познакомился 3 года назад,
              но серьёзно начал этим заниматься только в текущем году,
              когда начал своё обучение в Яндекс Практикум. Сейчас я работаю
              контент-менеджером в диджитал-агентстве&nbsp;
              <a className="text-link" href="https://webelement.ru/" rel="nofollow">
                Webelement
              </a>
              , мечтаю о хорошей карьере в сфере IT.
            </p>
            <a className="content-student__link link" href="https://github.com/IvanMonichev">Github</a>
          </div>
          <img className="content-student__avatar" src={ivanMonichevAvatar} alt="Аватр студента Яндекс Практикума Ивана Моничева" />
        </div>
        <div className="about-me__portfolio portfolio">
          <h2 className="portfolio__title">Портфолио</h2>
          <ul className="portfolio__list">
            <li className="portfolio__item"><a href="https://ivanmonichev.github.io/how-to-learn/" className="portfolio__link">Статичный сайт</a></li>
            <li className="portfolio__item"><a href="https://ivanmonichev.github.io/russian-travel/" className="portfolio__link">Адаптивный сайт</a></li>
            <li className="portfolio__item"><a href="https://vyacheslav321.github.io/Lubimovka/" className="portfolio__link">Сайт выполнненый в команде</a></li>
            <li className="portfolio__item"><a href="https://monichev.mesto.nomoredomains.sbs/" className="portfolio__link">Одностраничное приложение</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
