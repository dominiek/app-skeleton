/* global $ */

const React = require('react')

export default class HomeSection extends React.Component {
  componentDidMount () {
    $('.top.fixed.menu .item').removeClass('active')
    $('.top.fixed.menu .item.home').addClass('active')
  }
  render () {
    return (
      <div className='home-section'>
        Welcome to App Skeleton.
      </div>
    )
  }
}
