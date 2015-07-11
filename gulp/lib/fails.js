'use strict';

const PluginError = require('gulp-eslint/node_modules/gulp-util').PluginError;
const through = require('gulp-symlink/node_modules/through2');
const chalk = require('gulp-eslint/node_modules/gulp-util/node_modules/chalk');

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
