import gulp from 'gulp';
import del from 'del';
import symlinks, { clean as symlinksClean } from './symlinks';
import lints, { fixer as lintsFixer, clean as lintClean } from './lints';
import webpack, { watch as webpackWatch, clean as webpackClean } from './webpack';

gulp.task('compile', webpack);

gulp.task('watcher', () => {
    webpackWatch();
});

gulp.task('lint', lints);

gulp.task('autofix', gulp.parallel(
    lintsFixer,
));

gulp.task('clean', gulp.parallel(
    () => del([
        'node_modules',
        'npm-debug.log',
        'logs',
    ]),
    lintClean,
    symlinksClean,
    webpackClean,
));

gulp.task('postinstall', gulp.parallel(
    symlinks,
));

export default gulp;
