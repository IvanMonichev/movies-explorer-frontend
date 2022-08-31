import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeadMain from '../HeadMain/HeadMain';

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
