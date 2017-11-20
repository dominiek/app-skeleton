import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { isLoggedIn } from 'utils/authentication';

import Authentication from './Authentication';
import Dashboard from './Dashboard';
import Homepage from './Homepage';

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={isLoggedIn() ? Dashboard : Homepage} />
        <Authentication />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
