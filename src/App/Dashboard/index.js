import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('me')
@observer
export default class Home extends React.Component {
  render() {
    const { me } = this.props;
    return (
      <div>
        Welcome back {me.user.name} ({me.user.email})
      </div>
    );
  }
}
