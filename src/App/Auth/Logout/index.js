import React from 'react';
import { inject } from 'mobx-react';

@inject('appSession', 'routing')
export default class Logout extends React.Component {
  componentDidMount() {
    this.props.appSession.logout();
    this.props.routing.push('/');
  }
  render() {
    return <div />;
  }
}
