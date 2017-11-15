import qsStringify from './queryStringify';
import config from 'config';

export default function request(options) {
  const {
    path,
    method,
    body,
    params,
    token
  } = Object.assign({
    method: 'GET',
  }, options);

  const headers = Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }, options.headers || {});

  const paramsPath = Object.keys(params || {}).length ? `?${qsStringify(params)}` : '';
  const endpoint = `${config.apiRoot}/${path.replace(/^\//, '')}${paramsPath}`;
  if (token) headers.Authorization = `Bearer ${token}`;
  let promise;
  if (method.toUpperCase() === 'GET') {
    promise = fetch(endpoint, { headers });
  } else {
    promise = fetch(endpoint, { method, headers, body: JSON.stringify(body) });
  }
  return promise
    .then(res => {
      if (!res.ok) {
        return res.text().then((data) => {
          let d;
          try {
            d = JSON.parse(data);
          } catch (e) {
            d = {};
          }
          const err = new Error(d.message || d.msg || res.statusText);
          if (d.code) err.code = d.code;
          err.status = res.status;
          throw err;
        });
      }
      return [200, 201].includes(res.status) ? res.json() : undefined;
    });
}
