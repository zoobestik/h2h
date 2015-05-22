'use strict';
/* global process */
const gulp = require('gulp');
const symlink = require('gulp-symlink');
const webpack = require('gulp-webpack');
const del = require('del');


gulp.task('link:app', function() {
    return gulp.src('./app')
        .pipe(symlink('./node_modules/app', { force: true }));
});

gulp.task('link:components', function() {
    return gulp.src('./components')
        .pipe(symlink('./node_modules/components', { force: true }));
});

gulp.task('link:currentConfig', function() {
    const env = process.env.NODE_ENV || 'development';

    return gulp.src('./configs/' + env)
        .pipe(symlink('./configs/current', { force: true }));
});

gulp.task('link:appConfigs', function() {
    return gulp.src('./configs')
        .pipe(symlink('./app/configs', { force: true }));
});

gulp.task('postinstall', [ 'link:app', 'link:components', 'link:currentConfig', 'link:appConfigs' ]);

gulp.task('clean:artifacts', function(cb) {
    del([ 'node_modules', 'logs' ], cb);
});

gulp.task('clean', [ 'clean:artifacts' ]);
