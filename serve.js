const Koa = require('koa');
const config = require('./webpack.config');
const webpack = require('koa-webpack'); // eslint-disable-line
const historyApiFallback = require('./history-middleware');

const admin = new Koa();
const app = new Koa();

const HOST = '0.0.0.0';
const APP_PORT = parseInt(process.env.APP_PORT || 3001, 10);
const ADMIN_PORT = parseInt(process.env.API_PORT || 3002, 10);

const webpackmiddleware = webpack({
  config: {
    ...config,
    mode: 'development'
  }
});

app.use(historyApiFallback({ index: '/' }));
admin.use(historyApiFallback({ index: '/' }));
admin.use(async (ctx, next) => {
  if (ctx.url === '/') {
    ctx.url = '/admin.html';
  }
  await next();
});

admin.use(webpackmiddleware);
app.use(webpackmiddleware);

admin.listen(ADMIN_PORT, HOST);
app.listen(APP_PORT, HOST);

console.log(`Running App on http://${HOST}:${APP_PORT}/`); // eslint-disable-line
console.log(`Running Admin on http://${HOST}:${ADMIN_PORT}/`); // eslint-disable-line
