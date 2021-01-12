import React from 'react';
import { withRouter } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_CAR } from '../../queries';

const CarPage = ({ match }) => {
  const { _id } = match.params;

  const { data, error, loading } = useQuery(GET_CAR, {
    variables: { _id },
  });

  if (loading) return <h2>Loading</h2>;
  if (error) return <h3>Error</h3>;

  return (
    <div className='App'>
      <h2>{data.getCar.model}</h2>
    </div>
  );
};

export default withRouter(CarPage);
