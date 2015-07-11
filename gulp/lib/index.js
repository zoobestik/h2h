'use strict';

const through = require('gulp-symlink/node_modules/through2');
const eslintUtil = require('gulp-eslint/util.js');
const Promise = require('bluebird');

module.exports = {
    filters: {

        filter: function(tester) {
            return through.obj(function(file, encoding, cb) {
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
            });
        },

        eslintFails: function() {
            return this.filter(function(file) {
                const messages = file.eslint && file.eslint.messages || [];

                return ! messages.some(function(message) {
                    return eslintUtil.isErrorMessage(message);
                });
            });
        },

        jscsFails: function() {
            return this.filter(function(file) {
                return file.jscs && file.jscs.success;
            });
        },
    },
};

module.exports.FilesCache = require('./file-cache');
module.exports.FailStore = require('./fails');
