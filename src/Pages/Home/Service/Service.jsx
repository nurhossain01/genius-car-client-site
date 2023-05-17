import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  return (
    <div>
      <div className='text-center pb-10'>
        <h6 className='text-red-500 font-bold'>Service</h6>
        <h3 className='py-4 font-bold text-3xl'>Our Service Area</h3>
        <h6 className='leading-7'>
          the majority have suffered alteration in some form,<br />
          by injected humour, or randomised words which don't <br />
          look even slightly believable.
        </h6>
      </div>
      <div className='grid lg:grid-cols-3 gap-10  pt-10'>
        {
          service.map(product => <ServiceCart key={product._id} product={product}></ServiceCart>)
        }
      </div>
      <div className='flex justify-center pt-10 pb-20'>
        <button className="btn btn-outline  text-red-500">More services</button>
      </div>
    </div>
  );
};

export default Service;