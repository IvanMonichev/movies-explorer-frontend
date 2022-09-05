import React from 'react';
import { Link } from 'react-router-dom';

import FormTemplate from '../FormTemplate/FormTemplate';

function Login() {
  return (
    <FormTemplate
      titleHead="Авторизация"
      title="Рады видеть!"
      buttonText="Войти"
    >
      <label htmlFor="email" className="form-body__label">
        E-mail
        <input type="email" className="form-body__input" name="email" id="email" required />
        <span className="form-body__error">Что-то пошло не так...</span>
      </label>
      <label htmlFor="name" className="form-body__label">
        Пароль
        <input type="password" className="form-body__input" name="password" id="password" required />
        <span className="form-body__error">Что-то пошло не так...</span>
      </label>
      <p className="form__text">
        Ещё не зарегистрированы?
        <Link to="/sign-up" className="form__link">Регистрация</Link>
      </p>
    </FormTemplate>
  );
}

export default Login;
