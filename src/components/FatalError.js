import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Segment,
  Button,
  Message
} from 'semantic-ui-react';

export default class FatalError extends Component {
  render() {
    const { message } = this.props;
    return (
      <div style={{ height: '100%' }} className="fatal-error">
        <Grid
          style={{ height: '100%' }}
          centered
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment.Group>
              <Segment>
                <Message error size="large">
                  <Message.Header>Fatal Error</Message.Header>
                  <Message.Content>
                    { message }
                  </Message.Content>
                </Message>
                <Button
                  fluid
                  error
                  primary
                  as={Link}
                  to="/logout"
                  content="Logout and Login Again"
                />
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
