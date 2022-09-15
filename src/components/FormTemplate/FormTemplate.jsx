import React from 'react';
import { Link } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';
import logo from '../../images/logo.svg';

function FormTemplate({
  titleHead, title, children, buttonText, formText, link, linkText,
}) {
  return (
    <>
      <HeadMain
        titleName={`Movies Express | ${titleHead}`}
      />
      <main>
        <section className="form">
          <div className="form__wrapper">
            <Link to="/" className="logo logo_template"><img src={logo} alt="Логотип" /></Link>
            <h1 className="form__title">{ title }</h1>
            <form className="form-body register__form">
              {children}
              <button type="submit" className="form-body__button">{buttonText}</button>
              <p className="form__text">
                {formText}
                <Link to={link} className="navigation-link form__link">{linkText}</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default FormTemplate;
