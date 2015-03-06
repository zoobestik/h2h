'use strict';

class PageStore { //extends Map.prototype { -- not working :'((

    get _data() {
        return this.__data || (this.__data = {});
    }

    getState() {
        let data = this._data;

        return Object.keys(data).reduce(function(result, key) {
            result[key] = data[key];
            return result;
        }, {});
    }

    set(key, val) {
        this._data[key] = val;
        return this;
    }
}

module.exports = PageStore;
