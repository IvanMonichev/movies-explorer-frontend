import React from 'react';
import { Link } from 'react-router-dom';
import FormTemplate from '../FormTemplate/FormTemplate';

function Register() {
  return (
    <FormTemplate
      titleHead="Регистрация"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
    >
      <label htmlFor="name" className="form-body__label">
        Имя
        <input type="text" className="form-body__input" name="name" id="name" required />
        <span className="form-body__error">Что-то пошло не так...</span>
      </label>
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
        Уже зарегистрированы?
        <Link to="/sign-in" className="form__link">Войти</Link>
      </p>
    </FormTemplate>
  );
}

export default Register;
