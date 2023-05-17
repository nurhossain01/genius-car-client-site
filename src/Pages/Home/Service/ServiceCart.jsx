import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({ product }) => {
  const { img, price, title, _id } = product;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img className='h-48 rounded' src={img} alt="car service" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h6 className='text-red-500'>Price: {price}$</h6>
        <div className="card-actions justify-end text-red-500 text-xl">
          <Link to={`/checkout/${_id}`}><button className='btn'>Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;