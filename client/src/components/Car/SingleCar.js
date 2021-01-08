import React from 'react';

const SingleCar = ({ car }) => {
  return (
    <li>
      <h4>{car.model}</h4>
      <p>{car.brand}</p>
    </li>
  );
};

export default SingleCar;
