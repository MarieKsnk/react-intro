import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import PlatsAPI from '../pages/PlatsAPI';

const Router = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nodeapi" element={<PlatsAPI />} />
    </Routes>
    </>
  );
};

export default Router;
