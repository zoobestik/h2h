import gulp from 'gulp';
import { relative } from 'path';
import symlink from 'gulp-sym';
import del from 'del';

/**
 * List targets for links
 */
const targets = {
    src: './node_modules/app',
    'src/components': './node_modules/components',
};

/**
 * Clean generator symlinks
 */
export const clean = () =>
    del(Object.keys(targets).map(src => targets[src]));

/**
 * Declaration create symlinks tasks
 */
export default () =>
    gulp.src(Object.keys(targets), { read: false })
        .pipe(symlink(
            file => targets[relative(file.cwd, file.path)],
            { force: true, relative: true }
        ));
