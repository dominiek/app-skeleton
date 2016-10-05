
/* Initialize Semantic UI, as extension of jQuery */
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

// Initialize our main router. Subdomain logic can be implemented easily here
const DashboardRouter = require('./components/dashboard/Router')

ReactDOM.render(
  <DashboardRouter />,
  document.getElementById('main')
)
