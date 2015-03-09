'use strict';

var path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    config = require('app/configs/current/node'),
    reactMiddleware = require('./lib/middlewares/react'),
    app = express();

app.disable('x-powered-by');

app.use(require('mimic')());

app.use(logger(app.get('env') === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.secret));

app.use('/r', express.static(path.join(__dirname, '../static')));

app.use('/', reactMiddleware());

app.use(function (err, req, res) {
    res.status(500);

    if (app.get('env') !== 'production') {
        res.send('<pre>' + err.stack + '</pre>');
    }
});

app.set('port', process.env.port || config.port);

app.listen(app.get('port'));

module.exports = app;