'use strict';

const through = require('through2');
const eslintUtil = require('gulp-eslint/util.js');
const Promise = require('bluebird');

module.exports = {
    filters: {

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
                    const self = this;

                    Promise.method(tester)(file, encoding)
                        .then(function(isSuccess) {
                            if (isSuccess) {
                                self.push(file);
                            }
                        })
                        .finally(function() {
                            return cb();
                        });
                }
            );
        },

        /**
         * @returns {Stream} filter eslint failed streams
         */
        eslintFails: function() {
            return this.filter(function(file) {
                const messages = file.eslint && file.eslint.messages || [];

                return ! messages.some(function(message) {
                    return eslintUtil.isErrorMessage(message);
                });
            });
        },

        /**
         * @returns {Stream} filter jscs failed streams
         */
        jscsFails: function() {
            return this.filter(function(file) {
                return file.jscs && file.jscs.success;
            });
        },
    },

    FailStore: require('./failsStore'),
    FilesCache: require('./fileCache'),
};
