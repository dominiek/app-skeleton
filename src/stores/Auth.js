import { action } from 'mobx';
import BaseStore from './BaseStore';
import request from 'utils/request';

import appSession from 'stores/AppSession';

export default class AuthStore extends BaseStore {
  @action
  setPassword(body, statusKey) {
    const status = this.createStatus(statusKey);
    return request({
      method: 'POST',
      path: '/1/auth/set-password',
      body
    })
      .then((resp) => {
        appSession.reset();
        appSession.setToken(resp.data.token);
        status.success();
      })
      .catch((err) => {
        status.error(err);
        return err;
      });
  }

  @action
  login(body, statusKey) {
    const status = this.createStatus(statusKey);
    return request({
      method: 'POST',
      path: '/1/auth/login',
      body: body
    })
      .then((resp) => {
        appSession.reset();
        appSession.setToken(resp.data.token);
        status.success();
      })
      .catch((err) => {
        status.error(err);
        return err;
      });
  }

  @action
  apply(body, statusKey) {
    const status = this.createStatus(statusKey);
    return request({
      method: 'POST',
      path: '/1/auth/apply',
      body
    })
      .then(() => {
        appSession.reset();
        status.success();
      })
      .catch((err) => {
        status.error(err);
        return err;
      });
  }

  @action
  register(body, statusKey) {
    const status = this.createStatus(statusKey);
    return request({
      method: 'POST',
      path: '/1/auth/register',
      body
    })
      .then((resp) => {
        appSession.reset();
        appSession.setToken(resp.data.token);
        status.success();
      })
      .catch((err) => {
        status.error(err);
        return err;
      });
  }
}
