
// import cookie from 'react-cookie';

export const saveLoginToken = token => {
  localStorage.authToken = token;
  // This is to allow the server-side to render a different bundle:
  // cookie.save('entryPoint', 'dashboard', { path: '/' });
};

export const getLoginToken = () => {
  return localStorage.authToken;
};

export const clearLoginToken = () => {
  delete localStorage.authToken;
  // cookie.remove('entryPoint', { path: '/' });
};

export const isLoggedIn = () => !!localStorage.authToken;
