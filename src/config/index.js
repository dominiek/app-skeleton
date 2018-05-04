import defaultConfig from './default';
import productionConfig from './production';
import stagingConfig from './staging';
import { deepMerge } from 'lodash';

const hostname = window.location.hostname;

// Because its annoying to see it appear in the tests
function log(message) {
  if (process.env.NODE_ENV !== 'test') console.log(message); // eslint-disable-line
}

let tmp = defaultConfig;
if (hostname.match('staging')) {
  log('staging env');
  tmp = deepMerge(defaultConfig, stagingConfig);
} else if (!['localhost', '0.0.0.0'].includes(hostname)) {
  log('prod env');
  tmp = deepMerge(defaultConfig, productionConfig);
} else {
  log('default env');
}
const config = tmp;
export default config;
