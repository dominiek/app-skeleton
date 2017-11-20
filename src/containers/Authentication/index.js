
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

export default () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/signup" component={Signup} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
  </Switch>
);
