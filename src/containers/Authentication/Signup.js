import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Input,
  Message,
  Checkbox
} from 'semantic-ui-react';
import SignupForm from './SignupForm';
import request from 'utils/request';
import { saveLoginToken } from 'utils/authentication';
import attachPromiseToComponentState from 'utils/attachPromiseToComponentState';

const signupAndLogin = async (params) => {
  if (!params.termsAccepted) {
    throw new Error('Oops, you have to agree to the Terms of Service');
  }
  const user = await request({
    method: 'POST',
    path: '/1/users',
    body: params
  });
  const session = await request({
    method: 'POST',
    path: '/1/users/sessions',
    body: {
      email: params.email,
      password: params.password
    }
  });
  saveLoginToken(session.token);
  return session;
};

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
    const { error } = this.state;
    const onSubmit = attachPromiseToComponentState(this, signupAndLogin);
    return (
      <div style={{ height: '100%' }} className="signup-section">
        <Grid
          style={{ height: '100%' }}
          centered
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Create Account
            </Header>
            <Segment.Group>
              <Segment>
                { error && (<Message error content={error.message} />) }
                <SignupForm
                  onSubmit={onSubmit}
                />
              </Segment>
              <Segment secondary>
                Already have an account? <Link to="/login">Login</Link>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
