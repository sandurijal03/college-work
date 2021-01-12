import React from 'react';

import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { GET_CURRENT_USER } from '../queries';

const withAuth = (conditionFunc) => (Component) => (props) => {
  const { data, loading } = useQuery(GET_CURRENT_USER);
  if (loading) return null;
  return conditionFunc(data) ? <Component {...props} /> : <Redirect to='/' />;
};

export default withAuth;
