import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ onSearchSubmit, onHandleCheck, shortChecked }) {
  const [searchValue, setSearchValue] = useState('');

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const handleSearchSubmit = (data) => {
    onSearchSubmit(data.search);
    setSearchValue(data.search);
    localStorage.setItem('searchValue', data.search);
  };

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue'));
  }, []);

  return (
    <section className="search">
      <div className="search__wrapper">
        <form className="search-form__form" onSubmit={handleSubmit(handleSearchSubmit)}>
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            defaultValue={searchValue}
            {...register('search', {
              required: 'Нужно ввести ключевое слово',
              maxLength: {
                value: 30,
                message: 'Максимум 30 символов',
              },
            })}
          />
          <span className="search__error">{errors.search && `${errors.search.message || 'Что-то пошло не так...'}`}</span>
          <button className={`search__button ${!isValid ? 'search__button_invalid' : ''}`} type="submit" disabled={!isValid}>Найти</button>
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
