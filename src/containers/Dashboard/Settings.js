import React, { Component } from 'react';
import {
  Header,
  Form,
  Input
} from 'semantic-ui-react';

export default class Settings extends Component {
  render() {
    console.log('Settings');
    const { self } = this.props;
    return (
      <div>
        <Header
          as="h2"
          icon="settings"
          content="Settings"
        />
        <Form>
          <Input
            type="text"
            disabled
            defaultValue={self.name}
          />
        </Form>
      </div>
    );
  }
}
