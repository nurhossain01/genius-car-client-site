import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero py-12 my-12 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <img src={person} alt='person-image' className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts} alt='parts-image' className="absolute w-3/5 right-5 top-28 rounded-lg shadow-2xl" />
        </div>
        <div className='lg:w-1/2 pt-20 lg:pt-0 px-8'>
          <h1 className='text-red-500'>About Us</h1>
          <h2 className="text-5xl font-bold">
            We are qualified <br />
            & of experience <br />
            in this field
            </h2>
          <p className="py-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;