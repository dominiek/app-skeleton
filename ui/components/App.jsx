
const React = require('react')
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='ui top fixed inverted menu'>
          <Link to='/home' className='item active'><i className='ui icon home' />Home</Link>
        </div>

        <div className='app-view-container ui container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
