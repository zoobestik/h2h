import { relative } from 'path';
import symlink from 'gulp-sym';
import del from 'del';

/**
 * List targets for links
 */
const targets = {
    app: './node_modules/app',

    // 'src/components': './node_modules/components',

    'configs/development': './configs/current',
    configs: './app/configs',
    'gulp/tmpl/pre-commit.sh': '.git/hooks/pre-commit',
};

/**
 * Declaration create symlinks tasks
 */
export default gulp => {
    gulp.task('links', () =>
        gulp.src(Object.keys(targets), { read: false })
            .pipe(symlink(function(file) {
                return targets[relative(file.cwd, file.path)];
            }, { force: true, relative: true }))
    );

    gulp.task('clean:links', gulp.parallel(
        () => del(Object.keys(targets).map(src => targets[src]))
    ));
};
