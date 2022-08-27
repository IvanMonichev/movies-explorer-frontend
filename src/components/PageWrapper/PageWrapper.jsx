import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeadMain from '../HeadMain/HeadMain';

function PageWrapper() {
  return (
    <>
      <HeadMain />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageWrapper;
