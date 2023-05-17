import React from 'react';

const DisplayBooking = ({ pd, handleDelete, handleUpdate }) => {
  const { _id, img, date, price, name, service_id, status } = pd;


  return (
    <tr>
      <th>
        <label>
          <input onClick={() => handleDelete(_id)} type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-48">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        $ {price}
      </td>
      <td>{service_id}</td>
      <td>{date}</td>
      <th>
        {
          status === 'confirm' ? <span className='font-bold text-red-600'>Confirmed</span> : <button onClick={() => handleUpdate(_id)} className="btn  bg-fuchsia-700 p-4">confirm</button>
        }
      </th>
    </tr>
  );
};

export default DisplayBooking;