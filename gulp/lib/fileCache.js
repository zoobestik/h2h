import _fs from 'fs';
import { dirname } from 'path';
import through from 'through2';
import Promise from 'bluebird';
import _mkdirp from 'mkdirp';
import { filters } from '.';

const fs = Promise.promisifyAll(_fs);
const mkdirp = Promise.promisify(_mkdirp);

class FilesCache {
    constructor(path) {
        this._filePath = path;

        try {
            this._cache = require(this._filePath);
        } catch(e) {
            this._cache = {};
        }
    }

    add(path, data) {
        this._cache[path] = data;
    }

    reValidateFile(file) {
        const previousDate = this._cache[file.path];
        const isChanged = ! (previousDate && file.stat.mtime <= new Date(previousDate));

        if (isChanged) {
            delete this._cache[file.path];
        }

        return isChanged;
    }

    persist() {
        return through.obj(
            (file, encoding, cb) => {
                this.add(file.path, file.stat.mtime);

                return cb(null, file);
            },

            cb => {
                mkdirp(dirname(this._filePath))
                    .then(() =>
                        fs.writeFileAsync(this._filePath, JSON.stringify(this._cache))
                    )
                    .catch(e => {
                        console.warn(e.message);
                    })
                    .finally(() => cb());
            }
        );
    }

    filter() {
        return filters
            .filter(file => this.reValidateFile(file));
    }
}

export default FilesCache;
