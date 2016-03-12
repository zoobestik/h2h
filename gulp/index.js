import gulp from 'gulp';
import del from 'del';
import { lints, links } from './tasks';

lints(gulp);
links(gulp);

gulp.task('clean:artifacts', gulp.parallel(
    () => del([ 'dist', 'node_modules', 'logs', '.tmp' ])
));

gulp.task('clean', gulp.parallel(
    'clean:artifacts',
    'clean:links'
));

gulp.task('test', gulp.series(
    'lint'
));

gulp.task('postinstall', gulp.parallel(
    'links'
));

export default gulp;
