import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import Address from '../Address/Address';
import PopularProducts from '../../PopularProducts/PopularProducts';
import Teams from '../Teams/Teams';
import CoreFeatures from '../CoreFeatures/CoreFeatures';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Address></Address>
      <PopularProducts></PopularProducts>
      <Teams></Teams>
      <CoreFeatures></CoreFeatures>
    </div>
  );
};

export default Home;