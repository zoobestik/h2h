const gulp = require('gulp');
const del = require('del');

require('./gulp/tasks')
    .lints(gulp)
    .links(gulp);

gulp.task('clean:artifacts', function(cb) {
    del([ 'node_modules', 'logs', '.tmp' ], cb);
});

gulp.task('clean', [ 'clean:artifacts', 'clean:links' ]);

gulp.task('test', [ 'lint' ]);

gulp.task('postinstall', [ 'links' ]);
