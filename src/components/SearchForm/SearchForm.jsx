import React, { useState } from 'react';

function SearchForm({ onSearchSubmit, onHandleCheck, shortChecked }) {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(search);
  };

  return (
    <section className="search">
      <div className="search__wrapper">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            className="search__input"
            placeholder="Фильм"
            required
            onChange={handleChangeSearch}
          />
          <button className="search__button" type="submit">Найти</button>
        </form>
        <label htmlFor="filter-checkbox" className="filter">
          <input
            name="filter-checkbox"
            type="checkbox"
            id="filter-checkbox"
            className="filter__checkbox"
            onChange={onHandleCheck}
            checked={shortChecked || false}
          />
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
