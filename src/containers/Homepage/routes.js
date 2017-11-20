
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

export default () => {
  return [
    <Route path="/" component={Home} />
  ]
}
