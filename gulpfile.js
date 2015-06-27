'use strict';

/* global process */

const gulp = require('gulp');
const symlink = require('gulp-symlink');
const webpack = require('webpack-stream');
const del = require('del');
const jscs = require('gulp-jscs');

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

gulp.task('link:git-hooks', function() {
    return gulp.src([ '.git-hooks/pre-commit', '.git-hooks/post-merge' ])
        .pipe(symlink([ '.git/hooks/pre-commit', '.git/hooks/post-merge' ], {
            relative: true,
            force: true
        }));
});

gulp.task('postinstall', [
    'link:app',
    'link:components',
    'link:currentConfig',
    'link:appConfigs',
    'link:git-hooks',
]);

gulp.task('clean:artifacts', function(cb) {
    del([ 'node_modules', 'logs' ], cb);
});

gulp.task('clean', [ 'clean:artifacts' ]);

gulp.task('lint:jscs', function() {
    return gulp.src([ '**/*.js', '**/*.jsx' ])
        .pipe(jscs());
});

gulp.task('lint', [ 'lint:jscs' ]);

gulp.task('test', [ 'lint' ]);
