
import {
  createReducer,
  createReducerRequests,
  createRequestTypes,
  handleRequest
} from 'utils/redux';

export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = createRequestTypes('LOGOUT');

const defaultState = {
  statuses: {}
};

export default createReducer(defaultState, {
  ...createReducerRequests(Object.values(LOGIN), 'login', {
    [LOGIN.SUCCESS](state, { payload }) {
      return {
        ...state,
        token: payload.token
      };
    }
  }),
  [LOGOUT.REQUEST](state) {
    return {
      ...state,
      user: undefined
    };
  }
});

export const login = (user) => {
  return handleRequest(LOGIN, { path: '/login', body: user });
};

export const logout = () => ({
  type: LOGOUT.REQUEST
});

function localState(state) {
  return state.authenticate;
}

const defaultStatus = {};
export function getStatus(state, requestId) {
  return localState(state).statuses[requestId] || defaultStatus;
}