import React, { Component } from 'react';
import {
  Grid,
  Loader
} from 'semantic-ui-react';
import { clearLoginToken } from 'utils/authentication';

export default class Logout extends Component {
  componentDidMount() {
    document.location.href = '/';
  }
  render() {
    clearLoginToken();
    return (
      <div style={{ height: '100%' }} className="logout">
        <Grid
          style={{ height: '100%' }}
          centered
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Loader content='Logging out' />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
