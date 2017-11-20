import React, { Component } from 'react';
import { clearLoginToken } from 'utils/authentication';
import PageLoader from 'components/PageLoader';

export default class Logout extends Component {
  componentDidMount() {
    document.location.href = '/';
  }
  render() {
    clearLoginToken();
    return (
      <PageLoader content="Logging out" />
    );
  }
}
