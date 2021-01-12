import React from 'react';
import { Link } from 'react-router-dom';

const SingleCar = ({ brand, model, _id }) => {
  return (
    <li>
      <Link to={`cars/${_id}`}>
        <h4>{model}</h4>
      </Link>
      <p>{brand}</p>
    </li>
  );
};

export default SingleCar;
