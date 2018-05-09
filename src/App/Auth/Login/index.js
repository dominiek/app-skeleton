import React from 'react';
import { Segment, Message, Grid } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import PageCenter from 'components/PageCenter';
import LogoTitle from 'components/LogoTitle';
import LoginForm from './Form';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

@inject('auth', 'routing')
@observer
export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  state = {
    error: null,
    success: false,
    email: null
  };

  onSubmit = (body) => {
    return this.props.auth.login(body, 'login').then((result) => {
      if (result instanceof Error) return;
      this.props.routing.replace('/');
    });
  };

  render() {
    const status = this.props.auth.getStatus('login');

    return (
      <PageCenter>
        <LogoTitle title="Login" />
        <Segment.Group>
          <Segment padded>
            {status.error && <Message error content={status.error.message} />}
            <Form onSubmit={this.onSubmit} render={LoginForm} />
          </Segment>
          <Segment secondary>
            <Grid>
              <Grid.Column floated="left" width={8}>
                <Link to="/signup">Signup</Link>
              </Grid.Column>
              <Grid.Column floated="right" width={8} textAlign="right">
                <Link to="/forgot-password">Forgot Password</Link>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
      </PageCenter>
    );
  }
}
