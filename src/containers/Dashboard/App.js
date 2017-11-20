import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Dropdown,
  Icon,
  Menu,
  Loader,
  Message
} from 'semantic-ui-react';
import request from 'utils/request';
import { getLoginToken } from 'utils/authentication';
import FatalError from 'components/FatalError';
import Home from './Home';

export default class App extends Component {
  state = {
    error: null,
    self: null,
    loading: true
  }
  componentDidMount() {
    const loading = false;
    request({
      method: 'GET',
      path: '/1/users/self',
      token: getLoginToken()
    }).then(
      (self) => this.setState({ self, loading }),
      error => this.setState({ error, loading })
    )
  }
  render() {
    const { loading, error, self } = this.state;
    if (loading) return (<Loader />);
    if (error) return (
      <FatalError message={error.message} />
    )
    console.log('self', self)
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown className='account' item text={(<span><Icon name='user' /> {self ? self.username : 'User'}</span>)}>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to='/settings'>Settings</Dropdown.Item>
                  <Dropdown.Item as={Link} to='/logout'>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
        <Container>
          <Route exact path='/' />
        </Container>
      </div>
    );
  }
}
