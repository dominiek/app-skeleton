import { hot } from 'react-hot-loader';

import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import { observer, inject } from 'mobx-react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';

@inject('appSession', 'me')
@withRouter
@observer
class App extends React.Component {
  componentWillMount() {
    const { appSession } = this.props;
    if (!appSession.token) appSession.setLoaded();
  }

  componentDidMount() {
    const { appSession, me } = this.props;
    if (appSession.token) {
      me.fetch().then(() => {
        appSession.setLoaded();
      });
    }
  }

  render() {
    if (!this.props.appSession.loaded) {
      return (
        <PageCenter>
          <PageLoader />
        </PageCenter>
      );
    }

    return <Switch>{this.props.children}</Switch>;
  }
}

export default hot(module)(App);
