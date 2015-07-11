'use strict';

const path = require('path');
const jscs = require('gulp-jscs');
const eslint = require('gulp-eslint');
const util = require('gulp-eslint/node_modules/gulp-util');
const lib = require('../lib');
const FilesCache = lib.FilesCache;
const FailStore = lib.FailStore;
const excludeFiles = [ '!node_modules/**', '!logs/**', '!.tmp/**' ];

module.exports = function(gulp) {
    gulp.task('lint:js', function() {
        const cache = new FilesCache(path.join(process.cwd(), '.tmp', 'js_files.json'));
        const status = new FailStore();

        return gulp.src([ '**/*.js', '**/*.jsx' ].concat(excludeFiles))
            .pipe(cache.validate())
            .pipe(eslint({
                ignore: true,
                ignorePath: path.join(process.cwd(), '.eslintignore'),
            }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
            .on('error', function(e) {
                status.reject(e);
            })
            .pipe(jscs())
            .on('error', function(e) {
                util.log(e.message);
                status.reject(e);
            })
            .pipe(lib.filters.eslintFails())
            .pipe(lib.filters.jscsFails())
            .pipe(cache.persist())
            .pipe(status.failAfterReject());
    });

    gulp.task('lint', [ 'lint:js' ]);

    return this;
};
