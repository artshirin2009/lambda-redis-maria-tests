var express = require('express');
var indexRouter = require('./routes/index');
var app = express();
app.use('/', indexRouter);
var http = require('http');
var port = 3000;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

