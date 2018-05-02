import React from 'react';
import { inject } from 'mobx-react';

@inject('auth', 'routing')
export default class Logout extends React.Component {
  componentDidMount() {
    this.props.auth.logout();
    this.props.routing.push('/');
  }
  render() {
    return <div />;
  }
}
