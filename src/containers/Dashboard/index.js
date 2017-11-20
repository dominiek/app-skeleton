import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Icon,
  Menu
} from 'semantic-ui-react';
import request from 'utils/request';
import { getLoginToken } from 'utils/authentication';
import { attachPromiseToComponentState } from 'utils/async';
import FatalError from 'components/FatalError';
import PageLoader from 'components/PageLoader';
import Home from './Home';
import Settings from './Settings';

export default class App extends Component {
  state = {
    error: null,
    result: null,
    loading: true
  }
  componentDidMount() {
    attachPromiseToComponentState(this, async () => {
      const result = await request({
        method: 'GET',
        path: '/1/users/self',
        token: getLoginToken()
      });
      return result;
    })();
  }
  render() {
    const { loading, error, result } = this.state;
    const self = result;
    if (loading) return (<PageLoader />);
    if (error) return (<FatalError message={error.message} />);
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown className="account" item text={(<span><Icon name="user" /> {self ? self.username : 'User'}</span>)}>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/logout">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
        <Container>
          <Switch>
            <Route
              path="/settings"
              component={(props) => (<Settings {...props} self={self} />)}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </div>
    );
  }
}
