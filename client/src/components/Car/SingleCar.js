import React from 'react';
import { Link } from 'react-router-dom';
import './AllCars.css';

const SingleCar = ({ objectId, brand, model, _id, imageUrl, category }) => {
  return (
    <li
      style={{ background: `url(${imageUrl}) center cover no-repeat` }}
      className='car-list'
    >
      <img src={`${objectId}.jpg`} alt='car' />
      <span className={category}>{category}</span>
      <div className='card-text'>
        <Link to={`cars/${_id}`}>
          <h4>{model}</h4>
          <h4>{brand}</h4>
        </Link>
      </div>
    </li>
  );
};

export default SingleCar;
