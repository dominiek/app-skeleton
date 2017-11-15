import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './modules';

// install plugin from http://extension.remotedev.io/#installation
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default function configureStore(history, preloadedState) {
  const middlewares = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)));
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
      form: formReducer
    }),
    preloadedState,
    middlewares
  );
  return store;
}