import { observable, action, reaction } from 'mobx';
import BaseStore from './BaseStore';
import request from 'utils/request';

export default class AuthStore extends BaseStore {
  @observable currentUser;
  @observable token = window.localStorage.getItem('jwt');

  constructor() {
    super();
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }

  @action
  logout() {
    this.token = null;
  }

  @action
  setPassword(body, statusKey) {
    const status = this.createStatus(statusKey);
    return request({
      method: 'POST',
      path: '/1/auth/set-password',
      body
    })
      .then((resp) => {
        this.token = resp.data.token;
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
        this.token = resp.data.token;
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
      .then(({ data }) => {
        this.token = data.token;
        status.success();
      })
      .catch((err) => {
        status.error(err);
        return err;
      });
  }
}
