import React from 'react';
import { Outlet } from 'react-router-dom';
import HeadMain from '../HeadMain/HeadMain';
import Header from '../Header/Header';

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
    </>
  );
}

export default PageWrapper;
