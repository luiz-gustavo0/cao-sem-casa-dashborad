import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/dashboard'>
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
