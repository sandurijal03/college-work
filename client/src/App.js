import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Car/Search';
import AllCars from './components/Car/AllCars';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import AddCar from './components/Admin/AddCar';
import CarPage from './components/Car/CarPage';
import Profile from './components/Profile/Profile';
import withSession from './components/withSessions';
import Navbar from './components/Navbar';
import GetArgumentsCar from './components/Car/GetArgumentsCar';

const App = ({ refetch, session }) => {
  return (
    <>
      <Navbar session={session} />
      <Switch>
        <Route exact path='/' component={Home} />
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
  );
};

const AppWithSession = withSession(App);

export default AppWithSession;
