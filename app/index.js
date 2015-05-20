/* global process */
'use strict';
const http = require('http');
const connect = require('connect');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('app/configs/current/node');
const reactMiddleware = require('./lib/middlewares/react');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const app = connect();

app.use(require('mimic')());

app.use(logger(config.env === 'production' ? 'combined' : 'dev'));

app.use(require("webpack-dev-middleware")(
    require('webpack')({
        entry: {
            '/js/script.js': './components/Routes/client.jsx',
            '/css/style.css': './components/Page/css/style.css'
        },
        output: {
            /* global __dirname */
            path: require('path').join(__dirname, '../static'),
            filename: '[name]'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
                }
            ]
        },
        postcss: [
            require('autoprefixer'),
            require('postcss-import'),
            require('postcss-nested')
        ],
        resolve: {
            extensions: ['', '.js', '.jsx' ]
        },
        externals: {
            react: 'React'
        },
        plugins: [
            new ExtractTextPlugin("[name]")
        ]
    })
));

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
