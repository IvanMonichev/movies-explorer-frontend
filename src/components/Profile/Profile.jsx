import React from 'react';
import HeadMain from '../HeadMain/HeadMain';

function Profile() {
  return (
    <>
      <HeadMain titleName="Мой профиль" />

      <section className="form form-profile">
        <div className="form__wrapper form-profile__wrapper">
          <h1 className="form__title form-profile__title">Привет, Виталий!</h1>
          <form className="form-body register__form">
            <label htmlFor="name" className="form-body__label form-profile__label">
              Имя
              <input
                type="text"
                className="form-body__input form-profile__input form-profile__input_separate"
                name="name"
                id="name"
                required
              />
              <span className="form-body__error">Что-то пошло не так...</span>
            </label>
            <label htmlFor="email" className="form-body__label form-profile__label">
              E-mail
              <input
                type="email"
                className="form-body__input form-profile__input"
                name="email"
                id="email"
                required
              />
              <span className="form-body__error">Что-то пошло не так...</span>
            </label>
            <button type="button" className="form-profile__text form-profile__text_separator">Редактировать</button>
            <button type="button" className="form-profile__text form-profile__text_important">Выйти из аккаунта</button>
            <span className="form-body__error form-profile__error">При обновлении профиля произошла ошибка.</span>
            <button type="submit" className="form-body__button form-body__button_inactive form-body__button_disabled">Сохранить</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
