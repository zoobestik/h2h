'use strict';

/* global process */

const gulp = require('gulp');
const del = require('del');

require('./gulp/tasks')
    .links(gulp)
    .lints(gulp);

gulp.task('clean:artifacts', function(cb) {
    del([ 'node_modules', 'logs' ], cb);
});

gulp.task('clean', [ 'clean:artifacts', 'clean:links' ]);

gulp.task('test', [ 'lint' ]);

gulp.task('postinstall', [ 'links' ]);
