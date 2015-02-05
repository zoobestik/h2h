'use strict';

var path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    app = express();

app.disable('x-powered-by');

app.use(logger(app.get('env') === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', require('./lib/react-middleware'));

app.use(function (err, req, res, next) {
    res.status(500);

    if (app.get('env') !== 'production') {
        res.send('<pre>' + err.stack + '</pre>');
    }
});

app.set('port', process.env.port || 3000);

app.listen(app.get('port'));

module.exports = app;