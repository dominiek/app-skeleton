import request from 'utils/request';

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export function makeActionCreator(type, ...argNames) {
  return function (...args) { // eslint-disable-line
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export function createRequestTypes(base) {
  return {
    REQUEST: `${base}_REQUEST`,
    FAILURE: `${base}_FAILURE`,
    SUCCESS: `${base}_SUCCESS`,
  };
}

export function createReducerRequests(types, statusId, extendObj = {}) {
  const result = {};
  const statuses = [{ type: 'request' }, { type: 'failure' }, { type: 'success' }];
  types.forEach((type, index) => {
    result[type] = (state, action) => {
      const status = index !== 1 ? statuses[index] : { type: 'failure', error: action.payload };
      if (action.status) Object.assign(status, action.status);
      const statusIdKey = typeof statusId === 'function' ? statusId(action) : statusId;
      return {
        ...state,
        ...(extendObj[type] ? extendObj[type](state, action) : {}),
        statuses: {
          ...state.statuses,
          [statusIdKey]: status
        }
      };
    };
  });
  return result;
}

export function handleRequest(type, requestProps) {
  return (dispatch) => {
    dispatch({ type: type.REQUEST });
    return request(requestProps).then(
      payload => dispatch({ type: type.SUCCESS, payload }),
      error => dispatch({ type: type.FAILURE, payload: error })
    );
  };
}