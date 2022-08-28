import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={logo} alt="Логотип" />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
