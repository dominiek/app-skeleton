/* global window, $, jQuery */

/* jQuery as global */
var $ = require('jquery')
window.$ = $
var jQuery = require('jquery')
window.jQuery = jQuery

/* Semantic UI, as extension of jQuery */
import '../semantic/dist/semantic.css'

require('../semantic/dist/components/dimmer')
require('../semantic/dist/components/transition')
require('../semantic/dist/components/dropdown')
require('../semantic/dist/components/modal')
require('../semantic/dist/components/rating')
require('../semantic/dist/components/tab')
require('../semantic/dist/components/popup')
require('../semantic/dist/components/sticky')

const React = require('react')
const ReactDOM = require('react-dom')

import { Router, Route, browserHistory } from 'react-router'

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
