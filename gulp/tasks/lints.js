import { join } from 'path';
import jscs from 'gulp-jscs';
import eslint from 'gulp-eslint';
import { filters, FilesCache, FailStore } from '../lib';

const excludeFiles = [ '!dist/**', '!node_modules/**', '!logs/**', '!.tmp/**' ];

/**
 * Declaration sources linting tasks
 */
export default gulp => {
    /**
     * Javascript files checker
     */
    gulp.task('lint:js', () => {
        const store = new FailStore();
        const cache = new FilesCache(join(process.cwd(), '.tmp', 'js_files.json'));

        return gulp.src([ '**/*.js' ].concat(excludeFiles))
            .pipe(cache.filter())
            .pipe(eslint({
                ignore: true,
                ignorePath: join(process.cwd(), '.eslintignore'),
            }))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
            .on('error', e => {
                store.reject(e);
            })
            .pipe(jscs())
            .pipe(jscs.reporter())
            .pipe(filters.eslintFails())
            .pipe(filters.jscsFails(store))
            .pipe(cache.persist())
            .pipe(store.failAfterReject());
    });

    gulp.task('lint', gulp.series('lint:js'));
};
