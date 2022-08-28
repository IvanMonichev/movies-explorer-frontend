import React from 'react';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__wrapper">
        <form className="search-form__form">
          <input type="text" name="search" className="search__input" placeholder="Фильм" required />
          <button className="search__button" type="submit">Найти</button>
        </form>
        <lebel htmlFor="filter-checkbox" className="filter">
          <input type="checkbox" id="filter-checkbox" className="filter__checkbox" />
          Короткометражки
        </lebel>
      </div>
    </section>
  );
}

export default SearchForm;
