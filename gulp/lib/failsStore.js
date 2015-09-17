/* eslint strict: 0 */
'use strict';

const PluginError = require('gulp-util').PluginError;
const through = require('through2');
const chalk = require('chalk');

class FailsStore {
    constructor() {
        this._errors = [];
    }

    reject(e) {
        this._rejected = true;
        this._errors.push(e);

        return this;
    }

    failAfterReject() {
        const store = this;

        return through.obj(
            function(file, encoding, cb) {
                return cb(null, file);
            },
            /**
             * Check fails in store and terminate process if need
             *
             * @this Stream
             * @param {function} cb callback if no fails
             */
            function(cb) {
                if (store._rejected) {
                    this.emit('error', new PluginError('gulp-fails-store', {
                        name: 'FailStoreError',
                        message: 'build was failed in ' + store._errors.map(function(e) {
                            return chalk.cyan(e.plugin);
                        }).join(', ') + '.',
                    }));
                }

                cb();
            }
        );
    }

}

module.exports = FailsStore;
