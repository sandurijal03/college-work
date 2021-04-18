import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyled from './styles/GlobalStyle';
import AppWithSession from './App';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Root = () => (
  <>
    <GlobalStyled />
    <Router>
      <AppWithSession />
    </Router>
  </>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root'),
);
