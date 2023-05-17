import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Address = () => {
  return (
    <div className="card w-full my-20 py-10 text-white bg-black shadow-xl">
      <div className="card-body">
        <div className="card-actions flex justify-around">
          <div className='flex items-center'>
            <FaCalendarAlt className='text-3xl' />
            <div className='pl-2'>
              <p className='text-sm'>We are open monday-friday</p>
              <p>7:00 am - 9:00 pm</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaPhoneAlt className='text-3xl' />
            <div className='pl-2'>
              <p className='text-sm'>Have a question?</p>
              <p>+2546 251 2658</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaLocationArrow className='text-3xl' />
            <div className='pl-2'>
              <p className='text-sm'>Need a repair? our address</p>
              <p>Liza Street, New York</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Address;