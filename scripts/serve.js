
var fs = require('fs');
var path = require('path');
var express = require('express');
var compression = require('compression');
var app = express();

app.set('env', process.env.NODE_ENV || 'dev');

app.use(compression())
app.use(express.static('dist'));

app.use(function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App Server at http://%s:%s (env = %s)', host, port, app.get('env'));
});
