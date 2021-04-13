import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../../queries';
// import SingleCar from './SingleCar';
import './AllCars.css';

import pickUp from '../assets/eJfSKUCGFS.jpg';

const AllCars = () => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) return <h4>Loading</h4>;
  if (error) return <h4>Error</h4>;

  const allCars = data.getAllCars.map(
    ({
      objectId,
      brand,
      _id,
      model,
      imageUrl,
      category,
      description,
      price,
    }) => {
      // const car = { objectId, brand, _id, model, imageUrl, category };

      return (
        // <ul key={_id} className='all-cars'>
        //   <SingleCar {...car} />
        // </ul>

        <div className='card' key={_id}>
          <div className='card-img'>
            <img src={pickUp} alt='' />
          </div>
          <div className='card-header'>
            <h2>{model}</h2>
            <p>{description}</p>
            <p className='price'>${price}</p>
          </div>
          <div className='btn'>Book now</div>
        </div>
      );
    },
  );
  return (
    <div className='main_content'>
      <h3>All Cars</h3>
      {allCars}
    </div>
  );
};

export default AllCars;
