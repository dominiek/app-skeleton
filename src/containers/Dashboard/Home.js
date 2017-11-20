import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Dropdown,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{paddingTop: "5em"}}>
          <Menu inverted fixed="top">
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Menu position="right">
                <Dropdown className='account' item text={(<span><Icon name='user' /> User</span>)}>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/settings'>Settings</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/logout'>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
          <Container>
            Dashboard Home
          </Container>
      </div>
    );
  }
}
