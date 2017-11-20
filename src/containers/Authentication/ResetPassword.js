import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Form,
  Segment,
  Button,
  Input,
  Message
} from 'semantic-ui-react';
import PageCenter from 'components/PageCenter';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  render() {
    const { error } = this.state;
    const sent = false;
    return (
      <PageCenter>
        <Header as="h2" textAlign="center">
          Reset Password
        </Header>
        <Segment.Group>
          <Segment>
            { error && (<Message error content={error.message} />) }
            { sent ? (
              <Message info content="Please follow the instructions in the email we sent to your mailbox" />
            ) : (
              <Form size="large">
                <Form.Field>
                  <Input
                    icon="key"
                    iconPosition="left"
                    disabled
                    type="text"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail Address"
                    disabled
                    type="text"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    iconPosition="left"
                    placeholder="New Password"
                    icon="lock"
                    type="password"
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    iconPosition="left"
                    placeholder="Repeat Password"
                    icon="lock"
                    type="password"
                  />
                </Form.Field>
                <Button
                  fluid
                  primary
                  size="large"
                  content="Set New Password"
                />
              </Form>
            ) }
          </Segment>
          <Segment secondary>
            Remembered your password? <Link to="/login">Login</Link>
          </Segment>
        </Segment.Group>
      </PageCenter>
    );
  }
}
