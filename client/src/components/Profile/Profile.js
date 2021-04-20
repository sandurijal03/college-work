import React from 'react';
import UserInfo from './UserInfo';
import withAuth from '../withAuth';
import { GET_RECOMMENDATION } from '../../queries';
import { useQuery } from '@apollo/client';

const Profile = ({ session }) => {
  const { firstName } = session && session.getCurrentUser;
  const { error, loading, data } = useQuery(GET_RECOMMENDATION, {
    variables: { firstName },
  });

  const recommendedCar =
    data &&
    data.getRecommendation.map((item, i) => (
      <ul key={i}>
        <li>{item}</li>
      </ul>
    ));

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className='App'>
      <UserInfo session={session} />
      <h3>You May also like</h3>
      {recommendedCar}
    </div>
  );
};

export default withAuth((session) => session && session.getCurrentUser)(
  Profile,
);
