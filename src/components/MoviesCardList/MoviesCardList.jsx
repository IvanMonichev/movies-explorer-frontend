import React from 'react';

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies-list">
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/700/400" alt="Lorem alt" />
          </li>
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/600/200" alt="Lorem alt" />
          </li>
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/1200/700" alt="Lorem alt" />
          </li>
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/400/700" alt="Lorem alt" />
          </li>
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/200/100" alt="Lorem alt" />
          </li>
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/600/600" alt="Lorem alt" />
          </li>
          <li className="movies-list__item">
            <div className="movies-content__content">
              <h2 className="movies-list__name">Lorem ipsum dolor.</h2>
              <p className="movies-list__duration">1ч 42м</p>
              <button type="button" className="movies-list__save" aria-label="save-film" />
            </div>
            <img className="movies__image" src="https://picsum.photos/600/600" alt="Lorem alt" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
