import React from 'react';
import HeadMain from '../HeadMain/HeadMain';

function Profile() {
  return (
    <section>
      <HeadMain
        titleName="Movies Express | Профиль"
      />
      <main>
        <section className="form form-profile">
          <div className="form__wrapper form-profile__wrapper">
            <h1 className="form__title form-profile__title">Привет, Виталий!</h1>
            <form className="form-body register__form">
              <label htmlFor="name" className="form-body__label form-profile__label">
                Имя
                <input type="text" className="form-body__input form-profile__input form-profile__input_separate" value="Виталий" name="name" id="name" required />
                <span className="form-body__error">Что-то пошло не так...</span>
              </label>
              <label htmlFor="email" className="form-body__label form-profile__label">
                E-mail
                <input type="email" className="form-body__input form-profile__input" value="pochta@yandex.ru" name="email" id="email" required />
                <span className="form-body__error">Что-то пошло не так...</span>
              </label>
              <button type="button" className="form-profile__text">Редактировать</button>
              <button type="button" className="form-profile__text form-profile__text_important">Выйти из аккаунта</button>
            </form>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Profile;
