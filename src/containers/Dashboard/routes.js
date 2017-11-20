
import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';

export default () => {
  return [
    <Route path="/" component={App} />
  ]
}
