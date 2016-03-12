import through from 'through2';
import { PluginError } from 'gulp-util';
import chalk from 'chalk';

class FailsStore {
    _errors = []; // TODO: must be const!

    reject(e) {
        this._errors.push(e);

        return this;
    }

    failAfterReject() {
        const errors = this._errors;

        return through.obj(

            (file, encoding, cb) =>
                cb(null, file),

            /**
             * Check fails in store and terminate process if need
             *
             * @this Stream
             * @param {function} cb callback if no fails
             */
            function(cb) {
                if (errors.length) {
                    this.emit('error',
                        new PluginError('gulp-fails-store', {
                            name: 'FailStoreError',
                            message: 'build was failed in ' +
                                errors
                                    .map(e => chalk.cyan(e.plugin))
                                    .filter((err, i, list) =>
                                        list.indexOf(err, i + 1) < 0
                                    )
                                    .join(', ') +
                                '.',
                        })
                    );
                }

                cb();
            }
        );
    }

}

export default FailsStore;
