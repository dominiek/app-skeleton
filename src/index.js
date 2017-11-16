import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';

import App from 'containers/App';

require('semantic-ui-css/semantic.css');

const history = createHistory();
const store = configureStore(history);

if (process.env.NODE_ENV === 'development') {
  const AppContainer = require('react-hot-loader').AppContainer; // eslint-disable-line
  ReactDOM.render(
    <AppContainer>
      <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default; // eslint-disable-line
      ReactDOM.render(
        <AppContainer>
          <NextApp store={store} history={history} />
        </AppContainer>,
        document.getElementById('root')
      );
    });
  }
} else {
  ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));
}