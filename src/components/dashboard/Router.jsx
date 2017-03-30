
import React, { Component } from 'react'

import { Router, Route, browserHistory } from 'react-router'

const App = require('./App')
const HomeSection = require('./HomeSection')
const ItemsSection = require('./ItemsSection')

export default class DashboardRouter extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path='/' component={HomeSection} />
          <Route path='/home' component={HomeSection} />
          <Route path='/items' component={ItemsSection} />
        </Route>
      </Router>
    )
  }
}
