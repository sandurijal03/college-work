import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';

import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import withSession from './components/withSessions';
import Navbar from './components/Navbar';
import Search from './components/Car/Search';
import AddCar from './components/Admin/AddCar';
import Profile from './components/Profile/Profile';
import CarPage from './components/Car/CarPage';
import GetArgumentsCar from './components/Car/GetArgumentsCar';
import './index.css';
import AllCars from './components/Car/AllCars';

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

const Root = ({ refetch, session }) => (
  <Router>
    <>
      <Navbar session={session} />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/allcars' component={AllCars} />
        <Route
          exact
          path='/signin'
          render={() => <Signin refetch={refetch} />}
        />
        <Route
          exact
          path='/signup'
          render={() => <Signup refetch={refetch} />}
        />
        <Route path='/car/add' render={() => <AddCar session={session} />} />
        <Route exact path='/cars/:_id' component={CarPage} />
        <Route exact path='/:category/cars' component={GetArgumentsCar} />
        <Route
          exact
          path='/profile'
          render={() => <Profile session={session} />}
        />
        <Redirect to='/' />
      </Switch>
    </>
  </Router>
);

const RootWithSesion = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSesion />
  </ApolloProvider>,
  document.getElementById('root'),
);
