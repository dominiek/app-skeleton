import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route } from 'react-router-dom';

@inject('appSession', 'routing')
@observer
export default class AuthSwitchRoute extends React.Component {
  render() {
    const { appSession, routing, ...rest } = this.props;
    if (!appSession.token) {
      return routing.push('/');
    }
    return <Route {...rest} />;
  }
}
