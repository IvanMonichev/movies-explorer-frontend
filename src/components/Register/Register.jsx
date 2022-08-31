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
          <Link to="/" className="logo"><img src={logo} alt="Логотип" /></Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="form-register register__form">
            <label htmlFor="name" className="form-register__label">
              Имя
              <input type="text" className="register__input-name" name="name" id="name" required="" />
            </label>
            <label htmlFor="email" className="form-register__label">
              E-mail
              <input type="password" className="form-register__input-email" name="email" id="email" required="" />
            </label>
            <label htmlFor="name" className="form-register__label">
              Пароль
              <input type="password" className="form-register__input-password" name="password" id="password" required="" />
            </label>
            <button type="submit" className="form-register__button">Зарегистрироваться</button>
          </form>
          <p className="register__text">
            Уже зарегистрированы?
            <Link to="/sign-in" className="register__link">Войти</Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Register;
