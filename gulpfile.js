/* global process */
'use strict';
var gulp = require('gulp'),
    symlink = require('gulp-symlink'),
    webpack = require('gulp-webpack');

gulp.task('link:app', function() {
    return gulp.src('./app')
        .pipe(symlink('./node_modules/app', { force: true }));
});

gulp.task('link:components', function() {
    return gulp.src('./components')
        .pipe(symlink('./node_modules/components', { force: true }));
});

gulp.task('link:currentConfig', function() {
    var env = process.env.NODE_ENV || 'development';

    return gulp.src('./configs/' + env)
        .pipe(symlink('./configs/current', { force: true }));
});

gulp.task('link:appConfigs', function() {
    return gulp.src('./configs')
        .pipe(symlink('./app/configs', { force: true }));
});

gulp.task('postinstall', [ 'link:app', 'link:components', 'link:currentConfig', 'link:appConfigs' ]);

gulp.task('js', function() {
    return gulp.src('./components/Routes/client.jsx')
        .pipe(webpack({
            output: {
                filename: 'script.js'
            },
            module: {
                loaders: [
                    {test: /\.jsx$/, loader: 'babel-loader'}
                ]
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            externals: {
                react: 'React'
            }
        }))
        .pipe(gulp.dest('static/js/'));
});