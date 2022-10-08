import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import favIconLogo from '../../images/favicon-logo.ico';

function HeadMain({ titleName }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
      <meta name="description" content="Веб-приложение для поиска и сохранения фильмов. Учебный проект студента факультета Веб-разработки." />
      <meta name="author" content="Ivan Monichev" />
      <link rel="icon" type="image/x-icon" href={favIconLogo} />
      <title>{titleName}</title>
    </Helmet>
  );
}

HeadMain.propTypes = {
  titleName: PropTypes.string.isRequired,
};

export default HeadMain;
