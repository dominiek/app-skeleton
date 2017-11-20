import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Input,
  Message
} from 'semantic-ui-react';
import PageCenter from 'components/PageCenter';

export default class ForgotPassword extends Component {
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
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail Address"
                    type="text"
                  />
                </Form.Field>
                <Button
                  fluid
                  primary
                  size="large"
                  content="Reset Password"
                />
              </Form>
            ) }
          </Segment>
          <Segment secondary>
            <Grid>
              <Grid.Column floated="left" width={8}>
                <Link to="/signup">Create Account</Link>
              </Grid.Column>
              <Grid.Column floated="right" width={8} textAlign="right">
                <Link to="/login">Login</Link>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
      </PageCenter>
    );
  }
}
