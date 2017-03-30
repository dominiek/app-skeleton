
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'semantic-ui-react'

import '../../styles/dashboard.css'

export default class App extends Component {
  render () {
    const path = this.props.location.pathname
    return (
      <div className='app'>
        <Menu fixed='top' inverted>
          <div className='ui container'>
            <Menu.Item active={(path === '/home' || path === '/')} as={Link} to='/home'>
              <Icon name='home' /> Home
            </Menu.Item>
            <Menu.Item active={(path === '/items')} as={Link} to='/items'>
              <Icon name='list' /> Items
            </Menu.Item>
          </div>
        </Menu>
        <div className='app-view-container ui container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
