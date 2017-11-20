import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { isLoggedIn } from 'utils/authentication';

import authenticationRoutes from './Authentication/routes';
import dashboardRoutes from './Dashboard/routes';
import homepageRoutes from './Homepage/routes';

import Login from './Authentication/Login';
import Home from './Homepage/Home';

const App = ({ store, history }) => {
  let routes = [];
  routes = routes.concat(authenticationRoutes());
  if (isLoggedIn()) {
    routes = routes.concat(dashboardRoutes());
  } else {
    routes = routes.concat(homepageRoutes());
  }
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          { routes }
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
