import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Tech/Tech';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Tech />
      <AboutMe />
    </main>
  );
}

export default Main;
