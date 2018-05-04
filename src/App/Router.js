import { hot } from 'react-hot-loader';

import React from 'react';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router-dom';

import AuthSwitchRoute from '../components/routes/AuthSwitch';

import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import Signup from './Auth/Signup';
import ResetPassword from './Auth/ResetPassword';

const App = ({ stores, history }) => (
  <Provider {...stores}>
    <Router history={history}>
      <Switch>
        <AuthSwitchRoute
          exact
          path="/"
          loggedIn={Dashboard}
          loggedOut={Homepage}
        />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
      </Switch>
    </Router>
  </Provider>
);

export default hot(module)(App);
