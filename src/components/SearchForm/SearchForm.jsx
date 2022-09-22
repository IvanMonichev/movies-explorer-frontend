import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ onSearchSubmit, onHandleCheck, shortChecked }) {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const handleSearchSubmit = (data) => {
    onSearchSubmit(data.search);
  };

  return (
    <section className="search">
      <div className="search__wrapper">
        <form className="search-form__form" onSubmit={handleSubmit(handleSearchSubmit)}>
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            {...register('search', {
              required: 'Нужно ввести ключевое слово',
            })}
          />
          <span className="search__error">{errors.search && `${errors.search.message || 'Что-то пошло не так...'}`}</span>
          <button className="search__button" type="submit">Найти</button>
        </form>
        <label htmlFor="filter-checkbox" className="filter">
          <input
            name="filter-checkbox"
            type="checkbox"
            id="filter-checkbox"
            className="filter__checkbox"
            onChange={onHandleCheck}
            checked={shortChecked}
          />
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
