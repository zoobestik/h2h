'use strict';

const path = require('path');
const symlink = require('gulp-symlink');
const del = require('del');

const targets = {
    app: './node_modules/app',
    components: './node_modules/components',
    'configs/development': './configs/current',
    configs: './app/configs',
    'gulp/tmpl/pre-commit': '.git/hooks/pre-commit',
    '.git/hooks/post-merge': '.git/hooks/post-merge',
};

/**
 * Declaration create symlinks tasks
 */
module.exports = function(gulp) {
    gulp.task('links', function() {
        return gulp.src(Object.keys(targets), { read: false })
            .pipe(symlink(function(file) {
                return targets[path.relative(file.cwd, file.path)];
            }, {
                relative: true,
                force: true,
            }));
    });

    gulp.task('clean:links', function(cb) {
        del(Object.keys(targets).map(function(src) {
            return targets[src];
        }), cb);
    });

    return this;
};
