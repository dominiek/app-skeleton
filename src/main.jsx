
const React = require('react')
const ReactDOM = require('react-dom')

require('semantic-ui-css/semantic.css')

// Initialize our main router. Subdomain logic can be implemented easily here
const DashboardRouter = require('./components/dashboard/Router')

ReactDOM.render(
  <DashboardRouter />,
  document.getElementById('main')
)
