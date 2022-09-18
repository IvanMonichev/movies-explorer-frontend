import React from 'react';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__wrapper">
        <form className="search-form__form">
          <input type="text" name="search" className="search__input" placeholder="Фильм" required />
          <button className="search__button" type="submit">Найти</button>
        </form>
        <span className="search__error">Что-то пошло не так...</span>
        <label htmlFor="filter-checkbox" className="filter">
          <input name="filter-checkbox" type="checkbox" id="filter-checkbox" className="filter__checkbox" />
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
