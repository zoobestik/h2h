/* global process */
/* global __dirname */
'use strict';
var http = require('http'),
    connect = require('connect'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    serveStatic = require('serve-static'),
    config = require('app/configs/current/node'),
    reactMiddleware = require('./lib/middlewares/react'),
    app = connect();

app.use(require('mimic')());

app.use(logger(config.env === 'production' ? 'combined' : 'dev'));

app.use(serveStatic(__dirname + '/../static'));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.secret));

app.use(reactMiddleware());

app.use(function(err, req, res, next) {
    if ( err.redirect) {

        res.statusCode = err.statusCode || 302;
        res.setHeader('Location', err.redirect);

        res.end();
    } else {
        next(err);
    }
});

app.use(function (err, req, res, next) {
    res.statusCode = 500;

    if (config.env !== 'production') {
        res.end('<pre>' + err.stack + '</pre>');
    }
});

http.createServer(app).listen(process.env.port || config.port);

module.exports = app;
