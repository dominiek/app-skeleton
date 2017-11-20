
import React from 'react';
import { Grid } from 'semantic-ui-react';

export default (props) => (
  <div style={{ height: '100%' }}>
    <Grid
      style={{ height: '100%' }}
      centered
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        { props.children }
      </Grid.Column>
    </Grid>
  </div>
);
