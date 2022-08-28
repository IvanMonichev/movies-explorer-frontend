import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__link-logo"><img src={logo} alt="Логотип" /></Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
