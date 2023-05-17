import React from 'react';
import pars1 from '../../assets/images/products/1.png';
import pars2 from '../../assets/images/products/2.png';
import pars3 from '../../assets/images/products/3.png';
import pars4 from '../../assets/images/products/4.png';
import pars5 from '../../assets/images/products/5.png';
import pars6 from '../../assets/images/products/6.png';
import Rating from 'react-rating';


const PopularProducts = () => {
  return (
    <div className='pt-10 pb-24'>
      <div className='text-center pb-12'>
        <p className='text-red-500 font-bold'>Popular Products</p>
        <h2 className='text-3xl font-bold py-4'>Browse Our Products</h2>
        <p >the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={pars1} alt="" className="w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2 text-center">
            <Rating
              stop={6}
              emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
              fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
            />
            <h2 className="text-xl font-semibold tracking-wide">Cools Led Light</h2>
            <p className="dark:text-gray-100 text-orange-600 font-bold">$20.00</p>
          </div>
        </div>
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={pars2} alt="" className="w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2 text-center">
            <h2 className="text-xl font-semibold tracking-wide">Cools Led Light</h2>
            <p className="dark:text-gray-100 text-orange-600 font-bold">$20.00</p>
          </div>
        </div>

        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={pars3} alt="" className="w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2 text-center">
            <h2 className="text-xl font-semibold tracking-wide">Car Air Filter</h2>
            <p className="dark:text-gray-100 text-orange-600 font-bold">$20.00</p>
          </div>
        </div>

        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={pars4} alt="" className="w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2 text-center">
            <h2 className="text-xl font-semibold tracking-wide">Cools Led Light</h2>
            <p className="dark:text-gray-100 text-orange-600 font-bold">$20.00</p>
          </div>
        </div>

        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={pars5} alt="" className="w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2 text-center">
            <h2 className="text-xl font-semibold tracking-wide">Cools Led Light</h2>
            <p className="dark:text-gray-100 text-orange-600 font-bold">$20.00</p>
          </div>
        </div>

        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <img src={pars6} alt="" className="w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2 text-center">
            <h2 className="text-xl font-semibold tracking-wide">Cools Led Light</h2>
            <p className="dark:text-gray-100 text-orange-600 font-bold">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;