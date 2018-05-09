import 'theme/semantic.less';

import { Provider } from 'mobx-react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import { configure } from 'mobx';
import React from 'react';
import { hot } from 'react-hot-loader';

import Boot from 'components/Boot';

import AuthSwitchRoute from 'components/routes/AuthSwitch';
import Protected from 'components/routes/Protected';

import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import Signup from './Auth/Signup';
import ResetPassword from './Auth/ResetPassword';

import AuthStore from 'stores/Auth';
import appSession from 'stores/AppSession';
import MeStore from 'stores/Me';

configure({
  enforceActions: 'strict'
});

const routing = new RouterStore();
const history = syncHistoryWithStore(createHistory(), routing);

const stores = {
  appSession,
  routing,
  auth: new AuthStore(),
  me: new MeStore()
};

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <Boot>
        <AuthSwitchRoute
          exact
          path="/"
          loggedIn={Dashboard}
          loggedOut={Homepage}
        />
        <Protected exact path="/settings" component={Settings} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
      </Boot>
    </Router>
  </Provider>
);

export default hot(module)(App);
