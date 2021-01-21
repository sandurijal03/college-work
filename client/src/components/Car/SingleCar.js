import React from 'react';
import { Link } from 'react-router-dom';

const SingleCar = ({ brand, model, _id, imageUrl, category }) => {
  console.log(imageUrl);
  return (
    <li style={{ background: `url(${imageUrl}) center cover no-repeat` }}>
      <img
        src='https://i1.wp.com/www.stugon.com/wp-content/uploads/2013/12/Exotic-Car-Wallpapers-HD-Edition-stugon.com-8.jpg'
        alt='car'
      />
      <span className={category}>{category}</span>
      <div className='card-text'>
        <Link to={`cars/${_id}`}>
          <h4>{model}</h4>
        </Link>
      </div>
    </li>
  );
};

export default SingleCar;
