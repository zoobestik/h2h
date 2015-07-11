'use strict';

const through = require('gulp-symlink/node_modules/through2');
const util = require('./index');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

class FilesCache {

    constructor(path) {
        this._filePath = path;

        try {
            this._cache = require(this._filePath);
        } catch(e) {
            this._cache = {};
        }
    }

    listFullCache() {
        return this._cache;
    }

    _isChanged(file) {
        const previousDate = this._cache[file.path];
        const isChanged = ! (previousDate && file.stat.mtime <= new Date(previousDate));

        if (isChanged) {
            delete this._cache[file.path];
        }

        return isChanged;
    }

    add(path, data) {
        this._cache[path] = data;
    }

    persist() {
        const cache = this;

        return through.obj(
            function(file, encoding, cb) {
                cache.add(file.path, file.stat.mtime);

                return cb(null, file);
            },
            function(cb) {
                fs.writeFileAsync(cache._filePath, JSON.stringify(cache.listFullCache()))
                    .finally(function() {
                        return cb();
                    });
            }
        );
    }

    validate() {
        const self = this;

        return util.filters.filter(function(file) {
            return self._isChanged(file);
        });
    }
}

module.exports = FilesCache;
