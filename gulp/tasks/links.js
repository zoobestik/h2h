'use strict';

const symlink = require('gulp-symlink');
const del = require('del');

const links = {
    './node_modules/app': './app',
    './node_modules/components': './components',
    './configs/current': './configs/' + (process.env.NODE_ENV || 'development'),
    './app/configs': './configs',
    '.git/hooks/pre-commit': '.git-hooks/pre-commit',
    '.git/hooks/post-merge': '.git/hooks/post-merge',
};

module.exports = function(gulp) {
    gulp.task('links', function() {
        const targets = Object.keys(links);

        return gulp.src(targets.map(function(key) {
            return links[key];
        }), { read: false })
            .pipe(symlink(targets, {
                relative: true,
                force: true,
            }));
    });

    gulp.task('clean:links', function(cb) {
        del(Object.keys(links), cb);
    });

    return this;
};
