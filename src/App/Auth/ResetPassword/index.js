import React from 'react';
import { Segment, Message } from 'semantic-ui-react';

import request from 'utils/request';
import PageCenter from 'components/PageCenter';
import LogoTitle from 'components/LogoTitle';
import ApplyForm from './Form';
import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';

import { getToken, parseToken } from 'utils/token';

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    const token = getToken(props);
    this.state = {
      token,
      jwt: parseToken(token)
    };
  }

  onSubmit = (body) => {
    return request({
      method: 'POST',
      path: '/1/auth/set-password',
      body: {
        ...body,
        token: this.state.token
      }
    })
      .then(() => {
        this.setState({ success: true, error: null });
      })
      .catch((c) => {
        this.setState({ error: c });
      });
  };

  render() {
    const { success, token, jwt } = this.state;

    return (
      <PageCenter>
        <LogoTitle title="Reset Password" />
        <Segment.Group>
          <Segment padded>
            {(!token || !jwt) && (
              <p>
                <Message error size="huge">
                  <Message.Header>No valid token found</Message.Header>
                  <Message.Content>
                    Please ensure you either click the email link in the email
                    or copy paste the link in full.
                  </Message.Content>
                </Message>
              </p>
            )}
            {success && (
              <Message info>
                <Message.Header>Your password has been changed!</Message.Header>
                <p>
                  Click here to <Link to="/login">Log In</Link>
                </p>
              </Message>
            )}
            {!success &&
              token &&
              jwt && <Form onSubmit={this.onSubmit} render={ApplyForm} />}
          </Segment>
        </Segment.Group>
      </PageCenter>
    );
  }
}
