var gulp = require('gulp'),
    symlink = require('gulp-symlink');

gulp.task('link:app', function() {
    return gulp.src('./app')
        .pipe(symlink('./node_modules/app', { force: true }));
});

gulp.task('link:components', function() {
    return gulp.src('./components')
        .pipe(symlink('./node_modules/components', { force: true }));
});

gulp.task('postinstall', [ 'link:app', 'link:components' ]);
