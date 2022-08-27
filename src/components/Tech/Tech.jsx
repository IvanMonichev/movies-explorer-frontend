import React from 'react';

function Tech() {
  return (
    <section className="tech">
      <div className="tech__wrapper">
        <h2 className="main__title">Технологии</h2>
        <div className="tech__content tech-content">
          <p className="tech-content__title">7 технологий</p>
          <p className="tech-content__description">
            На курсе веб-разраwботки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="tech__list">
          <li className="tech__item">HTML</li>
          <li className="tech__item">CSS</li>
          <li className="tech__item">JS</li>
          <li className="tech__item">React</li>
          <li className="tech__item">Git</li>
          <li className="tech__item">Express.js</li>
          <li className="tech__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;
