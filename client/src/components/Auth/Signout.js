import React from 'react';
import { ApolloConsumer } from '@apollo/client';
import { withRouter } from 'react-router-dom';

const Signout = ({ history }) => {
  const handleSignout = (client) => {
    localStorage.setItem('token', '');
    client.resetStore();
    history.push('/');
  };
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <button
            onClick={() => handleSignout(client)}
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '2px 1px',
            }}
          >
            Signout
          </button>
        );
      }}
    </ApolloConsumer>
  );
};

export default withRouter(Signout);
