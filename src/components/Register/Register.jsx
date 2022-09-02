import React from 'react';
import { Link } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <>
      <HeadMain
        titleName="Movies Express | Регистрация"
      />
      <main>
        <section className="register">
          <div className="register__wrapper">
            <Link to="/" className="logo"><img src={logo} alt="Логотип" /></Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="form-register register__form">
              <label htmlFor="name" className="form-register__label">
                Имя
                <input type="text" className="form-register__input" name="name" id="name" required />
                <span className="form-register__error">Что-то пошло не так...</span>
              </label>
              <label htmlFor="email" className="form-register__label">
                E-mail
                <input type="password" className="form-register__input" name="email" id="email" required />
                <span className="form-register__error">Что-то пошло не так...</span>
              </label>
              <label htmlFor="name" className="form-register__label">
                Пароль
                <input type="password" className="form-register__input" name="password" id="password" required />
                <span className="form-register__error">Что-то пошло не так...</span>
              </label>
              <button type="submit" className="form-register__button">Зарегистрироваться</button>
              <p className="register__text">
                Уже зарегистрированы?
                <Link to="/sign-in" className="register__link">Войти</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
