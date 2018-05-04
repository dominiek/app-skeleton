import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route } from 'react-router-dom';

@inject('appSession')
@observer
export default class AuthSwitchRoute extends React.Component {
  render() {
    const {
      appSession,
      loggedIn: LoggedInComponent,
      loggedOut: LoggedOutComponent,
      to,
      exact
    } = this.props;

    return (
      <Route
        to={to}
        exact={exact}
        render={(props) => {
          return appSession.token ? (
            <LoggedInComponent {...props} />
          ) : (
            <LoggedOutComponent {...props} />
          );
        }}
      />
    );
  }
}
