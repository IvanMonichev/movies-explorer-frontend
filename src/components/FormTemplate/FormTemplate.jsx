import React from 'react';
import { Link } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';
import logo from '../../images/logo.svg';

function FormTemplate({
  titleHead, title, children, buttonText,
}) {
  return (
    <>
      <HeadMain
        titleName={`Movies Express | ${titleHead}`}
      />
      <main>
        <section className="form">
          <div className="form__wrapper">
            <Link to="/" className="logo"><img src={logo} alt="Логотип" /></Link>
            <h1 className="form__title">{ title }</h1>
            <form className="form-body register__form">
              {children}
              <button type="submit" className="form-body__button">{buttonText}</button>
              <p className="form__text">
                Уже зарегистрированы?
                <Link to="/sign-in" className="form__link">Войти</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default FormTemplate;
