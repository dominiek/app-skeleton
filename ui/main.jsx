
window.$ = window.jQuery = require('jquery')

const React = require('react')
const ReactDOM = require('react-dom')

import { Router, Route, browserHistory } from 'react-router'
import { createHistory } from 'history'

let history = browserHistory

const App = require('./components/App')
const HomeSection = require('./components/HomeSection')

ReactDOM.render(
  <Router history={history}>
    <Route component={App}>
      <Route path='/' component={HomeSection} />
      <Route path='/home' component={HomeSection} />
    </Route>
  </Router>,
  document.getElementById('main')
)
