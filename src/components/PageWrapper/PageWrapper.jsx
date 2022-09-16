import React from 'react';
import { Outlet } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PageWrapper() {
  return (
    <>
      <HeadMain
        titleName="Movies Express | О проекте"
      />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
