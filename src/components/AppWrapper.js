import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import logoInverted from 'assets/logo.svg';

@inject('me')
@withRouter
@observer
export default class AppWrapper extends React.Component {
  render() {
    const { me } = this.props;
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to="/">
              <img
                style={{ width: '30px' }}
                className="logo"
                src={`${logoInverted}`}
              />
            </Menu.Item>

            <Menu.Menu position="right">
              <Dropdown
                className="account"
                item
                text={
                  <span>
                    <Icon name="user" /> {me.user.name}
                  </span>
                }
              >
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/settings">
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/logout">
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
        <Container style={{ marginTop: '100px' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
