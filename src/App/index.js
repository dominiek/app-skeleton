import 'theme/semantic.less';

import React from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import { useStrict } from 'mobx';
import Router from './Router';
import AuthStore from 'stores/Auth';

useStrict(true);

const routing = new RouterStore();
const history = syncHistoryWithStore(createHistory(), routing);

const stores = {
  routing,
  auth: new AuthStore()
};

ReactDOM.render(
  <Router stores={stores} history={history} />,
  document.getElementById('root')
);
