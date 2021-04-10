import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../../queries';
import SingleCar from './SingleCar';

const AllCars = () => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) return <h4>Loading</h4>;
  if (error) return <h4>Error</h4>;

  return data.getAllCars.map(
    ({ objectId, brand, _id, model, imageUrl, category }) => {
      const car = { objectId, brand, _id, model, imageUrl, category };
      return (
        <ul key={_id}>
          <SingleCar {...car} />
        </ul>
      );
    },
  );
};

export default AllCars;
