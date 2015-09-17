const symlink = require('gulp-symlink');
const del = require('del');

const links = {
    '.git/hooks/pre-commit': './gulp/tmpl/pre-commit',
    '.git/hooks/post-merge': '.git/hooks/post-merge',
};

/**
 * Declaration create symlinks tasks
 */
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
