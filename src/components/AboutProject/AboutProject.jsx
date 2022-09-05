import React from 'react';

function aboutProject() {
  return (
    <section id="about-project" className="about-project">
      <div className="about-project__wrapper">
        <h2 className="about-project__title main__title">О проекте</h2>
        <div className="about-project__content">
          <div className="about-project__text">
            <h2 className="process-text__title">Дипломный проект включал 5 этапов</h2>
            <p className="process-text__paragraph">
              Составление плана, работу над бэкендом,
              вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__text">
            <h2 className="process-text__title">На выполнение диплома ушло 5 недель</h2>
            <p className="process-text__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__timeline timeline">
          <div className="timeline__backend timeline__item">
            <span className="timeline__backend-time timeline__text">1 неделя</span>
            <span className="timeline__name timeline__text">Back-end</span>
          </div>
          <div className="timeline__frontend timeline__item">
            <span className="timeline__frontend-time timeline__text">4 недели</span>
            <span className="timeline__name timeline__text">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default aboutProject;
