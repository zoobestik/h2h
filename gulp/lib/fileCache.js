/* eslint strict: 0 */
'use strict';

const through = require('through2');
const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const mkdirp = Promise.promisify(require('mkdirp'));

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
                mkdirp(path.dirname(cache._filePath))
                    .then(function() {
                        return fs.writeFileAsync(cache._filePath, JSON.stringify(cache.listFullCache()));
                    })
                    .catch(function(e) {
                        console.warn(e.message);
                    })
                    .finally(function() {
                        return cb();
                    });
            }
        );
    }

    validate() {
        const self = this;

        return require('./index').filters.filter(function(file) {
            return self._isChanged(file);
        });
    }
}

module.exports = FilesCache;
