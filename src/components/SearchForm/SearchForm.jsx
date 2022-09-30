import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function SearchForm(
  {
    onSearchSubmit,
    onHandleCheck,
    shortChecked,
    onSearchValue,
    searchValue,
    onHandleSavedMovieCheck,
  },
) {
  const pathName = useLocation().pathname;
  const handleSearchSubmit = (data) => {
    onSearchSubmit(data.search);
    if (pathName === '/movies') {
      onSearchValue(data.search);
    }
  };

  const onCheck = () => (pathName === '/movies' ? onHandleCheck() : onHandleSavedMovieCheck());

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
            onChange={onCheck}
            checked={shortChecked}
          />
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
