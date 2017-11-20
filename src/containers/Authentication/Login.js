import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Input,
  Message
} from 'semantic-ui-react';
import request from 'utils/request';
import { saveLoginToken } from 'utils/authentication';
import attachPromiseToComponentState from 'utils/attachPromiseToComponentState';
import LoginForm from './LoginForm';

const login = async (params) => {
  const result = await request({
    method: 'POST',
    path: '/1/users/sessions',
    body: params
  });
  saveLoginToken(result.token);
  return result;
}

export default class Login extends Component {
  state = {
    error: null,
    result: null
  }
  componentDidUpdate() {
    const { result } = this.state;
    if (result) {
      // Do a hard redirect so that server-side can send new bundle potentially
      // Also ensures new routers based on new state
      document.location.href = '/';
    }
  }
  render() {
    const { error, loading } = this.state;
    const onSubmit = attachPromiseToComponentState(this, login);
    return (
      <div style={{ height: '100%' }} className="login-section">
        <Grid
          style={{ height: '100%' }}
          centered
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Sign In
            </Header>
            <Segment.Group>
              <Segment>
                { error && (<Message error content={error.message} />) }
                <LoginForm
                  onSubmit={onSubmit}
                />
              </Segment>
              <Segment secondary>
                <Grid>
                  <Grid.Column floated="left" width={8}>
                    <Link to="/signup">Create Account</Link>
                  </Grid.Column>
                  <Grid.Column floated="right" width={8} textAlign="right">
                    <a href="/forgot-password" className="secondary">Forgot Password</a>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
