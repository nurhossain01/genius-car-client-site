import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import moment from 'moment/moment';


const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const checkId = useLoaderData();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price= form.price.value;
    const bio = form.bio.value;
    const booking = {
      name, 
      date, 
      email, 
      price, 
      bio, 
      img:checkId.img,
      service_id: checkId._id
    };
    console.log(booking);
    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('Booking added successful')
      }
    })
  }



  return (
    <div className="min-h-screen bg-base-200 pt-48">
      <div className=" flex-col lg:flex-row-reverse">
        <div className="w-2/3 mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="p-4">
            <div className='grid lg:grid-cols-2 gap-10'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service name</span>
                </label>
                <input type="text" name='name' defaultValue={checkId.title} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name='date'  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' defaultValue={checkId.price} className="input input-bordered" />
              </div>
              <div className="col-span-full">
                <label for="" className="text-sm">Bio</label>
                <textarea id="" name='bio' className="w-full h-24 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Order Confirm</button>
            </div>
          </form>
          {/* <span>{moment().format('MMMM Do YYYY')}</span> */}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;