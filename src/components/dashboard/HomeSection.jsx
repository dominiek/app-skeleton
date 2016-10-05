/* global $ */

const React = require('react')

export default React.createClass({
  componentDidMount () {
    $('.top.fixed.menu .item').removeClass('active')
    $('.top.fixed.menu .item.home').addClass('active')
  },
  render () {
    return (
      <div className='home-section'>
        Welcome to App Skeleton.
      </div>
    )
  }
})
