/* global $ */

const React = require('react')

export default React.createClass({
  componentDidMount () {
    $('.navbar-nav li').removeClass('active')
    $('.navbar-nav li.home').addClass('active')
  },
  render () {
    return (
      <div className='row'>
        <div className='home-section col-md-12'>
          Example View
        </div>
      </div>
    )
  }
})
