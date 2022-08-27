import React from 'react';
import { Helmet } from 'react-helmet';
import favIconLogo from '../../images/favicon-logo.ico';

function HeadMain() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Веб-приложение для поиска и сохранения фильмов. Учебный проект студента факультета Веб-разработки." />
      <meta name="author" content="Ivan Monichev" />
      <link rel="icon" type="image/x-icon" href={favIconLogo} />
      <title>Movies Express | О проекте</title>
    </Helmet>
  );
}

export default HeadMain;
