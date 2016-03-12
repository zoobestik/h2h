import through from 'through2';
import eslint from 'gulp-eslint/util.js';
import Promise from 'bluebird';
import FailStore from './failsStore';
import FilesCache from './fileCache';

const filters = {
    /**
     * Filter streams by callback
     *
     * @param {function} tester filter function
     *
     * @returns {Stream}
     */
    filter: function(tester) {
        return through.obj(
            /** @this through.obj */
            function(file, encoding, cb) {
                const checker = Promise.method(tester);

                checker(file, encoding)
                    .then(isSuccess => {
                        isSuccess && this.push(file);
                    })
                    .finally(() => cb());
            }
        );
    },

    /**
     * @returns {Stream} filter eslint failed streams
     */
    eslintFails: function() {
        return this.filter(file => {
            const messages = file.eslint && file.eslint.messages || [];

            return ! messages.some(message => eslint.isErrorMessage(message));
        });
    },

    /**
     * @returns {Stream} filter jscs failed streams
     */
    jscsFails: function(store) {
        return this.filter(
            file => {
                const jscs = file.jscs || { success: true };
                const success = jscs.success;

                if ( ! success) {
                    store.reject({ plugin: 'jscs' });
                }

                return success;
            }
        );
    },
};

export { filters, FailStore, FilesCache };
