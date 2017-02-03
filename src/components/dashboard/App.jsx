
const React = require('react')
import { Link } from 'react-router'
import { Menu, Icon } from 'semantic-ui-react'

import '../../styles/dashboard.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Menu fixed='top' inverted>
          <div className='ui container'>
            <Menu.Item active={(this.props.children.type.name === 'HomeSection')} as={Link} to='/home'>
              <Icon name='home' /> Home
            </Menu.Item>
            <Menu.Item active={(this.props.children.type.name === 'ItemsSection')} as={Link} to='/items'>
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
