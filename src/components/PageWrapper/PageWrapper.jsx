import React from 'react';
import { Outlet } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PageWrapper({ loggedIn }) {
  return (
    <>
      <HeadMain
        titleName="Movies Express | О проекте"
      />
      <Header
        loggedIn={loggedIn}
      />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
