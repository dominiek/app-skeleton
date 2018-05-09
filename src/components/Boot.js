import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import PageCenter from 'components/PageCenter';
import PageLoader from 'components/PageLoader';

@inject('appSession', 'me')
@withRouter
@observer
export default class Boot extends React.Component {
  componentWillMount() {
    this.handleLoading();
  }

  componentWillReact() {
    this.handleLoading();
  }

  handleLoading() {
    const { appSession, me } = this.props;
    if (appSession.token) {
      me.fetch().then(() => {
        appSession.setLoaded();
      });
      return;
    }
    appSession.setLoaded();
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
