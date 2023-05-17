import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DisplayBooking from './DisplayBooking';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setOrders(data)
        }
        else{
          navigate('/')
        }
      })
  }, [url, navigate])


  const handleDelete = (id) => {
    const proceed = confirm('Are You sure you want to delete ?')
    if (proceed) {
      fetch(`http://localhost:5000/bookingDelete/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            const filter = orders.filter(or => or._id !== id);
            setOrders(filter)
          }
        })
    }
  }

  const handleUpdate = (id) => {
    const proceed = confirm('Are You sure you want to delete ?')
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        // not understand 43 no. line
        body: JSON.stringify({ status: 'confirm' })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
            // not understand 43 to 54 no. line
            const remaining = orders.filter(booking => booking._id !== id);
            const updated = orders.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setOrders(newBookings)
          }
        })
    }
  }

  return (
    <div>
      {
        user?.email && <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>price</th>
                <th>service ID</th>
                <th>Date</th>
                <th>Pending</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                orders?.map(pd => <DisplayBooking key={pd._id} pd={pd} handleDelete={handleDelete} handleUpdate={handleUpdate}></DisplayBooking>)
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Bookings;