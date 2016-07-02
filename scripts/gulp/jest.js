import gulp from 'gulp';
import jest from 'gulp-jest';
import filter from 'gulp-filter';

import { getIgnorePatterns } from '../lib/ignore';

export default () =>
    getIgnorePatterns()
        .then(ignorePatterns =>
            gulp.src('.', { root: process.cwd() })
                .pipe(filter(ignorePatterns))
                .pipe(jest())
        );
