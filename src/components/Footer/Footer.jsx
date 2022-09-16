import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FooterLayout from '../FooterLayout/FooterLayout';

function Footer() {
  return (
    <Routes>
      <Route path="/" element={<FooterLayout />} />
      <Route path="/movies" element={<FooterLayout />} />
      <Route path="/saved-movies" element={<FooterLayout />} />
    </Routes>
  );
}

export default Footer;
