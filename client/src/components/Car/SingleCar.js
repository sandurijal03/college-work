import React from 'react';
import { Link } from 'react-router-dom';

const SingleCar = ({ car }) => {
  return (
    <li>
      <Link to={`cars/${car._id}`}>
        <h4>{car.model}</h4>
      </Link>
      <p>{car.brand}</p>
    </li>
  );
};

export default SingleCar;
