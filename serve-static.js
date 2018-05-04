const Koa = require('koa');
const compress = require('koa-compress');
const koaStatic = require('koa-static');
const historyApiFallback = require('./history-middleware');

const admin = new Koa();
const app = new Koa();

const APP_PORT = parseInt(process.env.APP_PORT || 3001, 10);
const ADMIN_PORT = parseInt(process.env.API_PORT || 3002, 10);
const HOST = '0.0.0.0';

const redirecthttpsMiddleware = (ctx, next) => {
	if (ctx.secure) return next();
	if (ctx.get('x-forwarded-proto') === 'https') {
		return next();
	}

	if (ctx.protocol === 'http' && ctx.headers.host) {
		return ctx.redirect(`https://${ctx.headers.host}${ctx.url}`);
	}
	return next();
};

if (process.env.REDIRECT_TO_HTTPS) {
	app.use(redirecthttpsMiddleware);
	admin.use(redirecthttpsMiddleware);
}

app.use(historyApiFallback({index: '/'}));
app.use(compress());
app.use(koaStatic('./dist'));

admin.use(historyApiFallback({index: '/'}));
admin.use(async (ctx, next) => {
	if (ctx.url === '/') {
		ctx.url = '/admin.html';
	}
	return next();
});
admin.use(compress());
admin.use(koaStatic('./dist'));

admin.listen(ADMIN_PORT, HOST, err => {
	if (err) throw err;
	console.log(
		`\r\n\r\n🐬  Prod Admin server listening at http://${HOST}:${ADMIN_PORT} 🐬`
	);
});

app.listen(APP_PORT, HOST, err => {
	if (err) throw err;
	console.log(
		`🐬  Prod App server listening at http://${HOST}:${APP_PORT} 🐬\r\n\r\n`
	);
});
