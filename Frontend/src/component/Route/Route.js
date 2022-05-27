import React from 'react';
import Review from '../../Review/Review';
import Fitur from '../Fitur/Fitur';
import Header from '../Head/Header';
import Home from '../Home/Home';
import Portfolio from '../Portofolio/Portofolio';

const Route = () => {
  return (
    <>
      <Header />
      <Home />
      <Fitur />
      <Portfolio/>
      <Review />
    </>
    
  )
}

export default Route;
